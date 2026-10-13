import { fail } from '@sveltejs/kit';

const directusUrl = 'https://fdnd-agency.directus.app';

// Vaste gebruiker (Anne-Fleur Pietersen) zolang er geen login is, zij is de admin
const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

export async function load({ fetch, url }) {
    const response = await fetch(
        // specifieke velden ophalen
        `${directusUrl}/items/snappthis_group?fields=uuid,slug,name,users`
    )

    const { data: groups } = await response.json()

    return {
        // Directus heeft geen aanmaakdatum voor groepen. Elk nieuw lid krijgt een oplopend id,
        // dus de groep met het hoogste id in users is het nieuwst toegevoegd.
        // TODO: vervangen door sort=-date_created zodra dat veld in Directus bestaat.
        groups: groups.sort((a, b) => Math.max(...b.users) - Math.max(...a.users)),
        // /groups?create toont het formulier (de + in de header linkt hiernaartoe)
        showForm: url.searchParams.has('create')
    }
}

export const actions = {
    // Default action: een <form method="POST"> zonder action-attribuut post hierheen
    default: async ({ request, fetch }) => {
        const formData = await request.formData()
        // Spaties aan het begin en eind weghalen
        const name = String(formData.get('name') ?? '').trim()

        // Validatie: bij een fout de naam en melding teruggeven, zodat het formulier ze kan tonen
        if (!name) {
            return fail(400, { name, error: 'Please enter a group name.' })
        }

        if (name.length > 50) {
            return fail(400, { name, error: 'The group name can be 50 characters at most.' })
        }

        // Slug voor in de url maken: "Psychology 2a" wordt "psychology-2a"
        const slug = name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // accenten weghalen: é wordt e
            .replace(/[^a-z0-9]+/g, '-') // alles wat geen letter of cijfer is wordt een streepje
            .replace(/^-|-$/g, '') // geen streepje aan het begin of eind

        if (!slug) {
            return fail(400, { name, error: 'Please use letters or numbers in the group name.' })
        }

        // De slug staat in de url, dus die moet uniek zijn
        const existingResponse = await fetch(
            `${directusUrl}/items/snappthis_group?filter[slug][_eq]=${slug}&fields=uuid`
        )
        const { data: existingGroups } = await existingResponse.json()

        if (existingGroups.length > 0) {
            return fail(400, { name, error: 'A group with this name already exists.' })
        }

        // Groep aanmaken in Directus
        const createResponse = await fetch(`${directusUrl}/items/snappthis_group`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                slug,
                // De admin die de groep maakt wordt meteen het eerste lid
                users: [{ snappthis_user_uuid: userUuid }]
            })
        })

        if (!createResponse.ok) {
            return fail(500, { name, error: 'Something went wrong, please try again.' })
        }

        // Gelukt: de pagina toont een melding en sluit het formulier, de nieuwe groep staat bovenaan
        return { success: true, name }
    }
}
