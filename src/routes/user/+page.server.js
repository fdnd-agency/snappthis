// Anne-fleur's unique id from directus
const userUuid = "5e9589a5-ebfa-4a99-87a6-010f2f571444";

export async function load({ fetch }) {
  // Get all the users and their groups from directus
  const response = await fetch(
    "https://fdnd-agency.directus.app/items/snappthis_user?fields=*,groups.*"
  );

  // Get users data
  const { data: users } = await response.json();

  // Find anne fleur in the user data with her uuid
  const user = users.find((user) => user.uuid === userUuid);

  // Get all the groups and their Snappsmaps from directus
  const groupsResponse = await fetch(
    "https://fdnd-agency.directus.app/items/snappthis_group?fields=*,snappmap.*"
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
    "https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=*,snaps.*"
  );

  const { data: snappmaps } = await snappmapResponse.json();

  const snapsResponse = await fetch (
    "https://fdnd-agency.directus.app/items/snappthis_snap?limit=-1"
  );

  const { data:snaps} = await snapsResponse.json();


  // filter snaps from anne fleur
      const anneFleurSnaps = snaps.filter(
        (snap) => snap.author === userUuid
  )

  const totalSnaps = anneFleurSnaps.length;

  console.log(totalSnaps);

  // Get the reactions from the useruuid
  const reactionsResponse = await fetch(
    `https://fdnd-agency.directus.app/items/snappthis_action?filter[user][_eq]=${userUuid}`
  );

  const { data: reactions } = await reactionsResponse.json();

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
    const groupSnaps = matchingSnappmaps.flatMap((snappmap) => snappmap.snaps);
    // console.log('Een snapje:',groupSnaps[0] )

    // Get the user's reactions that belong to the group
    const groupReactions = reactions.filter((reaction) =>
      groupSnaps.some((snap) => snap.uuid === reaction.snap)
    );

    // Count the likes in this groups
    const likes = groupReactions.filter(
      (reaction) => reaction.action === "like"
    ).length;

    // Count the tomatoes in this groups
    const tomatoes = groupReactions.filter(
      (reaction) => reaction.action === "tomato"
    ).length;

    // Count the star in this groups
    const stars = groupReactions.filter(
      (reaction) => reaction.action === "star"
    ).length;

    // add the snaps to the group
    return {
      ...group,
      snaps: groupSnaps,
      likes: likes,
      tomatoes: tomatoes,
      stars: stars,
    };
  });

//   Calculate total nummer of the stars from all the groups
  const totalStars = groupsWithSnaps.reduce(
    (total, group) => total + group.stars,
    0
  );

//   console.log(totalStars);

  return { user, groups: groupsWithSnaps, totalStars, totalSnaps };
}
