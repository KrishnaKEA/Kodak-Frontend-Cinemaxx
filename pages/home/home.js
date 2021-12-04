export default () => {
	const displayDiv = document.querySelector(".timeslots");
	const div1object = document.querySelector("#div1");
	const div2object = document.querySelector("#div2");
	const div3object = document.querySelector("#div3");
	const div4object = document.querySelector("#div4");
	let today = new Date();
	let nextday = new Date();

	let day = new Date().getDate();
	let month = today.getMonth();

	let id = 0;
	let selectedDate = "";
	let selectedSlot = "";
	let selectedHall = "";
	let buttonArray = [];
	let slotButtonArray = [];
	let hallButtonArray = [];
	for (let i = 1; i <= 7; i++) {
		if (day <= 9 || month <= 9) {
			day = "0" + day;
			month = "0" + month;
		}

		let btn = document.createElement("button");
		let innertextValue =
			nextday.getFullYear() + "-" + (nextday.getMonth() + 1) + "-" + day;
		btn.innerText = innertextValue;
		displayDiv.appendChild(btn);
		btn.setAttribute("class", "buttonClass");

		nextday.setDate(today.getDate() + i);

		day = nextday.getDate();
		buttonArray.push(btn);
	}
	console.log(buttonArray);
	//let clickedBtn = document.querySelector(".buttonClass");
	buttonArray.forEach((btn) => {
		btn.addEventListener("click", () => {
			selectedDate = btn.innerText;
			console.log(selectedDate);
			displaySlots();
		});
	});

	function displaySlots() {
		div1object.style.display = "none";
		div2object.style.display = "block";
		div3object.style.display = "none";
		div4object.style.display = "none";
	}
	function displayHalls() {
		div1object.style.display = "none";
		div2object.style.display = "none";
		div3object.style.display = "block";
		div4object.style.display = "none";
	}
	function displayMovies() {
		div1object.style.display = "none";
		div2object.style.display = "none";
		div3object.style.display = "none";
		div4object.style.display = "block";
	}
	const moringButtonObject = document.querySelector("#morning");
	slotButtonArray.push(moringButtonObject);
	const afternoonButtonObject = document.querySelector("#afternoon");
	slotButtonArray.push(afternoonButtonObject);
	const eveningButtonObject = document.querySelector("#evening");
	slotButtonArray.push(eveningButtonObject);
	console.log(slotButtonArray);

	slotButtonArray.forEach((slot) => {
		slot.addEventListener("click", () => {
			selectedSlot = slot.innerText;
			displayHalls();
		});
	});
	const hallbuttonAobject = document.querySelector("#A");
	hallButtonArray.push(hallbuttonAobject);
	const hallbuttonBobject = document.querySelector("#B");
	hallButtonArray.push(hallbuttonBobject);
	const hallbuttonCobject = document.querySelector("#C");
	hallButtonArray.push(hallbuttonCobject);
	hallButtonArray.forEach((hall) => {
		hall.addEventListener("click", () => {
			selectedHall = hall.id;
			displayMovies();

			const movieDisplayUlObj = document.querySelector(".movieDisplayClass");
			const apiUrl = `http://54.146.239.101/schedules/${selectedDate}/${selectedSlot}/${selectedHall}`;
			fetch(apiUrl)
				.then((response) => response.json())
				.then((movieData) => {
					console.log(movieData);
					const movieNameElement = document.createElement("li");
					movieNameElement.innerHTML = movieData[0].movieId;
					movieDisplayUlObj.appendChild(movieNameElement);
					const movieImageElement = document.createElement("img");
					movieImageElement.setAttribute("src", "./picture/merry.png");
					movieImageElement.style.width = "200px";
					movieImageElement.style.height = "200px";

					movieDisplayUlObj.appendChild(movieImageElement);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	});
};
