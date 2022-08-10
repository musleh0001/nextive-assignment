<template>
	<HeroSection />
	<FollowMe />
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import FollowMe from "@/components/FollowMe.vue";

export default {
	name: "HomeView",
	components: { HeroSection, FollowMe },
	mounted() {
		document.title = "Portfolio - Home";
	},
};
</script>

<style></style>
