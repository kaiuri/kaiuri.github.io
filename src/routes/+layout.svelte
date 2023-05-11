<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import { pipe } from "fp-ts/function";
  import { map } from "fp-ts/lib/Functor";

  const RouteRegex = new RegExp(/\/src\/routes(.*)\/\+page.svelte/);
  // '/src/routes/+page.svelte': [Function: /src/routes/+page.svelte],
  // '/src/routes/about/+page.svelte': [Function: /src/routes/about/+page.svelte]
  const routes = pipe(
    import.meta.glob("/src/routes/**/*.svelte"),
    (components) => Object.keys(components),
    (files) =>
      files.flatMap((route: string) => route.match(RouteRegex)?.[1] ?? ""),
    (routes) => Array.from(new Set(routes)),
    (routes) =>
      routes.flatMap((route) => ({
        name: route === "" ? "/HOME" : route.toUpperCase(),
        href: route === "" ? "/" : route,
      }))
  );

  let width: number;
  let height: number;
</script>

<svelte:window bind:outerHeight={height} bind:outerWidth={width} />
<svelte:head>
  <title>{$page.url.pathname}</title>
</svelte:head>

<header class="block">
  <nav class="block">
    <ul class="inline-block">
      {#each routes as p}
        <li class="inline-block text-2xl p-2">
          <a
            class={"hover:text-red-300 " +
              ($page.url.pathname === p.href ? "font-bold" : "")}
            href={p.href}>{p.name}</a
          >
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
    color: theme("colors.cyan.400");
  }
</style>

