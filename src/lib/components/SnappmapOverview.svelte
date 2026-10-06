<script>

let { snappmap } = $props();
// console.log(snappmap);
</script>

<article>
  <a href={`snappmaps/${snappmap.slug}`}>
    <h2>{snappmap.name}</h2>

    <p>
      <time datetime={snappmap.time_start}>
     {snappmap.time_start}</time>

      <span> - </span>
 
      <time datetime={snappmap.time_end}>
        {snappmap.time_end}
    </time>
    </p>
  </a>
</article>

<style>

</style>