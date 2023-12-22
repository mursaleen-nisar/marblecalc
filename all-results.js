let allResults = document.querySelector(".all-results");
let totalBtn = document.querySelector(".total-btn");
let clearAllBtn = document.querySelector(".clear-all-btn");
let totalPara = document.querySelector(".total-val");

const resultsArray = JSON.parse(sessionStorage.getItem("resultHistory"));
const lengthValues = JSON.parse(sessionStorage.getItem("lengthValues"));
const breadthValues = JSON.parse(sessionStorage.getItem("breadthValues"));


resultsArray.forEach((result, index) => {
    const lengthVal = lengthValues[index];
    const breadthVal = breadthValues[index];

    let finalRes = document.createElement("p");
    finalRes.classList.add("result-para");
    finalRes.innerHTML = `${lengthVal} X ${breadthVal} = ${result}`;
    allResults.append(finalRes);
});

totalBtn.addEventListener("click", () => {
  let numberArray = resultsArray.map(value => {
    const number = parseFloat(value.match(/\d+\.\d+/)[0]);
    return number;
  });
  
  let totalSum = numberArray.reduce((prev, curr) => {
    return prev+curr;
  });
  
  totalPara.innerHTML = totalSum + ' ft';
});

clearAllBtn.addEventListener("click", () => {
  sessionStorage.clear();

  const resultParas = document.querySelectorAll(".result-para");
  resultParas.forEach(paragraph => paragraph.innerHTML = "");

  totalPara.innerHTML = "Total...";
});