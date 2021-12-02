let raceNumber = Math.floor(Math.random() * 1000);
const regEarly = false;
const runnerAge = 18;

if (runnerAge > 18 && regEarly == true) {
  console.log(raceNumber += runnerAge);
}

if (runnerAge > 18 && regEarly == true) {
  console.log("Early adults run at 9:30 am.");
} else if (runnerAge > 18 && regEarly == false) {
  console.log(`Late adults run at 11:00 am. ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm ${raceNumber}`);
} else {
  console.log("See the registration desk");
}