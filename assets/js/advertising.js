// console.log("mon fichier est bien chargé")



//1) sélectionner la balise html
const bandeau = document.querySelector("#add > p")
// Avec jQuery
$("#add > p").first()

// Phrase actuellement affichée:
let actualSentenceIndex = 0

const sentences = ["N'oubliez pas de voir notre nouvelle collection","Promotions en cours sur tout les produits électroniques","Inscrivez-vous à la newletter!!!",]

const insertAdd = (index) => {
	bandeau.innerText = sentences [index] // sentences [0 -> "n'oubliez pas de voir notre nouvelle collection"]
}

insertAdd(actualSentenceIndex) // insertAdd(0)
actualSentenceIndex = actualSentenceIndex + 1 //actualSentenceIndex ++


setInterval (() =>{	
	insertAdd(actualSentenceIndex)
	if (actualSentenceIndex === sentences.length - 1) {
		actualSentenceIndex = 0
	} else {
		actualSentenceIndex = actualSentenceIndex + 1
	}
	console.log(actualSentenceIndex)
/*actualSentenceIndex = (actualSentenceIndex + 1) % sentences.length*/
}, 10000);

setTimeout (() => {
	console.log("console log après 5 secondes")
}, 5000);


	$(window).on("scroll",(function() {
		const documentHeight = $(document).height()
		const actualScrollTop = $(document).scrollTop()
		const windowHeight = $(window).height()

		if (windowHeight + actualScrollTop === documentHeight) {
			$("#ancre").fadeIn()
		}
	})

	$("#ancre").click(function () {
		$(document).scrollTop(0)
		$("#ancre").fadeOut()
	})