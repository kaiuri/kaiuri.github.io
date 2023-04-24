<script lang="ts">
  import * as R from "ramda";
  import "../app.css";
  import { page } from "$app/stores";

  let width: number;
  let height: number;
  const routes = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    // { name: "CONTACT", href: "/contact" },
    // { name: "BLOG", href: "/blog" },
    // { name: "PROJECTS", href: "/projects" },
    // { name: "RESUME", href: "/resume" },
  ];

  $: current = R.applySpec({
    name: (url: URL) => url.pathname.toUpperCase(),
    href: (url: URL) => url.href,
  })($page.url);
  $: rest = routes.filter((r) => r.href !== $page.url.pathname);
</script>

<svelte:window bind:outerHeight={height} bind:outerWidth={width} />
<svelte:head>
  <title>{current.name}</title>
</svelte:head>

<header class="block">
  <nav class="block">
    <a class="text-sky-100 text-2xl font-bold p-2"
       href={current.href}>
      {current.name}
    </a>
    <ul class="inline-block">
      {#each rest as p}
        <li class="inline-block text-2xl font-bold p-2 text-cyan-300">
          <a class="hover:text-red-300" href={p.href}>{p.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
<main class="block">
  <slot />
</main>

<style>
  :global(body) {
    background-color: theme("colors.cyan.800");
  }
  header {
    background-color: theme("colors.cyan.900");
  }
  main {
    padding: theme("spacing.4");
  }
  :global(nav) {
    padding: theme("spacing.4");
    background-color: theme("colors.cyan.900");
  }
  :global(p) {
    color: theme("colors.cyan.100");
  }
  :global(h1, h2, h3, h4, h5, h6) {
    color: theme("colors.cyan.100");
    font-weight: theme("fontWeight.bold");
  }
  :global(a) {
    color: theme("colors.cyan.300");
  }
</style>
