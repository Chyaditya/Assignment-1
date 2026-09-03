//problem 1

function describeValue(value) {
    if (Boolean(value)) {
        return `${typeof value} | Truthy`;
    } else {
        return `${typeof value} | Falsy`;
    }
}

console.log(describeValue("Hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));

//problem 2

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));

//problem 3

function validateUsername(username){

    if(username.length < 4){
        return "Too Short";
    }
    else if (username.includes(" ")){
        return "No Space Allowed";
    }
    else if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    else{
        return "Available";
    }


}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));

//problem 4

function getCngFare(distance,isNight = false, waitingMinutes = 0) {
let fare;

  if (distance == 2) {
    fare = 50;

}
    else {
    fare= 50 + (distance -2)* 15;
}
fare = fare + waitingMinutes *2;

  if (isNight) {
    fare = fare + fare *0.20;
}
    else {
    fare = fare;
}
    return fare;
    
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));

//problem 5

let getChaseVerdict = (target, Scored, ballsleft) => {
  let runsNeeded = target - Scored;
  if (runsNeeded <= 0) {
    return "won";
  }
  if (ballsleft <= 0) {
    return "lost";
  }
  let requiredRunRate = (runsNeeded / ballsleft) * 6;
  if (requiredRunRate <= 6) {
    verdict = "comfortable";
  } else if (requiredRunRate <= 12) {
    verdict = "tough";
  } else {
    verdict = "Almost impossible";
  }
  return `Need ${runsNeeded} runs in ${ballsleft} | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));