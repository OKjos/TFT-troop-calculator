function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function charstars() {
  document.querySelectorAll('[id="1cost"]').forEach(element => {
    element.textContent = "22";
});

document.querySelectorAll('[id="2cost"]').forEach(element => {
  element.textContent = "20";
});

document.querySelectorAll('[id="3cost"]').forEach(element => {
  element.textContent = "17";
});

document.querySelectorAll('[id="4cost"]').forEach(element => {
  element.textContent = "10";
});

document.querySelectorAll('[id="5cost"]').forEach(element => {
  element.textContent = "9";
});

}



document.addEventListener('DOMContentLoaded', function() {
  let usedunits = document.querySelector("#usedunits");
  let taken = parseFloat(usedunits.value);

  let oneCostCharacters = 22;
  let twoCostCharacters = 20;
  let threeCostCharacters = 17;
  let fourCostCharacters = 10;
  let fiveCostCharacters = 9;
  let slots = 5;

  if (isNaN(taken)) {
    taken = 0;
  }

  let availableCharacters = oneCostCharacters - taken;

  let links = document.querySelectorAll(".cost-1");

  // Convert the NodeList to an array and iterate over the <a> elements
  Array.from(links).forEach(function(link) {
    link.href = `${link.getAttribute("href")}?cost=${oneCostCharacters}`;
  });
  console.log(availableCharacters);
});


let costData = {
  "level1": {
    "cost": 100,
    "slots": 5
  },
  "level2": {
    "cost": 100,
    "slots": 5
  },
  "level3": {
    "cost": [75, 25],
    "slots": 5
  },
  "level4": {
    "cost": [55, 30, 15],
    "slots": 5
  },
  "level5": {
    "cost": [45, 33, 20, 2],
    "slots": 5
  },
  "level6": {
    "cost": [30, 40, 25, 5],
    "slots": 5
  },
  "level7": {
    "cost": [19, 30, 35, 10, 1],
    "slots": 5
  },
  "level8": {
    "cost": [18, 25, 36, 18, 3],
    "slots": 5
  },
  "level9": {
    "cost": [10, 20, 25, 35, 10],
    "slots": 5
  },
  "level10": {
    "cost": [5, 10, 20, 40, 25]
  }
};