<template>
	<div class="flex items-center justify-between">
		<div class="w-1/2">
			<h1 class="text-5xl font-bold text-accent">HI, I AM MUSLEH</h1>
			<p class="text-gray-500 text-xl mt-2">A Full-Stack Developer & DevOps Enthusiast</p>
			<button
				class="text-primary bg-gray-50 border border-gray-600 px-4 py-2 rounded mt-8 hover:bg-accent hover:text-white hover:border-none transition-all"
			>
				<a href="../../public/resume.pdf" download>RESUME</a>
			</button>
		</div>
		<div class="w-1/2">
			<img src="../assets/images/developer.svg" alt="banner logo" class="w-full" />
		</div>
	</div>
</template>

<script>
export default {
	name: "HeroSection",
};
</script>
