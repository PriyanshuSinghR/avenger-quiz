var readlineSync = require("readline-sync");
var score = 0;
var user = readlineSync.question("What is your Name?  ");

console.log(`Welcome ${user} to Avenger Quiz?`);

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score ++
  } else {
    console.log("Wrong");
  }
  console.log(`Current score: ${score}`)
  console.log("------------------------------------")
}

var questions = [{
  question: `Who is the leader of S.H.I.E.L.D?
      a)Nick Fury
      b)Tony Stark
      c)Bruce Banner
      d)Diana Prince
>` ,
  answer: "a"
},
{
  question: `Which superhero does Bruce Banner transform into?
      a)Iron Man
      b)Hawkeye
      c)Thor
      d)The Hulk
>` ,
  answer: "d"
},
{
  question: `Who is Loki's adoptive brother?
      a)Thor
      b)Tony Stark
      c)Bruce Banner
      d)Peter Parker
>` ,
  answer: "a"
},
{
  question: `What weapon does Thor carry?
      a)A bow and arrow
      b)A catapult
      c)A hammer
      d)A sword
>` ,
  answer: "c"
},
{
  question: `What is Clint Barton's superhero name?
      a)Black Panther
      b)Hawkeye
      c)Iron Man
      d)Thor
>` ,
  answer: "b"
},
{
  question: `Which other superhero team do the Avengers join with to try to prevent this?
      a)Guardians of the Galaxy
      b)The Fantastic Four
      c)The Incredibles
      d)The Mighty Morphin Power Rangers
>` ,
  answer: "a"
},
{
  question: `In the films, what does S.H.I.E.L.D. stand for?
      a)Supreme Headquarters, International Espionage, Law-Enforcement Division
      b)Strategic Homeland Intervention, Enforcement and Logistics Division
      c)Strategic Hazard Intervention Espionage Logistics Directorate
      d)Superheroes Help In Exciting Logical Display
>` ,
  answer: "b"
},
{
  question: `Which Marvel character has never appeared in The Avengers films?
      a)The Wasp
      b)Hawkeye
      c)Iron Man
      d)Captain America
>` ,
  answer: "a"
},
{
  question: `Who originally created the Avengers?
      a)Ant and Dec
      b)Stan Lee and Jack Kirby
      c)Paul Hollywood and Mary Berry
      d)Dennis and Gnasher
>` ,
  answer: "b"
},
{
  question: `In the 2012 movie, The Avengers features Captain America. What is his real name?
      a)Buck Rogers
      b)Ted Rogers
      c)Steve Rogers
      d)Tony Stark
>` ,
  answer: "c"
}]

for(var i=0; i<questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log(`${user} your score is ${score}/${questions.length}`)