/***************************************************************
* Name        : Random Message Generator
* Author      : Remy Ward
* Created     : 05/20/2021
* Version     : 1.0
* OS          : Windows 11
* IDE         : Visual Studio Code
* Copyright   : All Rights Reserved
* Description : For this project, you will build a message 
                generator program. Every time a user runs a 
                program, they should get a new, randomized output. 
                You’re welcome to take the project in a couple of 
                different forms, like an astrology generator, 
                inspirational message, or nonsensical jokes. To 
                make your program truly random, the message that 
                it outputs should be made up of at least three 
                different pieces of data.
*               Input:  No user input
*               Output: Random message to console      
***************************************************************/

import * as Cards from "./card-library.js";

function drawCard() {
    return Math.floor(Math.random() * 22);
};

let card1 = Cards.deck[drawCard()];
let card2 = Cards.deck[drawCard()];
let card3 = Cards.deck[drawCard()];

let message1 = `Today's Vibe: ${card1.name}. Keywords: ${card1.keywords}.`;
let message2 = `Where to focus your energy: ${card2.name}. Keywords: ${card2.keywords}.`;
let message3 = `How to make the most of your day: ${card3.name}. Keywords: ${card3.keywords}.`;

console.log('Welcome to your daily tarot reading!');
console.log(message1);
console.log(message2);
console.log(message3);