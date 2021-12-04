import homeScript from "./home.js";

export default () => {
<<<<<<< HEAD
    const content = document.querySelector(".content");
    
  
    return fetch("./pages/home/home.html")
      .then((response) => response.text())
      .then((mainHtml) => {
        content.innerHTML = mainHtml;
      });
  };
=======
	const content = document.querySelector(".content");

	return fetch("./pages/home/home.html")
		.then((response) => response.text())
		.then((mainHtml) => {
			content.innerHTML = mainHtml;
			homeScript();
		});
};
>>>>>>> 3ce82eb850da77d2f746394488862803a730c0ba
