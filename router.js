import renderMovies from "./pages/movies/movisRoute.js";
import renderWeather from "./pages/weather/weatherRoute.js";
import renderMain from "./pages/main/main.js";

export default function () {
	const router = new Navigo("/", { hash: true });
	//window.router = router;

	router
		.on({
			"/": () => {
				// call updatePageLinks to let navigo handle the links
				// when new links have been inserted into the dom
				renderMain().then(router.updatePageLinks);
			},
			movies: () => {
				renderMovies();
			},
			weather: () => {
				renderWeather();
			},
			/*
      users: () => {
        renderUsers().then(router.updatePageLinks);
      },
      "/user/:id/": ({ data, params }) => {
        renderUser(data.id);
      },
      */
		})
		.resolve();
}