// Commented this out as it makes an API call everytime one of us changes anything - Might be worth copy/pasting it somewhere local if needed and deleting it from repo?

// let stuff;
// fetch("https://countryapi.io/api/name/austria?apikey=JDi0TGPbrqRCyHdRBVDEJVoP73cKyeehMnzV8PET")
//     .then((response) => response.json())
//     .then((data) => {
//         stuff = data;
//         console.log(data)
//     });


// Variable to store the country alpha2 code, from Country API. Hardcoded for testing, until CountryAPI code is implemented
let countryAlphaCode = "es";

// Variables to store English phrases
const phraseOne = "Hello";
const phraseTwo = "Goodbye";
const phraseThree = "Thank you";

// Does a fetch request to translate API with fixed, and generated, variables as parameters and renders content to 'Phrases' area of page
function getTranslations (phrase) {
    // Variables to store the translated phrases
    let translatedPhraseOne;
    let translatedPhraseTwo;
    let translatedPhraseThree;
    
    // Call to translate API using phraseOne
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", countryAlphaCode);
    encodedParams.append("text", phrase);
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '056b2790e1mshd8bb490ad1003bcp114ba5jsn60210fff2967',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    fetch('https://text-translator2.p.rapidapi.com/translate', options)
        .then(response => response.json())
        .then((input) => {

            // Local variables to store HTML elements changed via the function
            let phraseOneElement = document.querySelector("#phrase-one");
            let phraseTwoElement = document.querySelector("#phrase-two");
            let phraseThreeElement = document.querySelector("#phrase-three");

            // Compares passed parameter to global values, saves the relavant data and changes the associated HTML element. If not match is found, the function returns;
            if (phrase === phraseOne) {
                translatedPhraseOne = input.data.translatedText;
                phraseOneElement.textContent = `${translatedPhraseOne}`;

            } else if (phrase === phraseTwo) {
                translatedPhraseTwo = input.data.translatedText;
                phraseTwoElement.textContent = `${translatedPhraseTwo}`;

            } else if (phrase === phraseThree) {
                translatedPhraseThree = input.data.translatedText;
                phraseThreeElement.textContent = `${translatedPhraseThree}`;

            } else {
                return;
            }
        })
        .catch(err => console.error(err));

}