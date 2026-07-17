let balance = 0;
let income = 0;
let expense = 0;

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTransaction);

function addTransaction() {

    let text = document.getElementById("text").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if(text === "" || amount === 0){
        alert("Please enter valid data");
        return;
    }

    let list = document.getElementById("list");

    let li = document.createElement("li");

    li.innerHTML = `
        ${text} : ₹${amount}
        <button onclick="deleteTransaction(this, ${amount}, '${type}')">
            Delete
        </button>
    `;

    list.appendChild(li);

    if(type === "income"){
        income += amount;
    }
    else{
        expense += amount;
    }

    balance = income - expense;

    document.getElementById("income").innerText = "₹" + income;
    document.getElementById("expense").innerText = "₹" + expense;
    document.getElementById("balance").innerText = balance;

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}

function deleteTransaction(button, amount, type){

    if(type === "income"){
        income -= amount;
    }
    else{
        expense -= amount;
    }

    balance = income - expense;

    document.getElementById("income").innerText = "₹" + income;
    document.getElementById("expense").innerText = "₹" + expense;
    document.getElementById("balance").innerText = balance;

    button.parentElement.remove();
}
