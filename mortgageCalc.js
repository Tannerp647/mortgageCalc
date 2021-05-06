
document.querySelector(".button").addEventListener("click", function monthlyPayment() {

    const loanAmount = Number(document.querySelector("input.la").value);
    const loanTerm = Number(document.querySelector("input.lt").value * 12);
    const interestRate = Number(document.querySelector("input.ir").value / 100 / 12);
    //mortgage calculations
    const interestRatePlusOne = interestRate + 1;
    const answer = 1 - Math.pow(interestRatePlusOne, -loanTerm);
    const almostThere = interestRate / answer;
    const final = almostThere * loanAmount;
    
    const monthlyPayment = `$${Math.ceil(final)}`;
    const totalPayment = `$${Math.ceil(final * loanTerm)}`;
    const totalInterest = `$${Math.ceil(final * loanTerm) - loanAmount}`; 
    const annualPayment = `$${Math.ceil(final) * 12}`;

      document.querySelector(".monthly-payment").textContent = monthlyPayment;

      document.querySelector(".total-payment").textContent = totalPayment;

      document.querySelector(".total-interest").textContent = totalInterest;

      document.querySelector(".annual-payment").textContent = annualPayment;

    if (!loanAmount || !loanTerm || !interestRate) {
      alert("please enter a valid number");
    }
  //refactored
  
  });
  
