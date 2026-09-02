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