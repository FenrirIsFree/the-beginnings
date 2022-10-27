let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let runnerAge = 13;

if (runnerAge >= 18 && earlyReg === true) {
    raceNumber += 1000;
}

// pushing statements based on age and early registration
if (runnerAge >= 18 && earlyReg === true) {
    console.log(`Racer ${raceNumber}, you will be racing at 9:30am.`);
} else if (runnerAge >= 18 && earlyReg === false) {
    console.log(`Racer ${raceNumber}, you did not register early and will race at 11:00am`);
} else {
    console.log(`Youth racer ${raceNumber}, you will be racing at 12:30pm.`);
}
