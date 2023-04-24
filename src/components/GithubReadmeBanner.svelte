<svelte:options immutable={true} />

<script lang="ts" context="module">
  interface Params extends Record<string, string> {
    maxLangs: string;
    user: string;
    layout: "default" | "compact";
    hide: string;
    theme: string;
  }
</script>

<script lang="ts">
  let params: Params = {
    maxLangs: "15",
    user: "kaiuri",
    layout: "compact",
    hide: [
      // "html",
      // "makefile",
      // "fennel",
      "scheme",
      "javascript",
      // "clojure",
      "lua",
      // "shell",
      "css",
    ].join(","),
    theme: "discord_old_blurple",
  };
</script>

<img
  src={"https://github-readme-stats.vercel.app/api/top-langs/?" +
    new URLSearchParams(params)}
  alt="Github Banner"
/>

<style>
  img {
    width: 100%;
    height: 50%;
  }
</style>
