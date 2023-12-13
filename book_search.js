/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var final_result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    
    // Loop through every scanned text object.
    for (let i = 0; i < scannedTextObj.length; i++) {
        // Loop through every content element in each scanned text object.
        // for (let text_element in (scannedTextObj[i].Content)) {

        for (let content_i = 0; content_i < scannedTextObj[i].Content.length; content_i++) {
            let text_element = scannedTextObj[i].Content[content_i];
            let split_text_element = text_element.Text.split(' ');
            for (let text_element_i = 0; text_element_i < split_text_element.length; text_element_i++) {
                let stripped_word = split_text_element[text_element_i].replace(/[^a-zA-Z0-9]/g, '');
                if (stripped_word === searchTerm) {
                    const result = {
                        "ISBN": scannedTextObj[i].ISBN,
                        "Page": text_element.Page,
                        "Line": text_element.Line
                    };
                    final_result.Results.push(result);
                    break;
                }
            }
        }
    }
    
    return final_result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const twentyLeaguesInTwoObjects = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ]
    },
    {
        "Title": "Forty Thousand Leagues Under the Sea",
        "ISBN": "9780000528538",
        "Content": [
            {
                "Page": 441,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark- world"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound;\'s"
            },
            {
                "Page": 11,
                "Line": 10,
                "Text": "eyes were, the where is it all?"
            } 
        ]
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut0CaseSensitive = {
    "SearchTerm": "Then",
    "Results": [
    ]
}

const twentyLeaguesOutTwoObjects = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528538",
            "Page": 11,
            "Line": 10
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Negative test example and case sensitive test
const test3result = findSearchTermInBooks("Then", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut0CaseSensitive) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut0CaseSensitive);
    console.log("Received:", test3result);
}
const test4result = findSearchTermInBooks("Then", twentyLeaguesIn);
if (test4result.Results.length === 0) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", 0);
    console.log("Received:", test4result.Results.length);
}

// Positive test
const test5result = findSearchTermInBooks("the", twentyLeaguesInTwoObjects);
if (JSON.stringify(twentyLeaguesOutTwoObjects) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOutTwoObjects);
    console.log("Received:", test5result);
}
const test6result = findSearchTermInBooks("the", twentyLeaguesInTwoObjects);
if (test6result.Results.length === 2) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", 2);
    console.log("Received:", test6result.Results.length);
}