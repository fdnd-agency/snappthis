<script>
    // haalt de props uit de server js
    let { data } = $props()
</script>

<ul class="groups">
    {#each data.group.snappmap as snapmap}
        <li class="group-list-container">
            <div class="group-list-stats snappmap">
                <h2>
                    <a href={`/snappmaps/${snapmap.slug}`}>
                        {snapmap.name}
                    </a>
                </h2>

                <p>
                    {snapmap.time_start} - {snapmap.time_end}
                </p>
            </div>
        </li>
    {/each}
</ul>

