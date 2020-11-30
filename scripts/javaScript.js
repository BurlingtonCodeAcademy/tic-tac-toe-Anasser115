//Create a class Players 1&2 
//new player 1 => X
// each click  player switch
//each player has color
// color switch with player

count = 1;
winner = [];
function restart() { window.location.reload(false);};
function myFunction(elmnt) {
  
if (count <= 9 && elmnt.style.backgroundColor != "red" && elmnt.style.backgroundColor != "blue") {
  
  if (count % 2 == 0 ){
    elmnt.style.backgroundColor = "red";
    winner.push(elmnt.innerHTML);
    elmnt.innerHTML = "Player 2";

      // player O
      
      
      



  }
  else {
    elmnt.style.backgroundColor = "blue";
    winner.push(elmnt.innerHTML);
    elmnt.innerHTML = "Player 1";
    
  }
  count = count +1; 
  // elmnt.style.backgroundColor = currentPlayer;
}
else if (count >9){
  alert(`It's a Draw!j \nPress Ok to Restart`)
  window.location.reload(false);
}

// Winning Rows
if (document.getElementById("one").innerHTML == document.getElementById("two").innerHTML && 
document.getElementById("one").innerHTML == document.getElementById("three").innerHTML) { 
  alert(`${document.getElementById("one").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};

if (document.getElementById("four").innerHTML == document.getElementById("five").innerHTML && 
document.getElementById("four").innerHTML == document.getElementById("six").innerHTML) {  
  
  alert(`${document.getElementById("four").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};

if (document.getElementById("seven").innerHTML == document.getElementById("eight").innerHTML && 
document.getElementById("seven").innerHTML == document.getElementById("nine").innerHTML) {  
  
  alert(`${document.getElementById("seven").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};
// Winning Columns
if (document.getElementById("one").innerHTML == document.getElementById("four").innerHTML && 
document.getElementById("one").innerHTML == document.getElementById("seven").innerHTML) {  
  
  alert(`${document.getElementById("one").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};

if (document.getElementById("two").innerHTML == document.getElementById("five").innerHTML && 
document.getElementById("two").innerHTML == document.getElementById("eight").innerHTML) {  
  
  alert(`${document.getElementById("two").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};

if (document.getElementById("three").innerHTML == document.getElementById("six").innerHTML && 
document.getElementById("three").innerHTML == document.getElementById("nine").innerHTML) {  
  
  alert(`${document.getElementById("three").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};
// Winning Diagonals

if (document.getElementById("one").innerHTML == document.getElementById("five").innerHTML && 
document.getElementById("one").innerHTML == document.getElementById("nine").innerHTML) {  
  
  alert(`${document.getElementById("one").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};

if (document.getElementById("three").innerHTML == document.getElementById("five").innerHTML && 
document.getElementById("three").innerHTML == document.getElementById("seven").innerHTML) {  
  
  alert(`${document.getElementById("three").innerHTML} has won!! \nPress Ok to Restart`)
  window.location.reload(false);
};





}