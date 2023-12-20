let allResults = document.querySelector(".all-results");

const resultsArray = JSON.parse(sessionStorage.getItem("resultHistory"));
const lengthValues = JSON.parse(sessionStorage.getItem("lengthValues"));
const breadthValues = JSON.parse(sessionStorage.getItem("breadthValues"));


resultsArray.forEach((result, index) => {
    const lengthVal = lengthValues[index];
    const breadthVal = breadthValues[index];
  
    let finalRes = document.createElement("p");
    finalRes.innerHTML = `${lengthVal} X ${breadthVal} = ${result}`;
    allResults.append(finalRes);
  });