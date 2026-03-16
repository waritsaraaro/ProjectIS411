<script>
    let { name, version, description, website } = $props()
</script>

<p>
     The <code>{name}</code> package is {description}.
</p>
<p>
    Dowload version {version} from
    <a href="https://www.npmjs.com/package/{name}">npm</a> and <a href=
{website}>learn more here</a>
</p>