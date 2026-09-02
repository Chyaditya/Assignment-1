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
