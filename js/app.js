$(function() {
console.log("yeah")







// Variable that count the occurence of each number of the array





//player1Array.forEach(function(i) { count[i] = (count[i]||0)+1;  });
//console.log(count)
//console.log(player1Array)


///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// PLAYER 1 //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// Remark : in the following variables, the first number is the number of the player and the second is the number of the dice.

//Create a function to roll all the dice of player 1
  function rollDice1(){
// Get the element in the DOM
    var $die11 = document.getElementById("die11");
    var $die12 = document.getElementById("die12");
    var $die13 = document.getElementById("die13");
    var $die14 = document.getElementById("die14");
    var $die15 = document.getElementById("die15");
// Set variable of the random result of each dice.
    var d11 = Math.floor(Math.random() * 6) + 1;
    var d12 = Math.floor(Math.random() * 6) + 1;   
    var d13 = Math.floor(Math.random() * 6) + 1;   
    var d14 = Math.floor(Math.random() * 6) + 1;   
    var d15 = Math.floor(Math.random() * 6) + 1;   
// Change the value of each dice in HTML with the random result of each dice.
    $die11.innerHTML = d11;
    $die12.innerHTML = d12;
    $die13.innerHTML = d13;
    $die14.innerHTML = d14;
    $die15.innerHTML = d15;
    return player1Array = [d11, d12, d13, d14, d15];
  }
// function that counts the occurence of each number of the array
  function countElement(item, array) {
    var count = 0;
    $(array).each(function(i,v) { 
      if (v === item) {
        count++;
      } 
    });
    return count;
  }

     
//When the button is clicked, call the rollDice1 function
  $('#roll1').on("click", function() {
  //console.log("clicked")
    rollDice1()
    // Variable of the occurence of each number
    var occurenceof1 = countElement(1, player1Array)
    console.log(occurenceof1)
    var occurenceof2 = countElement(2, player1Array)
    console.log(occurenceof2)
    var occurenceof3 = countElement(3, player1Array)
    console.log(occurenceof3)
    var occurenceof4 = countElement(4, player1Array)
    console.log(occurenceof4)
    var occurenceof5 = countElement(5, player1Array)
    console.log(occurenceof5)
    var occurenceof6 = countElement(6, player1Array)
    console.log(occurenceof6)
  });



///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// PLAYER 2 //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// Create a function to roll all the dice of player 2
  function rollDice2(){

// Get the element in the DOM
      var $die21 = document.getElementById("die21");
      var $die22 = document.getElementById("die22");
      var $die23 = document.getElementById("die23");
      var $die24 = document.getElementById("die24");
      var $die25 = document.getElementById("die25");

// Set variable of the random result of each dice.
      var d21 = Math.floor(Math.random() * 6) + 1;
      var d22 = Math.floor(Math.random() * 6) + 1;   
      var d23 = Math.floor(Math.random() * 6) + 1;   
      var d24 = Math.floor(Math.random() * 6) + 1;   
      var d25 = Math.floor(Math.random() * 6) + 1;   

// Change the value of each dice in HTML with the random result of each dice.
      die21.innerHTML = d21;
      die22.innerHTML = d22;
      die23.innerHTML = d23;
      die24.innerHTML = d24;
      die25.innerHTML = d25;
      console.log(player2Array);

          }

//When the button si clicked, call the rollDice1 function
$('#roll2').on("click", function() {
  console.log("clicked")
  rollDice2()
});

// Create a function that only allows to play 3 time

// Between each of those 3 throws the player should be able to hold as many dices as he wants.


// Creat a function to find the winner

// Create a function to get a score in order to compare it.

// list of the 8 differents scenarios (hand the player can have):
    //Scenario: Bust              ---> 0 point 
    //Scenario: One pair          ---> 1 point 
    //Scenario: Two pair          ---> 2 point 
    //Scenario: Three of a kind   ---> 3 point 
    //Scenario: Straight          ---> 4 point 
    //Scenario: Full house        ---> 5 point 
    //Scenario: Four of a kind    ---> 6 point 
    //Scenario: Five of a kind    ---> 7 point 


});