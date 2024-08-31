/* jshint esversion: 11 */

const gameQuestions = [
    {
        question: "Which band is known for starting the British Invasion in the U.S.?",
        imageSrc: '',
        answers: [
            { text: "The Rolling Stones", correct: false },
            { text: "The Beatles", correct: true },
            { text: "The Who", correct: false },
            { text: "The Kinks", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist of The Beatles?",
        imageSrc: '',
        answers: [
            { text: "Paul McCartney", correct: false },
            { text: "George Harrison", correct: true },
            { text: "John Lennon", correct: false },
            { text: "Ringo Starr", correct: false }
        ]
    },
    {
        question: "At Woodstock in 1969, Jimi Hendrix played a famous version of which song?",
        imageSrc: '',
        answers: [
            { text: "Hey Joe", correct: false },
            { text: "The Star-Spangled Banner", correct: true },
            { text: "Purple Haze", correct: false },
            { text: "All Along the Watchtower", correct: false }
        ]
    },
    {
        question: "Which song by The Rolling Stones features one of the most famous guitar riffs, created by Keith Richards?",
        imageSrc: '',
        answers: [
            { text: "Paint It Black", correct: false },
            { text: "Satisfaction", correct: true },
            { text: "Sympathy for the Devil", correct: false },
            { text: "Angie", correct: false }
        ]
    },
    {
        question: "Who was the original lead guitarist for The Yardbirds before Eric Clapton?",
        imageSrc: '',
        answers: [
            { text: "Jimmy Page", correct: false },
            { text: "Chris Dreja", correct: true },
            { text: "Jeff Beck", correct: false },
            { text: "Tony Iommi", correct: false }
        ]
    },
    {
        question: "What was the debut album of Led Zeppelin released in 1969?",
        imageSrc: '',
        answers: [
            { text: "Led Zeppelin", correct: true },
            { text: "Led Zeppelin II", correct: false },
            { text: "Led Zeppelin III", correct: false },
            { text: "Houses of the Holy", correct: false }
        ]
    },
    {
        question: "Which 1966 album by The Beach Boys is often considered one of the greatest in rock history?",
        imageSrc: '',
        answers: [
            { text: "Pet Sounds", correct: true },
            { text: "Smile", correct: false },
            { text: "Surfin' USA", correct: false },
            { text: "The Beach Boys Today!", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist of The Doors?",
        imageSrc: '',
        answers: [
            { text: "Robby Krieger", correct: true },
            { text: "Ray Manzarek", correct: false },
            { text: "John Densmore", correct: false },
            { text: "Jim Morrison", correct: false }
        ]
    },
    {
        question: "Which band had a hit with 'You Really Got Me' in 1964, featuring a pioneering power chord riff?",
        imageSrc: '',
        answers: [
            { text: "The Who", correct: false },
            { text: "The Kinks", correct: true },
            { text: "The Rolling Stones", correct: false },
            { text: "The Animals", correct: false }
        ]
    },
    {
        question: "What 1971 Led Zeppelin song is often referred to as one of the greatest rock songs of all time?",
        imageSrc: '',
        answers: [
            { text: "Whole Lotta Love", correct: false },
            { text: "Black Dog", correct: false },
            { text: "Stairway to Heaven", correct: true },
            { text: "Rock and Roll", correct: false }
        ]
    },
    {
        question: "Who was the guitarist and vocalist of Pink Floyd?",
        imageSrc: '',
        answers: [
            { text: "Syd Barrett", correct: false },
            { text: "David Gilmour", correct: true },
            { text: "Roger Waters", correct: false },
            { text: "Richard Wright", correct: false }
        ]
    },
    {
        question: "What was David Bowie’s alter ego during the early 1970s?",
        imageSrc: '',
        answers: [
            { text: "The Thin White Duke", correct: false },
            { text: "Aladdin Sane", correct: false },
            { text: "Ziggy Stardust", correct: true },
            { text: "Major Tom", correct: false }
        ]
    },
    {
        question: "Which Lynyrd Skynyrd song is famous for its extended guitar solo at the end?",
        imageSrc: '',
        answers: [
            { text: "Sweet Home Alabama", correct: false },
            { text: "Free Bird", correct: true },
            { text: "Simple Man", correct: false },
            { text: "Gimme Three Steps", correct: false }
        ]
    },
    {
        question: "Who was the original guitarist for Black Sabbath?",
        imageSrc: '',
        answers: [
            { text: "Tony Iommi", correct: true },
            { text: "Jimmy Page", correct: false },
            { text: "Geezer Butler", correct: false },
            { text: "Ozzy Osbourne", correct: false }
        ]
    },
    {
        question: "Which 1977 Fleetwood Mac album became one of the best-selling albums of all time?",
        imageSrc: '',
        answers: [
            { text: "Rumours", correct: true },
            { text: "Tusk", correct: false },
            { text: "Fleetwood Mac", correct: false },
            { text: "Mirage", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist for The Eagles, known for his work on 'Hotel California'?",
        imageSrc: '',
        answers: [
            { text: "Joe Walsh", correct: false },
            { text: "Don Felder", correct: true },
            { text: "Glenn Frey", correct: false },
            { text: "Bernie Leadon", correct: false }
        ]
    },
    {
        question: "Which 1973 album by The Who is a rock opera featuring the song 'Love, Reign o'er Me'?",
        imageSrc: '',
        answers: [
            { text: "Tommy", correct: false },
            { text: "Quadrophenia", correct: true },
            { text: "Who's Next", correct: false },
            { text: "The Who Sell Out", correct: false }
        ]
    },
    {
        question: "What was the name of AC/DC's first album featuring Bon Scott as the lead singer?",
        imageSrc: '',
        answers: [
            { text: "High Voltage", correct: true },
            { text: "TNT", correct: false },
            { text: "Let There Be Rock", correct: false },
            { text: "Who Made Who", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist of Queen, known for his distinctive sound using a homemade guitar?",
        imageSrc: '',
        answers: [
            { text: "Roger Taylor", correct: false },
            { text: "John Deacon", correct: false },
            { text: "Brian May", correct: true },
            { text: "Freddie Mercury", correct: false }
        ]
    },
    {
        question: "Which band released the album 'Back in Black' in 1980?",
        imageSrc: '',
        answers: [
            { text: "Led Zeppelin", correct: false },
            { text: "AC/DC", correct: true },
            { text: "Aerosmith", correct: false },
            { text: "Deep Purple", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist for Van Halen, known for his tapping technique?",
        imageSrc: '',
        answers: [
            { text: "Eddie Van Halen", correct: true },
            { text: "Steve Vai", correct: false },
            { text: "Joe Satriani", correct: false },
            { text: "Randy Rhoads", correct: false }
        ]
    },
    {
        question: "Which 1987 album by U2 features the hit song 'With or Without You'?",
        imageSrc: '',
        answers: [
            { text: "War", correct: false },
            { text: "October", correct: false },
            { text: "The Joshua Tree", correct: true },
            { text: "Rattle and Hum", correct: false }
        ]
    },
    {
        question: "What was the name of the first Guns N' Roses album, released in 1987?",
        imageSrc: '',
        answers: [
            { text: "Appetite for Destruction", correct: true },
            { text: "Use Your Illusion I", correct: false },
            { text: "Use Your Illusion II", correct: false },
            { text: "G N' R Lies", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist of Def Leppard during the recording of 'Hysteria'?",
        imageSrc: '',
        answers: [
            { text: "Steve Clark", correct: true },
            { text: "Phil Collen", correct: false },
            { text: "Pete Willis", correct: false },
            { text: "Vivian Campbell", correct: false }
        ]
    },
    {
        question: "Which band is known for the 1983 hit 'Every Breath You Take'?",
        imageSrc: '',
        answers: [
            { text: "The Police", correct: true },
            { text: "Dire Straits", correct: false },
            { text: "The Clash", correct: false },
            { text: "Duran Duran", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist for Metallica during the recording of 'Master of Puppets'?",
        imageSrc: '',
        answers: [
            { text: "James Hetfield", correct: false },
            { text: "Kirk Hammett", correct: true },
            { text: "Dave Mustaine", correct: false },
            { text: "Cliff Burton", correct: false }
        ]
    },
    {
        question: "Which 1980 AC/DC album was the first to feature Brian Johnson as the lead vocalist?",
        imageSrc: '',
        answers: [
            { text: "Who Made Who", correct: false },
            { text: "Back in Black", correct: true },
            { text: "Highway to Hell", correct: false },
            { text: "The Razor's Edge", correct: false }
        ]
    },
    {
        question: "Who was the guitarist for The Smiths, known for his jangly guitar style?",
        imageSrc: '',
        answers: [
            { text: "Morrissey", correct: false },
            { text: "Johnny Marr", correct: true },
            { text: "Andy Rourke", correct: false },
            { text: "Mike Joyce", correct: false }
        ]
    },
    {
        question: "What 1989 album by Tom Petty is often considered his most successful solo effort?",
        imageSrc: '',
        answers: [
            { text: "Damn the Torpedoes", correct: false },
            { text: "Full Moon Fever", correct: true },
            { text: "Southern Accents", correct: false },
            { text: "Into the Great Wide Open", correct: false }
        ]
    },
    {
        question: "Which band released the album 'Brothers in Arms' in 1985, known for its hit 'Money for Nothing'?",
        imageSrc: '',
        answers: [
            { text: "Dire Straits", correct: true },
            { text: "The Police", correct: false },
            { text: "Toto", correct: false },
            { text: "Fleetwood Mac", correct: false }
        ]
    },
    {
        question: "Who was the guitarist known for his work with Ozzy Osbourne in the early 1980s?",
        imageSrc: '',
        answers: [
            { text: "Yngwie Malmsteen", correct: false },
            { text: "Zakk Wylde", correct: false },
            { text: "Randy Rhoads", correct: true },
            { text: "Jake E. Lee", correct: false }
        ]
    },
    {
        question: "What 1991 Nirvana album is often credited with bringing grunge music to the mainstream?",
        imageSrc: '',
        answers: [
            { text: "Bleach", correct: false },
            { text: "Nevermind", correct: true },
            { text: "In Utero", correct: false },
            { text: "Incesticide", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist for Pearl Jam during their debut album 'Ten'?",
        imageSrc: '',
        answers: [
            { text: "Stone Gossard", correct: false },
            { text: "Mike McCready", correct: true },
            { text: "Eddie Vedder", correct: false },
            { text: "Jeff Ament", correct: false }
        ]
    },
    {
        question: "Which Radiohead song from 1997 became one of the band's signature songs with its haunting guitar work?",
        imageSrc: '',
        answers: [
            { text: "Karma Police", correct: false },
            { text: "Creep", correct: false },
            { text: "Paranoid Android", correct: true },
            { text: "No Surprises", correct: false }
        ]
    },
    {
        question: "What band released the album 'Blood Sugar Sex Magik' in 1991, featuring the guitar work of John Frusciante?",
        imageSrc: '',
        answers: [
            { text: "Red Hot Chili Peppers", correct: true },
            { text: "Faith No More", correct: false },
            { text: "Rage Against the Machine", correct: false },
            { text: "Jane's Addiction", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist for Smashing Pumpkins during the recording of 'Siamese Dream'?",
        imageSrc: '',
        answers: [
            { text: "James Iha", correct: false },
            { text: "Billy Corgan", correct: true },
            { text: "Jimmy Chamberlin", correct: false },
            { text: "D'arcy Wretzky", correct: false }
        ]
    },
    {
        question: "Which Oasis song from the album '(What's the Story) Morning Glory?' features a prominent acoustic guitar intro?",
        imageSrc: '',
        answers: [
            { text: "Wonderwall", correct: true },
            { text: "Don't Look Back in Anger", correct: false },
            { text: "Champagne Supernova", correct: false },
            { text: "Live Forever", correct: false }
        ]
    },
    {
        question: "What was the debut album of Rage Against the Machine, known for its aggressive guitar riffs, released in 1992?",
        imageSrc: '',
        answers: [
            { text: "Evil Empire", correct: false },
            { text: "The Battle of Los Angeles", correct: false },
            { text: "Renegades", correct: false },
            { text: "Rage Against the Machine", correct: true }
        ]
    },
    {
        question: "Which 1994 Green Day album helped bring punk rock back to mainstream popularity?",
        imageSrc: '',
        answers: [
            { text: "Dookie", correct: true },
            { text: "Insomniac", correct: false },
            { text: "Nimrod", correct: false },
            { text: "Warning", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist of Alice in Chains, known for his dark and heavy guitar sound?",
        imageSrc: '',
        answers: [
            { text: "Jerry Cantrell", correct: true },
            { text: "Kim Thayil", correct: false },
            { text: "Mike McCready", correct: false },
            { text: "Chris Cornell", correct: false }
        ]
    },
    {
        question: "What Foo Fighters song, released in 1997, features a powerful guitar riff and became one of their biggest hits?",
        imageSrc: '',
        answers: [
            { text: "Monkey Wrench", correct: false },
            { text: "Everlong", correct: true },
            { text: "My Hero", correct: false },
            { text: "Learn to Fly", correct: false }
        ]
    },
    {
        question: "Which White Stripes song from 2003 became an anthem, featuring a simple but unforgettable guitar riff?",
        imageSrc: '',
        answers: [
            { text: "Fell in Love with a Girl", correct: false },
            { text: "Seven Nation Army", correct: true },
            { text: "Icky Thump", correct: false },
            { text: "Ball and Biscuit", correct: false }
        ]
    },
    {
        question: "Who was the lead guitarist for the band The Strokes during their early 2000s rise to fame?",
        imageSrc: '',
        answers: [
            { text: "Nick Valensi", correct: false },
            { text: "Albert Hammond Jr.", correct: true },
            { text: "Julian Casablancas", correct: false },
            { text: "Nikolai Fraiture", correct: false }
        ]
    },
    {
        question: "What 2000 Radiohead album featured a shift towards electronic music, moving away from guitar-driven rock?",
        imageSrc: '',
        answers: [
            { text: "OK Computer", correct: false },
            { text: "Kid A", correct: true },
            { text: "Amnesiac", correct: false },
            { text: "Hail to the Thief", correct: false }
        ]
    },
    {
        question: "Which band released the album 'American Idiot' in 2004, featuring politically charged lyrics and guitar-heavy songs?",
        imageSrc: '',
        answers: [
            { text: "The Offspring", correct: false },
            { text: "Green Day", correct: true },
            { text: "Blink-182", correct: false },
            { text: "Sum 41", correct: false }
        ]
    },
    {
        question: "Who was the guitarist for Audioslave, known for his innovative guitar techniques and work with Rage Against the Machine?",
        imageSrc: '',
        answers: [
            { text: "Tom Morello", correct: true },
            { text: "Jerry Cantrell", correct: false },
            { text: "Adam Jones", correct: false },
            { text: "Zakk Wylde", correct: false }
        ]
    },
    {   /**
        Start of image questions
        */
        question: "Which famous rock legend is known for playing the guitar below?",
        imageSrc: 'assets/images/questions/cloud-guitar.webp',
        answers: [
            { text: 'Prince', correct: true },
            { text: 'Axel Rose', correct: false },
            { text: 'Noodles', correct: false },
            { text: 'Jimmy Page', correct: false }
        ]
    },
    {
        question: "Which famous guitarist is known for playing the guitar below?",
        imageSrc: 'assets/images/questions/bm-guitar.webp',
        answers: [
            { text: 'Randy Rhoads', correct: false },
            { text: 'Angus Young', correct: false },
            { text: 'Brian May', correct: true },
            { text: 'Dio', correct: false }
        ]
    },
    {
        question: "Which guitar manufacturer made the original \"SG\" shaped guitar?",
        imageSrc: 'assets/images/questions/sg-guitar.webp',
        answers: [
            { text: 'Fender', correct: false },
            { text: 'Gibson', correct: true },
            { text: 'Gretsch', correct: false },
            { text: 'PRS', correct: false }
        ]
    },
     {
    question: "Which famous glam rock bassist is known for playing the guitar below?",
        imageSrc: 'assets/images/questions/axe-guitar.webp',
        answers: [
            { text: 'Blackie Lawless', correct: false },
            { text: 'Gene Simmons', correct: true },
            { text: 'Rik Fox', correct: false },
            { text: 'Jim Lea', correct: false }
        ]
    },
    {
        question: "Which famous guitarist is known for playing the guitar below?",
        imageSrc: 'assets/images/questions/5150-guitar.webp',
        answers: [
            { text: 'Randy Rhoads', correct: false },
            { text: 'Eddie Van Halen', correct: true },
            { text: 'Dio', correct: false },
            { text: 'James Hetfield', correct: false }
        ]
    },
    {
        question: "What is the name of the guitar played by Kurt Cobain whos name was a combination of 2 different Fender guitars?",
        imageSrc: 'assets/images/questions/js-guitar.webp',
        answers: [
            { text: 'Mustuar', correct: false },
            { text: 'Jag-stang', correct: true },
            { text: 'Jazzmaster', correct: false },
            { text: 'Jazz-stang', correct: false }
        ]
    },
    {
        question: "What is the name of the below guitar, famously played by James Hetfield?",
        imageSrc: 'assets/images/questions/snakebyte-guitar.webp',
        answers: [
            { text: 'Venomtooth', correct: false },
            { text: 'Snakebyte', correct: true },
            { text: 'Surpentfang', correct: false },
            { text: 'Cobra Kai', correct: false }
        ]
    },
    {
        question: "The below guitar from Dean Guitars' \"Dave Mustaine\" series, features album art from which Megadeth album?",
        imageSrc: 'assets/images/questions/dean-guitar.webp',
        answers: [
            { text: 'Risk', correct: false },
            { text: 'Rust in Peice', correct: true },
            { text: 'The System has Failed', correct: false },
            { text: 'Cryptic Writings', correct: false }
        ]
    },
    {
        question: "The below guitar, made by Music Man, is named after which country artist?",
        imageSrc: 'assets/images/questions/music-man-guitar.webp',
        answers: [
            { text: 'Johnny Cash', correct: false },
            { text: 'Albert Lee', correct: true },
            { text: 'Ernie Ball', correct: false },
            { text: 'Glen Campbell', correct: false }
        ]
    }
]