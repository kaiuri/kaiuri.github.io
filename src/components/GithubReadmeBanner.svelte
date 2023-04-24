<svelte:options immutable={true} />

<script lang="ts">
  let params: Record<string, string> = {
    langs_count: "10",
    username: "kaiuri",
    layout: "default",
    hide: ["html", "javascript", "css"].join(","),
    custom_title: "top languages",
    count_private: "true",
    theme: "discord_old_blurple",
  };
</script>

<img
  class="border-hidden"
  src={"https://github-readme-stats.vercel.app/api/top-langs/?" +
    new URLSearchParams(params)}
  alt="Github Banner"
/>
