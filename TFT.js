//slider number input
//drop down
//array for each cost
//units in play input box - them by the total set number

const sliderToPercentage = [
  {level: 1, cost1: 100},
  {level: 2, cost1: 100},
  {level: 3, cost1: 75, cost2: 25},
  {level: 4, cost1: 55, cost2: 30, cost3: 15},
  {level: 5, cost1: 45, cost2: 33, cost3: 20, cost4: 2},
  {level: 6, cost1: 30, cost2: 40, cost3: 25, cost4: 5},
  {level: 7, cost1: 19, cost2: 30, cost3: 35, cost4: 10, cost5: 1},
  {level: 8, cost1: 18, cost2: 25, cost3: 36, cost4: 18, cost5: 3},
  {level: 9, cost1: 10, cost2: 20, cost3: 25, cost4: 35, cost5: 10},
  {level: 10, cost1: 5, cost2: 10, cost3: 20, cost4: 40, cost5: 25}
]

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

function handleLinkClick(event) {
  const linkId = event.target.id;
  const levelData = sliderToPercentage.find(obj => obj.level == linkId);
  console.log(levelData);
};

let target1cost = cost1[0];
console.log(target1cost);

const slider = document.querySelector('.range-input');
const inputElement = document.querySelector('.usedunits');

slider.addEventListener('input', () => {
  const level = slider.value;
  sliderArray(level);
});//working number slider

inputElement.addEventListener('change', () => {  
  unitsInPlayInput = inputElement.value;
  console.log(unitsInPlayInput)
  unitsLeftOver();
});


function sliderArray(level) {
  let levelData = sliderToPercentage[`level${level}`];
  console.log(levelData)
};

function unitsLeftOver() {
  const elements = document.querySelectorAll('a[data-cost]');
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      cost = element.getAttribute('data-cost');
      calculatePercentage(unitsInPlayInput, cost);
      console.log(cost)
    })
  })
};


function calculatePercentage(unitsInPlayInput, cost) {
  if (unitsInPlayInput && cost) {
    const percentageToRoll = (unitsInPlayInput / cost) * 100;
    console.log(percentageToRoll);
  } else {
    console.error('Missing required parameters: unitsInPlayInput and cost');
  }
};





function renderDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");  
}; //working dropdown box
