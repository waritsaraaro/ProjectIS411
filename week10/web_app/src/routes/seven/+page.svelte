<script>
    let {data} = $props()
</script>

<div class="content">
    <h1>blog</h1>
    <ul>
        {#each data.summaries as { slug, title }}
            <li><a href="/seven/{slug}">{title}</a></li>
    {/each}
    </ul>
</div>