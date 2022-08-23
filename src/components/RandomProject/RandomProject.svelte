<script>
  import PortfolioPreview from "../PortfolioPreview/PortfolioPreview.svelte";
	export let projects;
  const featuredProject = projects[Math.floor(Math.random() * projects.length)];
</script>

<PortfolioPreview project={featuredProject} />
