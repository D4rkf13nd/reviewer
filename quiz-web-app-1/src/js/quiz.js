class Quiz {
    constructor() {
        this.isActive = false;
        this.answers = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    start() {
        this.isActive = true;
        this.answers = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    getCurrentQuestion() {
        return quizData[this.currentQuestionIndex];
    }

    submitAnswer(answer) {
        if (this.isActive) {
            this.answers.push(answer);
            if (answer === this.getCurrentQuestion().correct) {
                this.score++;
            }
            this.currentQuestionIndex++;
        }
    }

    calculateScore() {
        return this.score;
    }

    end() {
        this.isActive = false;
    }

    getProgress() {
        return {
            current: this.currentQuestionIndex + 1,
            total: quizData.length
        };
    }
}

const quizData = [
    // Antonio Pigafetta & First Mass (20 questions)
    {
        question: "Who was Antonio Pigafetta?",
        answers: ["Spanish conquistador", "Italian scholar and explorer", "Portuguese sailor", "Filipino native"],
        correct: 1
    },
    {
        question: "When was the First Mass in the Philippines held?",
        answers: ["March 31, 1521", "April 1, 1521", "March 16, 1521", "April 7, 1521"],
        correct: 0
    },
    {
        question: "Which location is officially recognized as the site of the First Mass?",
        answers: [
            "Masao, Butuan",
            "Cebu City",
            "Limasawa, Leyte",
            "Manila"
        ],
        correct: 2
    },
    {
        question: "What was Pigafetta's role in Magellan's expedition?",
        answers: [
            "Ship's captain",
            "Navigator",
            "Cook",
            "Chronicler"
        ],
        correct: 3
    },
    {
        question: "What is the primary evidence used in determining the First Mass site?",
        answers: [
            "Local folklore",
            "Pigafetta's Chronicles",
            "Spanish royal documents",
            "Church records"
        ],
        correct: 1
    },
    {
        question: "Who wrote a logbook during Magellan's voyage as the pilot and navigator of Victoria?",
        answers: [
            "Antonio Pigafetta",
            "Francisco Albo",
            "Ferdinand Magellan",
            "Juan Sebastian Elcano"
        ],
        correct: 1
    },
    {
        question: "What was the name used by Pigafetta to refer to the First Mass site?",
        answers: [
            "Butuan",
            "Limasawa",
            "Mazaua",
            "Seilani"
        ],
        correct: 2
    },
    {
        question: "Who were the three martyr priests executed after the Cavite Mutiny?",
        answers: [
            "GomBurZa",
            "Luna, Rizal, and Del Pilar",
            "Bonifacio, Jacinto, and Plata",
            "Aguinaldo, Mabini, and Luna"
        ],
        correct: 0
    },
    {
        question: "What year did the Cry of Balintawak/Pugadlawin take place?",
        answers: [
            "1892",
            "1894",
            "1896",
            "1898"
        ],
        correct: 2
    },
    {
        question: "What was the alternative title of Juan Luna's 'The Parisian Life'?",
        answers: [
            "Life in Paris",
            "Inside a Café",
            "Spoliarium",
            "French Scene"
        ],
        correct: 1
    },
    {
        question: "When did Corazon Aquino address the U.S. Congress?",
        answers: [
            "August 1986",
            "September 18, 1986",
            "October 1986",
            "November 1986"
        ],
        correct: 1
    },
    {
        question: "What forced labor policy was imposed by the Spaniards on Filipinos?",
        answers: [
            "Encomienda",
            "Polo y Servicios",
            "Tribute System",
            "Bandala System"
        ],
        correct: 1
    },
    {
        question: "Who identified the event as the 'Cry of Pugadlawin'?",
        answers: [
            "Andres Bonifacio",
            "Pio Valenzuela",
            "Santiago Alvarez",
            "Guillermo Masangkay"
        ],
        correct: 1
    },
    {
        question: "What was the size of 'The Parisian Life' painting?",
        answers: [
            "20\" x 30\"",
            "22\" x 31\"",
            "24\" x 36\"",
            "18\" x 24\""
        ],
        correct: 1
    },
    {
        question: "What was the main theme of Aquino's speech to the U.S. Congress?",
        answers: [
            "Economic aid request",
            "Military alliance",
            "Restoration of democracy",
            "Trade agreements"
        ],
        correct: 2
    },
    {
        question: "What was the name of the large island referred to as 'Seilani' by Francisco Albo?",
        answers: [
            "Mindanao",
            "Cebu",
            "Leyte",
            "Samar"
        ],
        correct: 2
    },
    {
        question: "What was the year range of Magellan's expedition as recorded in Albo's diary?",
        answers: [
            "1518-1521",
            "1519-1522",
            "1520-1523",
            "1521-1524"
        ],
        correct: 1
    },
    {
        question: "Which Spanish governor claimed the Cavite Mutiny was a revolutionary conspiracy?",
        answers: [
            "Rafael Izquierdo",
            "Carlos María de la Torre",
            "José Malcampo",
            "Domingo Moriones"
        ],
        correct: 0
    },
    {
        question: "Which Filipino scholar argued that the mutiny was only a local protest?",
        answers: [
            "José Rizal",
            "Marcelo H. del Pilar",
            "Trinidad Pardo de Tavera",
            "Graciano López Jaena"
        ],
        correct: 2
    },
    {
        question: "What newspaper was published by Father Gomez before his execution?",
        answers: [
            "La Solidaridad",
            "La Verdad",
            "El Renacimiento",
            "Diariong Tagalog"
        ],
        correct: 1
    },
    {
        question: "Who was known as the 'Mother of the Katipunan'?",
        answers: [
            "Melchora Aquino",
            "Gregoria de Jesus",
            "Marcela Agoncillo",
            "Trinidad Tecson"
        ],
        correct: 1
    },
    {
        question: "What was the award The Parisian Life received at the 1904 St. Louis Exposition?",
        answers: [
            "Gold Medal",
            "Silver Medal",
            "Bronze Medal",
            "Special Citation"
        ],
        correct: 1
    },
    {
        question: "What was the total U.S. financial aid granted after Aquino's speech?",
        answers: [
            "$100 million",
            "$150 million",
            "$200 million",
            "$250 million"
        ],
        correct: 2
    },
    {
        question: "What was GOMBURZA's religious advocacy within the Catholic Church?",
        answers: [
            "Church independence from Spain",
            "Equality between Filipino and Spanish clergy",
            "Separation of church and state",
            "Religious freedom for all Filipinos"
        ],
        correct: 1
    },
    {
        question: "What did Corazon Aquino say in her memorable line to the U.S. Congress?",
        answers: [
            "I come as a friend seeking help",
            "I have not come here to beg for help. I have come to ask for justice",
            "Democracy has returned to the Philippines",
            "The Philippines needs American support"
        ],
        correct: 1
    },
    {
        question: "What did the Spaniards discover on Mazava (Limasawa) island?",
        answers: [
            "Diamonds and pearls",
            "Gold deposits",
            "Spice trading post",
            "Ancient artifacts"
        ],
        correct: 1
    },
    {
        question: "In which journal was Albo's account published in 1964?",
        answers: [
            "The Journal of Navigation",
            "Historical Review",
            "Maritime Studies",
            "Philippine Studies"
        ],
        correct: 0
    },
    {
        question: "What privileges did GOMBURZA fight for Filipino priests?",
        answers: [
            "Right to own churches",
            "Equal parish assignments",
            "Higher salaries",
            "Administrative positions"
        ],
        correct: 1
    },
    {
        question: "What tragic event influenced Luna's later artworks?",
        answers: [
            "Loss of his fortune",
            "Political exile",
            "Killing of his wife and mother-in-law",
            "Death of his brother"
        ],
        correct: 2
    },
    {
        question: "What was the symbolic interpretation of the woman in 'The Parisian Life'?",
        answers: [
            "French culture",
            "Colonial oppression",
            "The Philippine archipelago under Spanish rule",
            "European modernization"
        ],
        correct: 2
    },
    {
        question: "Which painting won Luna a gold medal at the Madrid Exposition?",
        answers: [
            "The Parisian Life",
            "Spoliarium",
            "Blood Compact",
            "La Batalla de Lepanto"
        ],
        correct: 1
    },
    {
        question: "What international impact did Aquino's speech have?",
        answers: [
            "Military alliance formation",
            "Trade agreements",
            "Restored global credibility",
            "United Nations recognition"
        ],
        correct: 2
    },
    {
        question: "What was the main issue Aquino raised about the Marcos dictatorship?",
        answers: [
            "Economic mismanagement",
            "Suppression of human rights and press freedom",
            "Military corruption",
            "Foreign policy failures"
        ],
        correct: 1
    },
    {
        question: "What type of governance did Aquino promise to uphold?",
        answers: [
            "Military rule",
            "Democratic and transparent governance",
            "Socialist reforms",
            "Constitutional monarchy"
        ],
        correct: 1
    },
    {
        question: "When was 'The Parisian Life' painted?",
        answers: [
            "1890",
            "1891",
            "1892",
            "1893"
        ],
        correct: 2
    },
    {
        question: "What movement was later influenced by GOMBURZA's martyrdom?",
        answers: [
            "Katipunan",
            "Propaganda Movement",
            "La Liga Filipina",
            "Kilusang Mayo Uno"
        ],
        correct: 1
    },
    {
        question: "Where is the Balintawak Monument located?",
        answers: [
            "Manila",
            "Caloocan",
            "Northern Quezon City",
            "Pasig"
        ],
        correct: 2
    },
    {
        question: "What event awakened nationalism after GOMBURZA's death?",
        answers: [
            "La Solidaridad publication",
            "Noli Me Tangere publication",
            "Execution of GOMBURZA",
            "Spanish reforms"
        ],
        correct: 2
    },
    {
        question: "What did historians question about Pio Valenzuela's testimony?",
        answers: [
            "Its timeline",
            "Its reliability as lone testimony",
            "Its political motives",
            "Its historical accuracy"
        ],
        correct: 1
    },
    {
        question: "What did Luna join with Rizal in the 1890s?",
        answers: [
            "La Liga Filipina",
            "Propaganda Movement",
            "Katipunan",
            "Reform Movement"
        ],
        correct: 1
    },
    // Additional Questions (14 questions)
    {
        question: "What was the distance measurement between Homonhon and Limasawa according to Pigafetta?",
        answers: [
            "15 leagues",
            "20 leagues",
            "25 leagues",
            "30 leagues"
        ],
        correct: 1
    },
    {
        question: "What was the name of Magellan's flagship?",
        answers: [
            "Victoria",
            "Trinidad",
            "Santiago",
            "Concepcion"
        ],
        correct: 1
    },
    {
        question: "Which UP department verified James Robertson's English translation of Pigafetta's text?",
        answers: [
            "Department of History",
            "Department of European Languages",
            "Department of Filipino",
            "Department of Linguistics"
        ],
        correct: 1
    },
    {
        question: "Why was Masao, Butuan rejected as the First Mass site?",
        answers: [
            "Wrong coordinates",
            "It was not an island",
            "No historical evidence",
            "Too far from the route"
        ],
        correct: 1
    },
    {
        question: "What feature of Limasawa made it suitable for Magellan's ships?",
        answers: [
            "Deep harbor",
            "Protected anchorage",
            "Sandy beaches",
            "Fresh water source"
        ],
        correct: 1
    },
    {
        question: "Which commission's findings were published in 'FEATURES, April 15, 1999'?",
        answers: [
            "Historical Commission",
            "First Mass Commission",
            "Limasawa Commission",
            "National Heritage Commission"
        ],
        correct: 2
    },
    {
        question: "What did Father Burgos advocate for before his execution?",
        answers: [
            "Philippine independence",
            "Secular clergy rights",
            "Educational reforms",
            "Church separation"
        ],
        correct: 1
    },
    {
        question: "What role did Father Zamora play in the Filipino clergy movement?",
        answers: [
            "Political leader",
            "Religious educator",
            "Parish priest advocate",
            "Reform movement organizer"
        ],
        correct: 2
    },
    {
        question: "What was Father Mariano Gomez's role before the Cavite Mutiny?",
        answers: [
            "Military chaplain",
            "Parish priest of Bacoor",
            "Seminary professor",
            "Church administrator"
        ],
        correct: 1
    },
    {
        question: "How long had Magellan's fleet been at sea before reaching Mazaua?",
        answers: [
            "3 months",
            "6 months",
            "1 year",
            "1 year and 6 months"
        ],
        correct: 3
    },
    {
        question: "What navigation instrument did Albo use to determine latitude?",
        answers: [
            "Astrolabe",
            "Compass",
            "Quadrant",
            "Sextant"
        ],
        correct: 0
    },
    {
        question: "Who was the ruler of Limasawa that Magellan met?",
        answers: [
            "Raja Humabon",
            "Raja Kolambu",
            "Raja Siagu",
            "Datu Lapu-Lapu"
        ],
        correct: 1
    },
    {
        question: "What did Aquino specifically request from the U.S. Congress?",
        answers: [
            "Military protection",
            "Economic assistance",
            "Justice for human rights violations",
            "Diplomatic recognition"
        ],
        correct: 2
    },
    {
        question: "What time of day was the First Mass celebrated according to Pigafetta?",
        answers: [
            "Dawn",
            "Mid-morning",
            "Noon",
            "Afternoon"
        ],
        correct: 1
    }
];

// Update the total questions count in the HTML:
document.getElementById('total').textContent = '50';

export { Quiz, quizData };