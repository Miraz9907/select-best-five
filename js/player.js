function selectedPlayer(player, playerButton){
    const playerName = document.getElementById(player);
     const name = playerName.innerText;
     const selected = document.getElementById('selected-list');
     const listi = selected.getElementsByTagName('li').length;

    if(listi < 5){
        const li1 = document.createElement('li');
        li1.innerText = name;
        selected.appendChild(li1);
        const button = document.getElementById(playerButton);
        button.setAttribute('disabled', true);
    


    }
    else{
        alert("You cannot select more than 5 playes");
    }

}


 document.getElementById('btn-player1').addEventListener('click', function(){
    selectedPlayer('player-1', 'btn-player1');
    
})
document.getElementById('btn-player2').addEventListener('click', function(){
    selectedPlayer('player-2','btn-player2');
    
})
document.getElementById('btn-player3').addEventListener('click', function(){
    selectedPlayer('player-3','btn-player3');
    
})
document.getElementById('btn-player4').addEventListener('click', function(){
    selectedPlayer('player-4','btn-player4');
    
})
document.getElementById('btn-player5').addEventListener('click', function(){
    selectedPlayer('player-5','btn-player5');
    
})
document.getElementById('btn-player6').addEventListener('click', function(){
    selectedPlayer('player-6','btn-player6');
    
})
document.getElementById('btn-player7').addEventListener('click', function(){
    selectedPlayer('player-7','btn-player7');
    
})
document.getElementById('btn-player8').addEventListener('click', function(){
    selectedPlayer('player-8','btn-player8');

})
document.getElementById('btn-player9').addEventListener('click', function(){
    selectedPlayer('player-9','btn-player9');
    
})

