<script>
    let yes = $state(false)
</script>

<label>
    <input type="checkbox" bind:checked={yes}/>
    Yes! Send me a regular email spam.
</label>

{#if yes}
    <p> เดี๋ยวส่งเมลขยะให้ค่าาาา </p>
{:else}
    <p> หล่อนควรจะตอบ Yes น้ะ </p>
{/if}

<button disabled={!yes}> Subscribe </button>