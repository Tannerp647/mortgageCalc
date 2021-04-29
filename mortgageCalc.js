document
  .querySelector(".button")
  .addEventListener("click", function monthlyPayment() {
    const loanAmount = Number(document.querySelector("input.la").value);
    const loanTerm = Number(document.querySelector("input.lt").value * 12);
    const interestRate = Number(
      document.querySelector("input.ir").value / 100 / 12
    );
    //interestRate = interestRate / 100 / 12;
    const interestRatePlusOne = interestRate + 1;
    const answer = 1 - Math.pow(interestRatePlusOne, -loanTerm);
    const almostThere = interestRate / answer;
    const final = almostThere * loanAmount;
    const monthlyPayment = Number(
      (document.querySelector(".monthly-payment").textContent = `$${Math.ceil(
        final
      )}`)
    );

    const totalPayment = Number(
      (document.querySelector(".total-payment").textContent = `$${Math.ceil(
        final * loanTerm
      )}`)
    );

    const totalInterest = Number(
      (document.querySelector(".total-interest").textContent =
        totalPayment - loanAmount)
    );

    const annualPayment = Number(
      (document.querySelector(".annual-payment").textContent = `$${
        Math.ceil(final) * 12
      }`)
    );

    if (!loanAmount || !loanTerm || !interestRate) {
      alert("please enter a valid number");
    }
    //console.log(final);
    //return Math.ceil(final);
  });
