$(function() {

  // list of each possible hand with corresponding array (with strings inside to compare them!)
  // var onePair     = '1,1,1,2';    
  // var twoPair     = '1,2,2';  
  // var three       = '1,1,3';
  // var fullHouse   = '2,3';
  // var four        = '1,4';
  // var five        = '5';

  //Object with each combination (except both straights) with the correspponding score.
  var scoreObj = {
    '1,1,1,1,1':0,
    '1,1,1,2': 1,
    '1,2,2': 2,
    '1,1,3':3,
    // '1,1,1,1,1' AND sum of values = 15 smallStraight':4,
    // '1,1,1,1,1' AND sum of values = 20 bigStraight': 5,
    '2,3': 6,
    '1,4': 7,
    '5': 8,
  };

  //Variable for the score of each player.
  var score1;
  var score2;

  //Variable for the round of each player(increase i++ each time the player has played).
  var $round1 = 0;
  var $round2 = 0;

  //Create a function to roll all the dice of player 1
  function rollDice(player){
    // Get the element in the DOM
    var $dice = $(".player" + player + " .die");
    var resultArr = [];
    //If the die doesn't have the class 'held', roll it.
    $.each($dice, function(index, die) {
      if(!$(die).hasClass('held')) {
        $(die).text(Math.floor(Math.random() * 6) + 1);
      }
      resultArr.push(Number($(die).text()));

      // Set as a background image each dice 
      $(die).css("background-image", "url(images/dice-" + $(die).text() + "-md.png)");
    });
    return resultArr;
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

  //Change the class of the <li> to "held" when they are clicked
  $('li').on('click', function(){
    $(this).addClass('held');
  });

  //When the button is clicked, call the rollDice() function
  $('#roll1').on("click", function() {
    var player1Array = rollDice(1);
    var occurenceArray = [];
    // For each number between 1 and 6 generated randomly before, check the occurence with the countElement() function.
    [1,2,3,4,5,6].forEach(function(val) {
      var occurence = countElement(val, player1Array);
      if(occurence) {
        //Push the occurence of each number in the array
        occurenceArray.push(occurence);
      }
    })
    
    // Sort the number in the array in the right order.
    occurenceArray.sort();

    // Convert the number of the array into strings
    var strOccurence = occurenceArray.toString();

    //to have a straight, the sum of all the numbers has to equal 15(small) 20(big) AND all the dice must be different.
    if((sumElement(player1Array) === 15) && (strOccurence === '1,1,1,1,1')) {
      score1 = 4;
    } else if((sumElement(player1Array) === 20) && (strOccurence ==='1,1,1,1,1')){
      score1 = 5;
    }
    else score1 = scoreObj[strOccurence]; // if it's not a straight, check the scoreObj object to get the number of point of each   combination.

    //Create a variable linkd to the hand1 id in HTML.
    var $hand1 = document.getElementById("hand1");

    //If statement to display the hand linked to the score of each combination.
    if (score1 === 0) {
      $hand1 = "Nothing!";
    }
    else if (score1 === 1){
      $hand1 = "One pair";
    }
    else if (score1 === 2){
      $hand1= "Two pair";
    }
    else if (score1 === 3){
      $hand1 = "Three of a kind";
    }
    else if (score1 === 4){
      $hand1 = "Small straight";
    }
    else if (score1 === 5){
      $hand1= "Big straight";
    }

    else if (score1 === 6){
      $hand1 = "Full House";
    }
    else if (score1 === 7){
      $hand1 = "Four of a kind";
    }
    else if (score1 === 8){
      $hand1 = "Five of a kind";
    }
  
    $("#hand1").html($hand1)

    // Increase the number of "round" each time the player1 has roll the dice.
    $round1++;
    //The maximum amount of round is 3. Add the held class to every dice at this point.
    if ($round1 === 3) {
      $('.player1 > li').addClass('held');
    }

  });

//Held all the dice if the player choose to stick with the dice combination
$('.stick1').on('click', function(){
  $('.player1 > li').addClass('held');
  //Hide the roll button if the player choose to stick all the dice (if stick, impossible to roll again)
  $('#roll1').hide();
});


  ///////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////// PLAYER 2 //////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  //When the button is clicked, call the rollDice() function
  $('#roll2').on("click", function() {

    var player2Array = rollDice(2);
    var occurenceArray = [];
    // For each number between 1 and 6 generated randomly before, check the occurence with the countElement() function.
    [1,2,3,4,5,6].forEach(function(val) {
      var occurence = countElement(val, player2Array);
      if(occurence) {
        //Push the occurence of each number in the array
        occurenceArray.push(occurence);
      }
    })
    
    // Sort the number in the array in the right order.
    occurenceArray.sort();

    // Convert the number of the array into strings
    var strOccurence = occurenceArray.toString();

    if(sumElement(player2Array) === 15 && (strOccurence === '1,1,1,1,1')) {
      score2 = 4;
    } else if(sumElement(player2Array) === 20 && (strOccurence === '1,1,1,1,1')){
      score2 = 5;
    }
    else score2 = scoreObj[strOccurence];
    
   //Create a variable linkd to the hand1 id in HTML.
   var $hand2 = document.getElementById("hand2");

    //If statement to display the hand linked to the score of each combination.
    if (score2 === 0) {
      $hand2 = "Nothing!";
    }
    else if (score2 === 1){
      $hand2 = "One pair";
    }
    else if (score2 === 2){
      $hand2= "Two pair";
    }
    else if (score2 === 3){
      $hand2 = "Three of a kind";
    }
    else if (score2 === 4){
      $hand2 = "Small straight";
    }
    else if (score2 === 5){
      $hand2= "Big straight";
    }

    else if (score2 === 6){
      $hand2 = "Full House";
    }
    else if (score2 === 7){
      $hand2 = "Four of a kind";
    }
    else if (score2 === 8){
      $hand2 = "Five of a kind";
    }

     $("#hand2").html($hand2)

    //Held all the dice if the player choose to stick with the dice combination
    $('.stick2').on('click', function(){
      $('.player2 > li').addClass('held');
      //Hide the roll button if the player choose to stick all the dice (if stick, impossible to roll again)
      $('#roll2').hide();
    });

    //Increase the number of "round" each time the player2 has roll the dice.
    $round2++;

    //The maximum amount of round is 3. Add the held class to every dice at this point.
    if ($round2 === 3) {
      $('.player2 > li').addClass('held');
    }  
  });


///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//Function to evaluate which player has the best hand.
  function getWinner() {
//check for the highest score.
    if (score1 > score2) {
      return " player 1 wins !"
    }  else if (score1 < score2 ) {
      return " player 2 wins !"
    }  else  {
      return "It's a tie!"
    }
  };

  //When the 'winner' button is clicked, call the getWinner function.
  $('#winner').on("click", function() {
    getWinner();

    //With the variable $winner, change the content of the HTML.
    var $winner = document.getElementById("getWinner");
    $winner.innerHTML = getWinner();
  });

  //Refresh page to play again
  $('#refresh').click(function() {
      location.reload();
  });

  //Throw both set of dice, get strated button
  $('#start').click(function() {
    $( "#roll1" ).trigger( "click");
    $( "#roll2" ).trigger( "click");
  });

  //When the play button is clicked, hide the 'rules' by changing the class (cf CSS)
  $('#play').click(function() { 
    $(".rules").addClass("hidden")
  });

});