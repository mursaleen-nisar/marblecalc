let length = document.querySelector("#length");
let breadth = document.querySelector("#breadth");
let submitBtn = document.querySelector("#submit-btn");
let clearBtn = document.querySelector("#clear-btn");
let result = document.querySelector("#result");



sessionStorage.setItem("resultHistory", JSON.stringify([]));

submitBtn.addEventListener("click", () => {
    let lengthVal = length.value;
    let breadthVal = breadth.value;

    const longResult = lengthVal * breadthVal / 144;
    const shortResult = Math.floor(longResult * 100) / 100;
    result.innerHTML = shortResult + ' ft';
    // Store and show result on another page
    const resultVal = result.innerHTML;

    const lengthValues = JSON.parse(sessionStorage.getItem("lengthValues")) || [];
    const breadthValues = JSON.parse(sessionStorage.getItem("breadthValues")) || [];
    if (length.value !== "" && breadth.value !== "") {
        lengthValues.push(lengthVal);
        sessionStorage.setItem("lengthValues", JSON.stringify(lengthValues));
        breadthValues.push(breadthVal);
        sessionStorage.setItem("breadthValues", JSON.stringify(breadthValues));
    }


    let resultsArray = JSON.parse(sessionStorage.getItem("resultHistory")) || [];
    if (resultVal !== "0 ft") {
        resultsArray.push(resultVal);
        sessionStorage.setItem("resultHistory", JSON.stringify(resultsArray));
    }
});

clearBtn.addEventListener("click", () => {
    length.value = '';
    breadth.value = '';
    result.innerHTML = 'Here is your result...';
});