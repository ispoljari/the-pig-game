# PIG (dice game)

## ABOUT THE PROJECT
This is my first "serious" front-end project which I've decided to upload to GitHub. It is a part of the "Complete Javascript course" taught by Jonas Schmedtmann at Udemy. Basically it was a follow-along video course in basic JS coding. The HTML, CSS and JavaScript code uploaded to this repository is almost completely identical to the code provided in the course. I am still learning the basics of web design and my approach for now is to copy other people's code and try to understand it by reproducing it. I am aware that this code probably looks ridiculously simplistic to experienced web designers, but for me it was a valuable teaching experience and I'm proud of how much I've accomplished so far in my learning path.

## ABOUT THE GAME
The following description of the game is taken from [Wikipedia.](https://en.wikipedia.org/wiki/Pig_dice_game)

### SUMMARY
The PIG game is a jeopardy race dice game. In this type of game the objective is to meet or exceed a predefined goal value.

### RULES
The game consists of two players. In each turn a player repeatedly rolls a dice until either 1 is rolled or the player decides to hold the current score.
If the player rolls a 1 their current score is reset and it is the next players turn. If the player rolls any other number, different from 1, it is added to their current score. At any time of the game the player has the possibility to "hold" the current score, which means to add the current score to the total score which is not reset if the player rolls a 1. Other than that, when a player decides to hold it becomes the next players turn. The consecutive rolling of the dice and the transfer of the scores from "current" to "total" continues until one of the players reaches the predefined goal value, which is 100 by default.

### Project specific tweaks
1. I have added the max. score input field so that the players can choose which score value they have to achieve to end the game.

2. There are two dices that are being thrown simultaneously, instead of the classic one dice implementation. If either of those dices rolls a 1 the current player looses his current score and it is the next players turn.

## CREDITS
THe complete credits and author rights for this project belong to [Udemy.](https://www.udemy.com/the-complete-javascript-course/learn/v4/overview)
