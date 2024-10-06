function calculateMaturityAmount(){
    // Get input values
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    var tenure = parseFloat(document.getElementById("tenure").value);

    // const maturityAmount = principal + (principal * interestRate * tenure)/100;

    const maturityAmount = principal + principal * interestRate *tenure ;


    // Display the calculated maturity amount
    document.getElementById("result").innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Event listener for form submission
 document.getElementById("calculatBtn").addEventListener("click", 
    calculateMaturityAmount);
