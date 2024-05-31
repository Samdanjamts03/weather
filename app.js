// API -> zuugsh / tag shuugeed hariu ilgeene.
// fetch() -> api ruu huselt/requist ywuulna.
// response -> huseltiin hariu,
// response -> 200 : approved, 404, 300, 500: error
// promise -> hariu ireh amlalt -> .then
// json() -> zambraagui data-g tsegtstei gargaj iruuleh
/*fetch('https://fakestoreapi.com/carts').then(
	response => response.json()
).then(
	cart => {
		console.log(cart);
		console.log(cart[0].title);
	}
)*/
const searchBtn = document.getElementsByTagName('button')[0];
const temp = document.querySelector('.temp');
const name = document.querySelector('.name');
const wind = document.querySelector('.wind');
const desc = document.querySelector('.desc');
const input = document.getElementsByTagName('input')[0]
searchBtn.addEventListener('click',()=>{
	let city = input.value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	weather => {
		console.log(weather);
		console.log(weather.name);
		console.log(weather.main.temp);
		console.log(weather.weather[0].description);
		console.log(weather.wind.speed);
		name.innerText = weather.name;
		temp.innerText = weather.main.temp;
		desc.innerText = weather.weather[0].description
		wind.innerText = weather.wind.speed;
		switch(weather.weather[0].main){
			case "Clouds":
				document.getElementsByTagName('img')[0].src=""
				break;
			case "Sunny":
				document.getElementsByTagName('img')[0].src='';
				break;
		}
	}
);
});