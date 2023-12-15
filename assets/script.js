const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables : 
let arrow_right = document.getElementById("arrow_right")
let arrow_left = document.getElementById("arrow_left")
let image_banner = document.querySelector(".banner-img")
let classDots = document.querySelector("#banner .dots")
let tagLine = document.querySelector('#banner p')
let inprogress = 0


// Boucles qui crée les boutons de la pagination
for (let i = 0; i < slides.length; i++) {

	let span = document.createElement("span")
	span.classList.add("dot")
	classDots.appendChild(span)

	// Met "dot_selected" -> 1er dot
	if ( i === 0){
		span.classList.add("dot_selected")
	}

}

// Ensemble des elements dot ayant la class .dot
let dots = document.querySelectorAll('.dot')



// arrow_right 
arrow_right.addEventListener('click', () => {
	inprogress = (inprogress ===  slides.length - 1 ? 0 : inprogress + 1) ;

	image_banner.src = `./assets/images/slideshow/${slides[inprogress].image}` ;
	tagLine.innerHTML = slides[inprogress].tagLine ;

	dots.forEach(dot => dot.classList.remove('dot_selected')) ;
	dots[inprogress].classList.add('dot_selected') ;

})


// arrow_left
arrow_left.addEventListener('click', () => {
	inprogress = (inprogress === 0 ? slides.length - 1 : inprogress -1) ; 

	image_banner.src = `./assets/images/slideshow/${slides[inprogress].image}` ;
	tagLine.innerHTML = slides[inprogress].tagLine ;

	dots.forEach(dot => dot.classList.remove('dot_selected')) ;
	dots[inprogress].classList.add('dot_selected')
})





