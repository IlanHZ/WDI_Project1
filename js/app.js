$(function() {


// list of each possible hand with corresponding array (with strings inside to compare them!)
var onePair     = '1,1,1,2';    
var twoPair     = '1,2,2';  
var three       = '1,1,3';
var fullHouse   = '2,3';
var four        = '1,4';
var five        = '5';

var scoreObj = {
  '1,1,1,1,1':0,
  '1,1,1,2': 1,
  '1,2,2': 2,
  '1,1,3':3,
  //'smallStraight':4,
  //'bigStraight': 5,
  '2,3': 6,
  '1,4': 7,
  '5': 8,
};

var score1;
var score2;
var round = 0;



//Create a function to roll all the dice of player 1
  function rollDice(player){
// Get the element in the DOM
    var $die1 = document.getElementById("die" + player + "1");
    var $die2 = document.getElementById("die" + player + "2");
    var $die3 = document.getElementById("die" + player + "3");
    var $die4 = document.getElementById("die" + player + "4");
    var $die5 = document.getElementById("die" + player + "5");
// Set variable of the random result of each dice.

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;   
    var d3 = Math.floor(Math.random() * 6) + 1;   
    var d4 = Math.floor(Math.random() * 6) + 1;   
    var d5 = Math.floor(Math.random() * 6) + 1;  
    
// Change the value of each dice in HTML with the random result of each dice.
if($('li').not('.held')){
    $die1.innerHTML = d1;
    $die2.innerHTML = d2;
    $die3.innerHTML = d3;
    $die4.innerHTML = d4;
    $die5.innerHTML = d5;
    return [d1, d2, d3, d4, d5];
  }
}
// function that counts the occurence of each number of the array
  function countElement(item, array) {
    return array.reduce(function(prev,val) { 
      return (val === item) ? prev + 1 : prev;
    },0);
  }
// function that sums all the dice, if sum = 15, you have a small straight, if 20 a big straight. 
  function sumElement(array) {
    return array.reduce(function(prev,val) {
      return prev + val;
    },0);
  }



///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// PLAYER 1 //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

$('li').on('click', function(){
  $(this).addClass('held');
});

//When the button is clicked, call the rollDice1 function

  $('#roll1').on("click", function() {
    var player1Array = rollDice(1);
          console.log(sumElement(player1Array));
    var occurenceArray = [];
    // 
    [1,2,3,4,5,6].forEach(function(val) {
      var occurence = countElement(val, player1Array);
      if(occurence) {
        occurenceArray.push(occurence);
      }
    })
    
    // Sort the number in the array in the right order.
    occurenceArray.sort();
    //console.log(occurenceArray);
    // Convert the number of the array into strings
    var strOccurence = occurenceArray.toString();
    //console.log(strOccurence);
    //console.log(strOccurence);
    if(sumElement(player1Array) === '15') {
      score1 = '4';
    } else if(sumElement(player1Array) === '20'){
      score1 = '5';
    }
    else score1 = scoreObj[strOccurence];
    //console.log(" player1 score is " + score1)

    //Show the hand of the player 1 on the screen
    var $hand1 = document.getElementById("score1");
    $hand1.innerHTML = score1;
    //console.log($hand1)
  
    //if (score1 === '0') {
    //  var score1 =$hand1.innerHTML ("Nothing!");
    //}
    //else if (score1 === "1"){
    //  $hand1.innerHTML ("One pair");
    //}
    //else if (score1 === "2"){
    //  $hand1.innerHTML ("Two pair");
    //}
    //else if (score1 === "3"){
    //  $hand1.innerHTML ("Three of a kind");
    //}
    //else if (score1 === "4"){
    //  $hand1.innerHTML ("One pair");
    //}
 
  });


///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// PLAYER 2 //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

  $('#roll2').on("click", function() {

    var player2Array = rollDice(2);
    console.log(sumElement(player2Array));
    var occurenceArray = [];
    // 
    [1,2,3,4,5,6].forEach(function(val) {
      var occurence = countElement(val, player2Array);
      if(occurence) {
        occurenceArray.push(occurence);
      }
    })
    
    // Sort the number in the array in the right order.
    occurenceArray.sort();
    //console.log(occurenceArray);
    // Convert the number of the array into strings
    var strOccurence = occurenceArray.toString();
    //console.log(strOccurence);
    //console.log(strOccurence);
    if(sumElement(player2Array) === '15') {
      score2 = '4';
    } else if(sumElement(player2Array) === '20'){
      score2 = '5';
    }
    else score2 = scoreObj[strOccurence];
    //console.log(" player2 score is " + score2)
    //Show the hand of the player 1 on the screen
    var $hand1 = document.getElementById("score2");
    //console.log($hand1)
    $hand1.innerHTML = score2;
    //console.log(score2)

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

    function getWinner() {
      if (score1 > score2) {
        return " player1 wins!"
      }  else if (score1 < score2 ) {
        return " player2 wins!"
      }  else  {
        return "It's a tie!"
      }

    }
  //
      $('#winner').on("click", function() {

      getWinner();
      console.log(getWinner())
      //Show the hand of the player 1 on the screen
      var $winner = document.getElementById("getWinner");
      //console.log($hand1)
      $winner.innerHTML = getWinner();
      console.log(score1)

    });
   
  });





});