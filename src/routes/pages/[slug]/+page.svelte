<script>
	import {page} from '$app/stores'
	/** @type {import('./$types').PageData} */
	export let pageName = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/'))
	console.log(pageName)
	export let data;

</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>