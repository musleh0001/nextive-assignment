<template>
	<div>
		<h1 class="text-5xl text-center font-bold text-accent">Projects Portfolio</h1>

		<div class="flex items-center justify-between flex-col md:flex-row flex-wrap gap-8 md:max-w-full mt-16">
			<div v-for="project in $store.state.projects" :key="project.id">
				<div class="flex flex-col items-center justify-center h-64 w-64 rounded shadow-md hover:shadow-2xl">
					<img :src="project.img" :alt="project.title" class="object-cover h-40 w-full rounded-t" />
					<div class="py-4 flex flex-col items-center justify-center">
						<p class="text-xl font-bold">{{ project.title }}</p>
						<div class="flex items-center justify-center gap-2">
							<button class="px-4 py-2 bg-slate-400 rounded-full hover:bg-accent">
								<a :href="project.github_link" target="_blank">Github</a>
							</button>
							<button class="px-4 py-2 bg-slate-400 rounded-full hover:bg-accent">
								<a :href="project.live_link" target="_blank">Live</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style></style>
