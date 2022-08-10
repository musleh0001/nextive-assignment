import { createStore } from "vuex";

export default createStore({
	state: {
		projects: [
			{
				id: 1,
				title: "Github Finder",
				img: require("@/assets/images/github-finder.png"),
				github_link: "https://github.com/musleh0001/github-finder",
				live_link: "https://github-user-info-finder.vercel.app/",
			},
			{
				id: 2,
				title: "Travel Advisor",
				img: require("@/assets/images/travel-advisor.png"),
				github_link: "https://github.com/musleh0001/travel_advisor",
				live_link: "https://travel-advisor-mmk.netlify.app/",
			},
			{
				id: 3,
				title: "House Marketplace",
				img: require("@/assets/images/house-marketplace.png"),
				github_link: "https://github.com/musleh0001/house-marketplace",
				live_link: "https://house-marketplace-mk.vercel.app/",
			},
			{
				id: 4,
				title: "Jobs API",
				img: require("@/assets/images/jobs-api.png"),
				github_link: "https://github.com/musleh0001/express-jobs-api",
				live_link: "https://express-jobs-api.herokuapp.com/",
			},
		],
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
