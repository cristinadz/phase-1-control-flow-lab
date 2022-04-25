function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400) {
    result = "This one is on me!";
  } else if (feet >= 400 && feet <= 2000) {
    result = "That will be twenty bucks.";
  } else if (feet >= 2000 && feet <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city) {
  let results = city === "NYC" ? "Ok, sounds good." : "No go.";
  return results;
}

function switchOnCharmFromTip(tip) {
  let tipCharm;
  switch (tip) {
    case "generous":
      tipCharm = "Thank you so much.";
      break;
    case "not as generous":
      tipCharm = "Thank you.";
      break;
    default:
      tipCharm = "Bye.";
      break;
  }
  return tipCharm;
}
