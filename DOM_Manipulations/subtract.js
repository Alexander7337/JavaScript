function subtract() {
    let num1 = document.getElementById("firstNumber");
    num1.removeAttribute("disabled");
    let num2 = document.getElementById("secondNumber");
    num2.removeAttribute("disabled");
    let result = document.getElementById("result");

    doCalculation();

    num1.addEventListener("click", clearAndEnableBoxI);
    num2.addEventListener("click", clearAndEnableBoxII);

    function doCalculation() {
        let calc = Number(num1.value) - Number(num2.value);
        result.textContent = calc;      
    }

    function clearAndEnableBoxI() {
        num1.value = "";
        num1.addEventListener("change", doCalculation);
    };

    function clearAndEnableBoxII() {
        num2.value = "";
        num2.addEventListener("change", doCalculation);
    };
};