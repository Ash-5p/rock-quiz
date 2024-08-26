/* jshint esversion: 11 */

const gameQuestions = [
    {
        question: "Q. Which famous rock legend is known for playing the guitar below?",
        imageSrc: 'assets/images/questions/cloud-guitar.webp',
        answers: [
            { text: 'Prince', correct: true },
            { text: 'Axel Rose', correct: false },
            { text: 'Noodles', correct: false },
            { text: 'Jimmy Page', correct: false }
        ]
    },
    {
        question: "Q. Who was the lead singer of the doors?",
        imageSrc: '',
        answers: [
            { text: 'Mick Jagger', correct: false },
            { text: 'Jim Morrison', correct: true },
            { text: 'Robert Plant', correct: false },
            { text: 'Brian Johnson', correct: false }
        ]
    },
    {
        question: "Q. Who was the original lead guitarist for The Yardbirds before Eric Clapton?",
        imageSrc: '',
        answers: [
            { text: 'Jimmy Page', correct: false },
            { text: 'Chris Dreja', correct: true },
            { text: 'Tony Lommi', correct: false },
            { text: 'Jeff Beck', correct: false }
        ]
    },
    {
        question: "Q. What was the name of AC/DC's first album featuring Bon Scott as the lead singer?",
        imageSrc: '',
        answers: [
            { text: 'Let There Be Rock', correct: false },
            { text: 'TNT', correct: false },
            { text: 'Dirty Deeds Done Dirt Cheap', correct: false },
            { text: 'High Voltage', correct: true }
        ]
    },
    {
        question: "Q. Who was the guitarist for Dire Straits, known for his fingerstyle technique?",
        imageSrc: '',
        answers: [
            { text: 'Steve Vai', correct: false },
            { text: 'Eric Clapton', correct: false },
            { text: 'David Gilmore', correct: false },
            { text: 'Mark Knopfler', correct: true }
        ]
    },
    {
        question: "Q. Who was the guitarist known for his work with Ozzy Osbourne in the early 1980s?",
        imageSrc: '',
        answers: [
            { text: 'Randy Rhoads', correct: true },
            { text: 'Zakk Wylde', correct: false },
            { text: 'David Gilmore', correct: false },
            { text: 'Mark Knopfler', correct: false }
        ]
    },
    {
        question: "Q. Which famous guitarist is known for playing the guitar below?",
        imageSrc: 'assets/images/questions/bm-guitar.jpg',
        answers: [
            { text: 'Randy Rhoads', correct: false },
            { text: 'Angus Young', correct: false },
            { text: 'Brian May', correct: true },
            { text: 'Dio', correct: false }
        ]
    },
    {
        question: "Q. Which 1994 Green Day album helped bring punk rock back to mainstream popularity?",
        imageSrc: '',
        answers: [
            { text: 'Insomniac', correct: false },
            { text: 'Nimrod', correct: false },
            { text: 'Dookie', correct: true },
            { text: 'Warning', correct: false }
        ]
    },
    {
        question: "Q. Which 2001 album by System of a Down featured the hit song \"Chop Suey!\"?",
        imageSrc: '',
        answers: [
            { text: 'Hypnotize', correct: false },
            { text: 'Toxicity', correct: true },
            { text: 'Steal This Album!', correct: false },
            { text: 'Mezmerize', correct: false }
        ]
    },
    {
        question: "Q. Which guitar manufacturer made the original \"SG\" shaped guitar?",
        imageSrc: 'assets/images/questions/sg-guitar.jpg',
        answers: [
            { text: 'Fender', correct: false },
            { text: 'Gibson', correct: true },
            { text: 'Gretch', correct: false },
            { text: 'PRS', correct: false }
        ]
    },
    {
        question: "Q. ",
        imageSrc: '',
        answers: [
            { text: '', correct: false },
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false }
        ]
    }
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // },
    // {
    //     question: "Q. ",
    //     imageSrc: '',
    //     answers: [
    //         { text: '', correct: false },
    //         { text: '', correct: true },
    //         { text: '', correct: false },
    //         { text: '', correct: false }
    //     ]
    // }

] 