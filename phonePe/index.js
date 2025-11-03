function showTransactionHistory(tileName) {
    let transactions = {
        Investment: [
            "Invested 5,000 rs in Mutual Funds",
            "Added 2,000 rs to SIP",
            "Withdrew 1,000 rs from Equity Fund"
        ],
        Insurance: [
            "Paid Health Insurance premium 3,200 rs",
            "Renewed Car Insurance 2,500 rs",
            "Life Insurance installment 1,800 rs"
        ],
        Lending: [
            "Loan EMI paid 4,500 rs",
            "Borrowed 10,000 rs personal loan",
            "Paid interest 500 rs"
        ]
    };

    let message = `${tileName} Transactions:\n\n` + transactions[tileName].join("\n");
    alert(message);
}

document.querySelector('#investmentTile').addEventListener("click", () => showTransactionHistory("Investment"));
document.querySelector('#insuranceTile').addEventListener("click", () => showTransactionHistory("Insurance"));
document.querySelector('#lendingTile').addEventListener("click", () => showTransactionHistory("Lending"));


