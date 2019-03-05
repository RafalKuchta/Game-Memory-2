const cardsClass = ["red", "red", "green", "green", "blue", "blue", "violet", "violet", "brown", "brown", "aqua", "aqua", "chartreuse", "chartreuse", "salmon", "salmon", "lightskyblue", "lightskyblue"];

let cards = document.querySelectorAll("div");
document.querySelector("button").addEventListener("click", ()=> location.reload())

const startTime = new Date().getTime();

cards = [...cards];
let activeCard = "";
const activeCards = [];
let resultGame = "";
let resultGames = cards.length/2;

const clickCard = function(){
    activeCard = this;
    if(activeCards[0] === activeCard) return;
    activeCard.classList.remove('hidden');
    
    if(activeCards.length === 0){
        activeCards[0] = activeCard
    } else {
        //2 kliknięcie
        activeCards[1] = activeCard;
        cards.forEach(card => card.removeEventListener('click', clickCard))
        setTimeout(()=> {
        if(activeCards[0].className === activeCards[1].className){
            activeCards.forEach(card => card.classList.add("off"));
            cards = cards.filter(card => !card.classList.contains("off"))
            resultGame++;
            if(resultGame === resultGames){
                const finishtTime = new Date().getTime();
                const end = (finishtTime - startTime) / 1000;
                alert(`Udało się, twój wynik to: ${end} sekund`)
            }

         } else {
            activeCards.forEach(card => card.classList.add('hidden'));


        }
        activeCard = "";
        activeCards.length = 0;
        cards.forEach(card => card.addEventListener('click', clickCard))
    }, 500)

    }
    console.log(resultGame, resultGames)
}

const init = function(){
        cards.forEach(card => {
            let position = Math.floor(Math.random() * cardsClass.length);
            card.classList.add(cardsClass[position]);
            cardsClass.splice(position,1)
        });

        setTimeout(()=> {
            cards.forEach(card => {
                card.classList.add("hidden");
                card.addEventListener("click", clickCard)
            });
            
        }, 2000)
    
}

init()
