// ask user to input which temp unit to convert (c,f,k)
// ask user to inout no.
// ask user which unit to convert to

let fromMetric = prompt(
  "Which metric would you like to convert from? (C, K or F)"
);
let toMetric = prompt(
  "Which metric would you like to convert the temperature to? (C, K or F)"
);
let metricVal = Number(prompt("Please enter the temperature"));

// check pre conditions
if (
  fromMetric != "C" ||
  fromMetric != "F" ||
  fromMetric != "K" ||
  toMetric != "C" ||
  toMetric != "F" ||
  toMetric != "K"
) {
  console.log("Invalid metric, please enter C, F or K (case sensitive)");
}

// run code

if (fromMetric == "F") {
  if (toMetric == "C") {
    let celFah = (metricVal - 32) * (5 / 9);
    console.log(
      `${metricVal}°${fromMetric} is ${celFah.toFixed(2)}°${toMetric}`
    );
  } else if (toMetric == "K") {
    let kelFah = (metricVal + 459.67) * (5 / 9);
    console.log(
      `${metricVal}°${fromMetric} is ${kelFah.toFixed(2)}${toMetric}`
    );
  } else {
    console.log(
      `${metricVal}°${fromMetric} is ${metricVal.toFixed(2)}°${toMetric}`
    );
  }
} else if (fromMetric == "C") {
  if (toMetric == "F") {
    let fahCel = metricVal * (9 / 5) + 32;
    console.log(
      `${metricVal}°${fromMetric} is ${fahCel.toFixed(2)}°${toMetric}`
    );
  } else if (toMetric == "K") {
    let kelCel = metricVal + 273.15;
    console.log(
      `${metricVal}°${fromMetric} is ${kelCel.toFixed(2)}${toMetric}`
    );
  } else {
    console.log(
      `${metricVal}°${fromMetric} is ${metricVal.toFixed(2)}°${toMetric}`
    );
  }
} else if (fromMetric == "K") {
  if (toMetric == "F") {
    let fahKel = metricVal * (9 / 5) + 459.67;
    console.log(
      `${metricVal}${fromMetric} is ${fahKel.toFixed(2)}°${toMetric}`
    );
  } else if (toMetric == "C") {
    let celKel = metricVal - 273.15;
    console.log(
      `${metricVal}${fromMetric} is ${celKel.toFixed(2)}°${toMetric}`
    );
  } else {
    console.log(
      `${metricVal}${fromMetric} is ${metricVal.toFixed(2)}${toMetric}`
    );
  }
}
