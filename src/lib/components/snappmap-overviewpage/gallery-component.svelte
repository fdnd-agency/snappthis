<script>

</script>


<div class="snaps">
    <!-- for each loop -->
     <!-- Data wordt ingeladen op de pagina zelf -->
      <!-- geef dat aan op de pagina gebruik voor nu een fallback -->
    {#each snappMaps as snappMap} 
      <li>
    <picture>
        <!-- WEBP -->
        <source 
        srcset="$lib/assets/example/example-photo.webp" type="image/webp"> 

        <!-- AVIF -->
        <source 
        srcset="$lib/assets/example/example-photo.avif" type="image/avif"> 

        <!-- normale formaat -->
        <img src="$lib/assets/example/example-photo.png" width="100" height="100">
    </picture>
            </li>
    {/each}

            {#each snappMap.snaps.slice(0, 4) as snap, i}
            <li>
                <img
                    src= '{#if snap.picture === empty} {/if}https://fdnd-agency.directus.app/assets/' +
                        snap.picture +
                        '?width=200&height=200&format=webp'}
                    height="200"
                    width="200"
                    alt="" />
            </li>
        {/each}

            <!-- name author -->
             <!-- location of snap -->
              <!--  -->
</div>

