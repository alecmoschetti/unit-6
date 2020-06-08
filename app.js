// MAIN JAVASCRIPT PAGE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
   
    // GLOBAL VARIABLES ------------------------------------------------------

    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    let missed = 0;
    const startButton = document.getElementsByClassName('btn__reset');

    // GLOBAL ARRAYS & OBJECTS ---------------------------------------------

    let phrases = [
        "Hydrogen",
        "Helium",
        "Lithium",
        "Beryllium",
        "Boron",
        "Carbon",
        "Nitrogen",
        "Oxygen",
        "Fluorine",
        "Neon",
        "Sodium",
        "Magnesium",
        "Aluminum",
        "Silicon",
        "Phosphorus",
        "Sulfur",
        "Chlorine",
        "Argon",
        "Potassium",
        "Calcium",
        "Scandium",
        "Titanium",
        "Vanadium",
        "Chromium",
        "Manganese",
        "Iron",
        "Cobalt",
        "Nickel",
        "Copper",
        "Zinc",
        "Gallium",
        "Germanium",
        "Arsenic",
        "Selenium",
        "Bromine",
        "Krypton",
        "Rubidium",
        "Strontium",
        "Yttrium",
        "Zirconium",
        "Niobium",
        "Molybdenum",
        "Technetium",
        "Ruthenium",
        "Rhodium",
        "Palladium",
        "Silver",
        "Cadmium",
        "Indium",
        "Tin",
        "Antimony",
        "Tellurium",
        "Iodine",
        "Xenon",
        "Cesium",
        "Barium",
        "Lanthanum",
        "Cerium",
        "Praseodymium",
        "Neodymium",
        "Promethium",
        "Samarium",
        "Europium",
        "Gadolinium",
        "Terbium",
        "Dysprosium",
        "Holmium",
        "Erbium",
        "Thulium",
        "Ytterbium",
        "Lutetium",
        "Hafnium",
        "Tantalum",
        "Tungsten",
        "Rhenium",
        "Osmium",
        "Iridium",
        "Platinum",
        "Gold",
        "Mercury",
        "Thallium",
        "Lead",
        "Bismuth",
        "Polonium",
        "Astatine",
        "Radon",
        "Francium",
        "Radium",
        "Actinium",
        "Thorium",
        "Protactinium",
        "Uranium",
        "Neptunium",
        "Plutonium",
        "Americium",
        "Curium",
        "Berkelium",
        "Californium",
        "Einsteinium",
        "Fermium",
        "Mendelevium",
        "Nobelium",
        "Lawrencium",
        "Rutherfordium",
        "Dubnium",
        "Seaborgium",
        "Bohrium",
        "Hassium",
        "Meitnerium",
        "Darmstadtium",
        "Roentgenium",
        "Copernicium",
        "Nihonium",
        "Flerovium",
        "Moscovium",
        "Livermorium",
        "Tennessine",
        "Oganesson",
    ]


    // GLOBAL FUNCTIONS --------------------------------------------------------

    //function to create array with just letters
    function getRandomPhrasesAsArray(arr) {
        let randomPhrase = arr[(Math.floor(Math.random() * 118) +1)];
        let randomLetters = randomPhrase.toString();
        let finalLetters = Array.from(randomLetters);
        return finalLetters;
    }

    const phraseArray = getRandomPhrasesAsArray(phrases); //for the addPhraseToDisplay function parameter
    //function to put the letters on the screen
    function addPhraseToDisplay(arr) {
        let div = document.getElementById('phrase');
        let ul = div.firstElementChild;
        arr.forEach( (letter) => {
            let li = document.createElement('li');
            li.innerHTML = letter;
            li.className = 'letter';
            ul.appendChild(li);
        });
    }

    function checkLetter(button) {
        let classOfLetter = document.getElementsByClassName('letter');
    }


    // EVENT HANDLING -------------------------------------------------------------

    //hide start screen overlay event
    startButton[0].addEventListener('click', (event) => {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    });

    // CODE EXECUTION -------------------------------------------------------------

    addPhraseToDisplay(phraseArray);

















































