// Expense Tracker Logic
let totalExpense = 0;
document.getElementById('add-expense-btn').addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (description && !isNaN(amount) && amount > 0) {
        // Add expense to list
        const li = document.createElement('li');
        li.innerHTML = `${description} - $${amount.toFixed(2)}`;
        document.getElementById('expense-list').appendChild(li);
        
        // Update total expense
        totalExpense += amount;
        document.getElementById('total').textContent = totalExpense.toFixed(2);
        
        // Clear inputs
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter a valid description and amount.');
    }
});

// Calculator Logic
let calcInput = '';
const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.calc-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        if (value === 'C') {
            calcInput = '';
            display.value = '';
        } else if (value === '=') {
            try {
                calcInput = eval(calcInput).toString();
                display.value = calcInput;
            } catch (error) {
                display.value = 'Error';
                calcInput = '';
            }
        } else {
            calcInput += value;
            display.value = calcInput;
        }
    });
});
