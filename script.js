// =========================================================
// PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS, RETURN VALUES
// =========================================================

// GLOBAL SCOPE variable: Can be accessed and modified anywhere.
let totalDebugSessions = 0; 

/**
 * Function 1: Demonstrates Parameters and Return Values
 * Calculates a progress score based on effort and complexity.
 * @param {number} hours - The raw hours spent (e.g., on debugging).
 * @param {number} complexity - A multiplier (1.0 = easy, 2.5 = hard).
 * @returns {number} The calculated Progress Score (satisfies Return Values req.)
 */
function calculateProgressScore(hours, complexity) {
    // Local variable (LOCAL SCOPE)
    let baseScore = hours * 10;
    
    // Using parameters in a computation
    let finalScore = baseScore / complexity;
    
    return Math.round(finalScore); 
}

/**
 * Function 2: Demonstrates Local vs Global Scope
 * Simulates a debugging session, updating a global counter.
 * @param {number} errorsFixed - The number of errors resolved in this specific call.
 * @returns {string} A summary of the session.
 */
function runDebuggingSession(errorsFixed) {
    // Local variable (LOCAL SCOPE) - dies when the function ends.
    let currentSessionTime = errorsFixed * 30;

    // Modifying Global Scope
    totalDebugSessions = totalDebugSessions + 1; // Updates the global variable

    return `Debug Session #${totalDebugSessions} complete! Fixed ${errorsFixed} errors.`;
}

/**
 * Function 3: Reusable Trigger for Part 3 (JS to CSS)
 * Toggles a CSS class on a given DOM element.
 * @param {string} elementId - The ID of the element to modify.
 * @param {string} className - The CSS class to add/remove.
 * @param {boolean} shouldAdd - True to add the class, False to remove it.
 * @returns {void}
 */
function toggleCssClass(elementId, className, shouldAdd) {
    const element = document.getElementById(elementId);
    
    if (element) {
        if (shouldAdd) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }
}


// =========================================================
// PART 3: COMBINING CSS AND JAVASCRIPT - INTERACTION TRIGGERS
// =========================================================

// --- 4. Merge Conflict Logic (JS Triggering Keyframes) ---
const mergeConflictButton = document.getElementById('resolve-conflict-btn');
const mergeConflictCardId = 'merge-conflicts';
const conflictClassName = 'conflict-active';

mergeConflictButton.addEventListener('click', function() {
    // 1. Trigger the shaking animation (Add the class)
    toggleCssClass(mergeConflictCardId, conflictClassName, true);
    
    // 2. Remove the class after the animation completes (0.7s total)
    setTimeout(() => {
        toggleCssClass(mergeConflictCardId, conflictClassName, false);
        mergeConflictButton.textContent = 'Conflict Resolved! 🎉';
        
    }, 700); 
    
    // Demonstrate scope awareness
    console.log(runDebuggingSession(1)); // Log a small, successful merge
});


// --- 5. Debugging Error Logic (JS Triggering Transition) ---
const triggerErrorButton = document.getElementById('trigger-error-btn');
const errorBox = document.getElementById('error-box');

function toggleErrorDisplay(shouldShow) {
    if (shouldShow) {
        errorBox.classList.remove('hidden'); // Fades in smoothly (CSS transition)
    } else {
        errorBox.classList.add('hidden'); // Fades out smoothly (CSS transition)
    }
}

triggerErrorButton.addEventListener('click', function() {
    toggleErrorDisplay(true);
    
    // Automatically hide the error after 4 seconds
    setTimeout(() => {
        toggleErrorDisplay(false);
    }, 4000);
    
    // Log the calculated progress score (Demonstrates Function 1 usage)
    const score = calculateProgressScore(2, 1.2); 
    console.log(`Encountering that bug increased your Progress Score to: ${score}!`);
});


// --- 6. Imposter Syndrome Relief (JS Direct Style Manipulation) ---
const reliefButton = document.querySelector('#imposter-syndrome .relief-button');
const imposterCard = document.getElementById('imposter-syndrome');

function validateProgress(color) {
    // JS directly manipulates styles, which triggers the CSS transition
    imposterCard.style.backgroundColor = color;
    imposterCard.style.transform = 'scale(1.02)';
    imposterCard.style.boxShadow = '0 0 15px rgba(46, 204, 113, 0.5)';

    reliefButton.textContent = 'Progress Validated! You got this. 👍';
    reliefButton.disabled = true;

    // Revert the styles after 5 seconds
    setTimeout(() => {
        imposterCard.style.backgroundColor = 'white';
        imposterCard.style.transform = 'scale(1)';
        imposterCard.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        reliefButton.textContent = 'Validate Progress';
        reliefButton.disabled = false;
    }, 5000);
}

reliefButton.addEventListener('click', function() {
    validateProgress('#e8f8f5'); // Light mint color for reassurance
});


// --- 7. Tutorial Hell Logic (JS Triggering Animation Pause/Play) ---
// THIS IS THE NEWLY INSERTED CODE BLOCK TO CONTROL THE NON-STOP ANIMATION
const breakButton = document.getElementById('break-tutorial-btn');
const tutorialSpinner = document.getElementById('tutorial-spinner');
const tutorialCard = document.getElementById('tutorial-hell');

if (breakButton && tutorialSpinner && tutorialCard) {
    breakButton.addEventListener('click', function() {
        // Check if the spinner is currently paused (has the CSS class)
        if (tutorialSpinner.classList.contains('paused-animation')) {
            // If paused, remove the class to RESUME the animation
            tutorialSpinner.classList.remove('paused-animation');
            breakButton.textContent = 'Stuck again! (Start Loop)';
            tutorialCard.style.backgroundColor = 'white'; // Revert background
            console.log("Tutorial Hell loop resumed.");
        } else {
            // If running, ADD the class to PAUSE the animation
            tutorialSpinner.classList.add('paused-animation');
            breakButton.textContent = 'Loop Broken! 🎉 (Resume Coding)';
            
            // Optional: Change card color to signal success (demonstrating JS style manipulation)
            tutorialCard.style.backgroundColor = '#d1f7d1'; 
            console.log("Broke free from Tutorial Hell!");
        }
    });
} else {
    // Safety check in case the HTML elements were not found
    console.error("Error: Tutorial Hell elements (button or spinner) not found. Check index.html IDs.");
}