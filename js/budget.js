
document.getElementById('calculate-btn').addEventListener('click',function(){
    const amountPerPlayer = document.getElementById('per-player').value;
    const playerAmount = parseFloat(amountPerPlayer);
    

    if(isNaN(playerAmount)){
        alert("Not a number!! enter valid number");
        return;
    }
    const selectedPlayer = document.getElementById("selected-list");
    const playerNumber = selectedPlayer.getElementsByTagName('li').length;

    const playerTotalExpenses = playerAmount * playerNumber;
    const playerAmountTotal = document.getElementById('player-expenses');
    playerAmountTotal.innerText = playerTotalExpenses;


})

document.getElementById('total-expeses').addEventListener('click',function(){
    const managerAmount =document.getElementById('manager-amount').value;
    const manager = parseFloat(managerAmount);
    if(isNaN(manager)){
        alert("Not a number!! enter valid number");
        return;
    }

    const coachAmount =document.getElementById('coach-amount').value;
    const coach = parseFloat(coachAmount);

    if(isNaN(coach)){
        alert("Not a number!! enter valid number");
        return;
    }

    const amountPerPlayer = document.getElementById('player-expenses').innerText;
    const playerAmount = parseFloat(amountPerPlayer);

    const totalExpenses = manager + coach + playerAmount;

    const expensesAmount = document.getElementById('total-expenses');
    expensesAmount.innerText = totalExpenses;


})

