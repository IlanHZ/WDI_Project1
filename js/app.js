$(function() {

  // list of each possible hand with corresponding array (with strings inside to compare them!)
  // var onePair     = '1,1,1,2';    
  // var twoPair     = '1,2,2';  
  // var three       = '1,1,3';
  // var fullHouse   = '2,3';
  // var four        = '1,4';
  // var five        = '5';

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
  console.log(score1)
  var score2;

  //round number (increase i++ each time the player2 has played.)
  var $round1 = 0;
  console.log($round1)
  var $round2 = 0;
  console.log($round2)


  //Create a function to roll all the dice of player 1
  function rollDice(player){
  // Get the element in the DOM
    var $dice = $(".player" + player + " .die");
    var resultArr = [];

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

  //Change the class of the <li> to "held" when it is clicked
  $('li').on('click', function(){
    $(this).addClass('held');
  });

    //When the button is clicked, call the rollDice1 function
  $('#roll1').on("click", function() {
    var player1Array = rollDice(1);
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


    // Convert the number of the array into strings
    var strOccurence = occurenceArray.toString();

    console.log(strOccurence)
    //Small straight
    console.log(score1)
    if((sumElement(player1Array) === 15) && (strOccurence === '1,1,1,1,1')) {
      score1 = 4;
    } else if((sumElement(player1Array) === 20) && (strOccurence ==='1,1,1,1,1')){
      score1 = 5;
    }
    else score1 = scoreObj[strOccurence];
    console.log(" player1 score is " + score1)

    //Show the hand of the player 1 on the screen
    var $hand1 = document.getElementById("hand1");

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
     console.log("you have "+$hand1)

    // Increase the number of "round" each time the player1 has roll the dice.
    $round1++;
    console.log($round1)
    if ($round1 === 3) {
      $('.player1 > li').addClass('held');
    }

  });

//Held all the dice if the player choose to stick with the dice combination
$('.stick1').on('click', function(){
  $('.player1 > li').addClass('held');
  $('#roll1').hide();
});




  ///////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////// PLAYER 2 //////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  $('#roll2').on("click", function() {

    var player2Array = rollDice(2);
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
    if(sumElement(player2Array) === 15) {
      score2 = 4;
    } else if(sumElement(player2Array) === 20){
      score2 = 5;
    }
    else score2 = scoreObj[strOccurence];
    console.log(" player2 score is " + score2)
    //Show the hand of the player 1 on the screen
   var $hand2 = document.getElementById("hand2");

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
     console.log("you have "+$hand2)



    //Held all the dice if the player choose to stick with the dice combination
    $('.stick2').on('click', function(){
      $('.player2 > li').addClass('held');
      $('#roll2').hide();
    });



// Increase the number of "round" each time the player2 has roll the dice.
    $round2++;
    console.log($round2)

    if ($round2 === 3) {
      $('.player2 > li').addClass('held');
    }
   
  });


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

  };

//
  $('#winner').on("click", function() {
    getWinner();

    var $winner = document.getElementById("getWinner");
    //console.log($hand1)
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
})


});