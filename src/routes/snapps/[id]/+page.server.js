import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
  const snapUuid = params.id;

  const response = await fetch(
    `https://fdnd-agency.directus.app/items/snappthis_snap?filter[uuid][_eq]=${snapUuid}&fields=*,author.*,author.groups.snappthis_group_uuid.*,snapmap.*,snapmap.groups.snappthis_group_uuid.*`
  );

  const { data: snaps } = await response.json();

  if (!snaps?.[0]) {
    error(404, "Deze snap konden we niet vinden.");
  }

  return { snap: snaps[0] };
}

export const actions = {
  react: async ({ request, params, fetch, }) => {
    const formData = await request.formData();
    const action = formData.get("action");
    const snapUuid = params.id;
    const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';
    const url= 'https://fdnd-agency.directus.app/items/snappthis_action';

    console.log(action, snapUuid,userUuid, url);


  const responseAction = await fetch (url, {
    method: 'POST',
    headers: {
        'Content-type':'application/json'
    },
    body: JSON.stringify ({
        snap: snapUuid,
        user: userUuid,
        action: action
    })
  });

  console.log(responseAction.status);

  }
};
