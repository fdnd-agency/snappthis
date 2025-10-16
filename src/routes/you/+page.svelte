<script>
    let { data } = $props()
    const user = data.user
</script>

<h1>You</h1>

<h2>{ user.name }</h2>

<ul>
    <li>{ user.gender }</li>
    <li>{ user.birthdate.substring(0, 10) }</li>
    <li>@{ user.usecase }</li>
    <li>{ user.email }</li>
</ul>