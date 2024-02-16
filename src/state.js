import { reactive } from 'vue'

export const state = reactive({
    qAndA: [
        {
            question: "Qual è la capitale dell'Italia?",
            answers: [
                { index: 1, text: "Roma", correct: true },
                { index: 2, text: "Milano", correct: false },
                { index: 3, text: "Firenze", correct: false },
                { index: 4, text: "Napoli", correct: false }
            ]
        },
        {
            question: "Quanto è alto l'Etna?",
            answers: [
                { index: 1, text: "2.000 metri", correct: false },
                { index: 2, text: "3.329 metri", correct: true },
                { index: 3, text: "4.500 metri", correct: false },
                { index: 4, text: "2.500 metri", correct: false }
            ]
        },
        {
            question: "Quale è il fiume più lungo del mondo?",
            answers: [
                { index: 1, text: "Nilo", correct: true },
                { index: 2, text: "Amazonas", correct: false },
                { index: 3, text: "Yangtze", correct: false },
                { index: 4, text: "Mississippi", correct: false }
            ]
        },
        {
            question: "In quale anno è iniziata la seconda guerra mondiale?",
            answers: [
                { index: 1, text: "1935", correct: false },
                { index: 2, text: "1939", correct: true },
                { index: 3, text: "1942", correct: false },
                { index: 4, text: "1945", correct: false }
            ]
        },
        {
            question: "Quale è il pianeta più grande del sistema solare?",
            answers: [
                { index: 1, text: "Terra", correct: false },
                { index: 2, text: "Marte", correct: false },
                { index: 3, text: "Giove", correct: true },
                { index: 4, text: "Saturno", correct: false }
            ]
        },
        {
            question: "Chi ha scritto 'Romeo e Giulietta'?",
            answers: [
                { index: 1, text: "Charles Dickens", correct: false },
                { index: 2, text: "William Shakespeare", correct: true },
                { index: 3, text: "Jane Austen", correct: false },
                { index: 4, text: "Leo Tolstoy", correct: false }
            ]
        },
        {
            question: "Quale è il metallo più leggero?",
            answers: [
                { index: 1, text: "Ferro", correct: false },
                { index: 2, text: "Alluminio", correct: false },
                { index: 3, text: "Litio", correct: true },
                { index: 4, text: "Rame", correct: false }
            ]
        },
        {
            question: "Quale è il colore primario?",
            answers: [
                { index: 1, text: "Blu", correct: false },
                { index: 2, text: "Rosso", correct: true },
                { index: 3, text: "Giallo", correct: false },
                { index: 4, text: "Verde", correct: false }
            ]
        },
        {
            question: "Qual è il più grande oceano sulla Terra?",
            answers: [
                { index: 1, text: "Oceano Atlantico", correct: false },
                { index: 2, text: "Oceano Indiano", correct: false },
                { index: 3, text: "Oceano Pacifico", correct: true },
                { index: 4, text: "Oceano Artico", correct: false }
            ]
        },
        {
            question: "Quale è il numero atomico dell'idrogeno?",
            answers: [
                { index: 1, text: "1", correct: true },
                { index: 2, text: "2", correct: false },
                { index: 3, text: "3", correct: false },
                { index: 4, text: "4", correct: false }
            ]
        },
        {
            question: "Quale è il piatto tipico italiano a base di pasta ripiena?",
            answers: [
                { index: 1, text: "Pizza", correct: false },
                { index: 2, text: "Risotto", correct: false },
                { index: 3, text: "Lasagne", correct: false },
                { index: 4, text: "Ravioli", correct: true }
            ]
        },
        {
            question: "In quale città si trova la Torre Eiffel?",
            answers: [
                { index: 1, text: "Londra", correct: false },
                { index: 2, text: "Berlino", correct: false },
                { index: 3, text: "Parigi", correct: true },
                { index: 4, text: "Roma", correct: false }
            ]
        },
        {
            question: "Quale è il fiume più lungo d'Europa?",
            answers: [
                { index: 1, text: "Tevere", correct: false },
                { index: 2, text: "Tamigi", correct: false },
                { index: 3, text: "Senna", correct: false },
                { index: 4, text: "Volga", correct: true }
            ]
        },
        {
            question: "Qual è il periodo di rivoluzione della Terra intorno al Sole?",
            answers: [
                { index: 1, text: "365 giorni", correct: true },
                { index: 2, text: "24 ore", correct: false },
                { index: 3, text: "30 giorni", correct: false },
                { index: 4, text: "12 mesi", correct: false }
            ]
        },
        {
            question: "Chi è l'autore de 'Il Piccolo Principe'?",
            answers: [
                { index: 1, text: "F. Scott Fitzgerald", correct: false },
                { index: 2, text: "J.K. Rowling", correct: false },
                { index: 3, text: "Antoine de Saint-Exupéry", correct: true },
                { index: 4, text: "George Orwell", correct: false }
            ]
        }
    ],

    count: 0,

    index: 0,

    modalConfim: false,

    lose: false,

    correct: false
})