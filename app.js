// MAIN JAVASCRIPT PAGE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
   
    // GLOBAL VARIABLES ------------------------------------------------------

    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    let missed = 0;
    const startButton = document.getElementsByClassName('btn__reset');
    const letterClass = document.getElementsByClassName('letter'); //finding all li in our random phrase and storing the collection in a variable
    const showClass = document.getElementsByClassName('show'); //finding all guessed correctly li in our random phrase and storing the collection in a variable
    const overlay = document.getElementById('overlay');
    const resetButton = document.createElement('button'); //making the reset button


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
    ];


    // GLOBAL FUNCTIONS --------------------------------------------------------

    //function to style the display screen
    function overlayStyle(displayType) {
        overlay.style.display = displayType;
    }

    //function to create array with just letters
    function getRandomPhrasesAsArray(arr) {
        let randomPhrase = arr[(Math.floor(Math.random() * 118) +1)];
        let randomLetters = randomPhrase.toString();
        let finalLetters = Array.from(randomLetters);
        return finalLetters;
    }

    // creating a play again button that starts the game over
    function makeResetButton() {
        phrase.style.display = "none"; //hiding the phrase shown letters on the overlay screen
        resetButton.innerHTML = "Play Again?";
        resetButton.className = "btn__reset"; //giving it the same styles as the other buttons
        overlay.appendChild(resetButton); //appending reset play again button to the dom
        const previousButton = resetButton.previousElementSibling; //selecting the start game button from overlay screen
        overlay.removeChild(previousButton); //removing it from the DOM
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
        const checkLetter = document.getElementsByClassName('letter');
        let match = null;
        for (let i = 0; i < checkLetter.length; i++) {
            button.className = "chosen";
                if (button.textContent == checkLetter[i].textContent.toLowerCase()) {
                    checkLetter[i].classList.add('show');
                    match = button.textContent;
                }
        }
        return match;
    }

    
    function checkWin() {
    const overlayHeading = overlay.querySelector('h2');
    if (letterClass.length === showClass.length) {
        overlay.className = 'win';
        overlayHeading.textContent = "Congrats, you're basically Dmitri Mendeleev";
        overlayStyle('flex');
        makeResetButton();
    } else if (missed > 4) {
        overlay.className = 'lose';
        overlayHeading.textContent = "Bummer, time to study your elements!";
        overlayStyle('flex');
        makeResetButton();
    }
}

    // EVENT HANDLING -------------------------------------------------------------

    //hide start screen overlay event
    startButton[0].addEventListener('click', () => {
        overlayStyle('none');
        addPhraseToDisplay(phraseArray);
    });

    //main game event listener
    qwerty.addEventListener('click', (event) => {
        let guess = event.target; //storing users click in a variable named guess
            if (guess.tagName == "BUTTON" && guess.className !== 'chosen') { //checking if user is clicking button properly
                guess.classList.add('chosen'); 
                let chosenLetter = document.querySelectorAll('.chosen'); //finding all buttons with the chosen class and storing the collection in a variable
                chosenLetter.forEach ( (clicked) => {
                    clicked.type = 'disabled'; //disabling said buttons
                });
                let letterFound = checkLetter(guess); //variable that stores result of checkletter function -- user's guessed button will be the parameter of said function
                    if (letterFound === null) { //comparison operator checking if guess was incorrect
                        missed += 1; //adding missed points if guess was incorrect
                        const lifePoint = document.querySelector('ol');
                        const lifeLost = lifePoint.lastElementChild;
                        lifePoint.removeChild(lifeLost); //removing the last heart from the ordered list
                    }
            }
            checkWin(); 
        });

        //click event for reset button
        resetButton.addEventListener('click', () => { //refreshing the page once play again is clicked to bring you back to the start page and get a new element word
            window.location.reload(); //refreshes the page
        });

        //generating a new word and screen
        if (performance.navigation.type == 1) { //checks if the page has been reloaded which I learned from https://stackoverflow.com/questions/5004978/check-if-page-gets-reloaded-or-refreshed-in-javascript
            overlayStyle('none'); //removes the overlay
            addPhraseToDisplay(phraseArray); //function to make new word and add it to the screen
          }









