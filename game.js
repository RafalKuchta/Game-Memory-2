const cardsClass = ["red", "red", "green", "green", "blue", "blue", "violet", "violet", "brown", "brown", "aqua", "aqua", "chartreuse", "chartreuse", "salmon", "salmon", "lightskyblue", "lightskyblue"];

let cards = document.querySelectorAll('div');
cards = [...cards];

let activeCard = "";
let activeCards = [];

let gameResult = "";
const finishGame = cards.length / 2;

const clickCard = function () {
    activeCard = this;
    cards = cards.filter(card => !card.classList.contains('off'));

    if (activeCards[0] === activeCard) return

    //1 kliknięcie
    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
        activeCards.forEach(card => card.classList.remove("hidden"));
    }
    //2 kliknięcie

    else {
        activeCards[1] = activeCard;
        activeCards.forEach(card => card.classList.remove("hidden"));
        cards.forEach(card => card.removeEventListener('click', clickCard));
        setTimeout(() => {
            if (activeCards[0].className === activeCards[1].className) {
                activeCards.forEach(card => card.classList.add('off'));
                gameResult++;
                console.log("wygrana", cards);
                if (gameResult === finishGame) {
                    clearInterval(idI)
                }
            } else {
                activeCards.forEach(card => card.classList.add('hidden'));
                console.log("przegrana")
            }
    activeCards.length = 0;
    activeCard = '';
    cards.forEach(card => card.addEventListener('click', clickCard));
        }, 500);

    }
}

// const init = function () {
//     cards.forEach(card => {
//         let index = Math.floor(Math.random() * cardsClass.length);
//         card.classList.add(cardsClass[index]);
//         cardsClass.splice(index, 1);
//     });

//     setTimeout(() => {
//         cards.forEach(card => {
//             card.classList.add('hidden');
//             card.addEventListener('click', clickCard);
//         })
//     }, 1000);
// }

const btn = document.querySelector("button.start");
const span = document.querySelector("span");
let time = 0.00;
let idI

btn.addEventListener("click", function () {
    cards.forEach(card => {
        let index = Math.floor(Math.random() * cardsClass.length);
        card.classList.add(cardsClass[index]);
        cardsClass.splice(index, 1);
    });

    idI = setInterval(() => {
        time += 0.01;
        span.innerHTML = `${time.toFixed(2)} sec`;
    }, 10)

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.add('hidden');
            card.addEventListener('click', clickCard);

        })

    }, 2000);
});
