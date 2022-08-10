<template>
	<nav class="flex items-center justify-between mx-24 my-6">
		<div class="flex items-center justify-between gap-0">
			<img src="./assets/images/logo.png" alt="logo" class="w-10" />
			<p class="text-4xl">Musleh</p>
		</div>
		<div class="flex items-center justify-between gap-4">
			<router-link to="/" class="font-bold">Home</router-link>
			<router-link to="/projects" class="font-bold">Projects</router-link>
			<router-link to="/about" class="font-bold">About</router-link>
		</div>
	</nav>
	<main class="mx-24">
		<router-view />
	</main>

	<footer class="flex items-center justify-center m-8">
		<p>&copy; 2022. Developed by Musleh</p>
	</footer>
</template>

<style>
nav a.router-link-exact-active {
	color: #42b983;
}
</style>
