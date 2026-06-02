let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let amount = document.getElementById("amount").value;
    let parsedAmount = parseFloat(amount);
    let category = document.getElementById("category").value.trim();
    let description = document.getElementById("description").value.trim();

    if (amount === "" || Number.isNaN(parsedAmount) || parsedAmount <= 0 || category === "") {
        alert("Please enter a valid amount and category!");
        return;
    }

    let expense = {
        amount: parsedAmount,
        category: category,
        description: description
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";

    displayExpenses();
}


function displayExpenses() {
    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach((exp , index) => {
        let li = document.createElement("li");

li.innerHTML = `
    <span>${exp.category} - ₹${exp.amount} (${exp.description})</span>
    <button class="delete-btn" onclick="deleteExpense(${index})">🗑️</button>
`;

list.appendChild(li);

        total += exp.amount;
    });

    document.getElementById("total").textContent = "Total: ₹" + total;

    renderChart();
}

window.onload = function() {
    displayExpenses();
};

function deleteExpense(index) {
    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

function renderChart() {
    let categoryMap = {};

    expenses.forEach(exp => {
        if (categoryMap[exp.category]) {
            categoryMap[exp.category] += exp.amount;
        } else {
            categoryMap[exp.category] = exp.amount;
        }
    });

    let labels = Object.keys(categoryMap);
    let data = Object.values(categoryMap);

    const ctx = document.getElementById('expenseChart').getContext('2d');

    if (window.chart) {
        window.chart.destroy();
    }

    window.chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
    label: 'Expenses by Category',
    data: data,
    backgroundColor: ['#667eea', '#764ba2', '#ff6b6b', '#48bb78']
}]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
}
