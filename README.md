# WDI_Project1

Poker Dice Game

General Assembly WDI London - Project 1

The Game – Luck and Probabilities

1.  It accommodates two players, who compete against each other in three rounds.
2.  Each player has a maximum of three throws to get the best score.
3.  It makes the link between the luck of a dice game and the probabilities of Poker.
How the game is played

• A randomly generated set of five dice is generated for each player.
• The player will then have to get the best of the following hands: 
     o Nothing
     o One pair
     o Two pairs
     o Three of a kind
     o Small straight
     o Big straight
     o Full House
     o Five of a kind
• There is a maximum of three throws for each player to create the best combination.
• Between each throw, the player can hold as many dice as he want.  
• Each of the previous hand is linked to a score, with ‘nothing’ as the worst and ‘five of a kind’ as the best.
• The winner is the player which as the best hand at the end of the three rounds.

How it works

After having read the rules, the player press ‘Play’ to go to the game board. Then, one of the player presses the ‘Get Started’ button to throw both set of five dice. 
Based on this first combination of dice, each player has two choices:
o Hold some of the dice by simply clicking on them and then press ‘Roll dice’ to throw the others.
o Press ‘Stick All’ if the player is already happy with this hand. If he chooses this option, he won’t be allowed to throw any dice again (the ‘Roll dice’ button will disappear).
Then, each player will be allowed to do the same thing two times, where the player 1 will play first and then player 2, for each round.
At the end of the three round (three throws) all the dice will be automatically held to prevent any additional throw. 
To know who won, one of the players just needs to press the ‘Get Winner’ button. He can also do it during the game to check who’s ahead at every stage of the game.

How it was designed

The design that was chosen for this game is a classical poker table, with buttons that look like poker chips. Then, there is simple set of dice on the table. The shadow of each dice will appear in red if the player choose to hold it.
On the left of the dice, each player can see the name of the hand he has, and can press ‘get winner’ to display which player is winning, at the end or between each round. 

What I learned

This Poker Dice Game is my first complete programming project. The process of creating a game from scratch was at the same time very interesting and challenging. I mainly learned a lot about logic using Javascript and jQuery, in order to create the winning logic.  One of the most challenging parts was to analyze every possible combination the player could have, based on his five dice. Finding a way of sorting the different combinations in order to link them with the hands the player could have, made me learned a lot about how to link a ‘usual’ math logic with the programming logic. Basically, to try to think like a computer when approaching a problem is the most important thing I have learned during this project. 

What more I whish I could have done

I whish I could have spend more time on the visual effects of this game. Making the dice in 3D and animating them so that each round look like a real throw would have been great. 
Moreover, I would have liked not only to base the win logic on the player’s hand. but also on value of the dice (a pair of one is not equal to a pair of six).  
Also, if I had enough time I would have like to base the win logic on more than one round. 

