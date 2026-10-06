// Anne-fleur's unique id from directus
const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

export async function load({fetch}) {

    // Get all the users and their groups from directus
const response = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_user?fields=*,groups.*'
);

// Get users data
const { data: users } = await response.json();

// Find anne fleur in the user data with her uuid
const user = users.find((user) => user.uuid === userUuid);

// Get all the groups and their Snappsmaps from directus
const groupsResponse = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_group?fields=*,snappmap.*'
);

const { data: groups } = await groupsResponse.json();

//Go through all groups and only keep the groups Anne-Fleur is part of
const userGroups = groups.filter((group) =>
user.groups.some(
    (userGroups) => userGroups.snappthis_group_uuid === group.uuid
)
);

// Get all the snappmaps and their snaps from directus
const snappmapResponse = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=*,snaps.*'
)

const { data: snappmaps } = await snappmapResponse.json();


// Go through all the groups
const groupsWithSnaps = userGroups.map((group) => {

    // get the snappmap ids that belong to this group
    const snappmapIds = group.snappmap.map(
        (snappmap) => snappmap.snappthis_snapmap_uuid
    );

// find the snappmaps that have one of these ids    
    const matchingSnappmaps = snappmaps.filter((snappmap) =>
    snappmapIds.includes(snappmap.uuid)
);

// Get all the snaps from the matching Snappmaps and put them in one list
const groupSnaps = matchingSnappmaps.flatMap(
    (snappmap) => snappmap.snaps
);

// add the snaps to the group
return {
    ...group,
    snaps: groupSnaps
};

});

return { user,groups:groupsWithSnaps };

}