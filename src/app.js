import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

pronoun.map((first) => {
  adj.map((second) => {
    noun.map((third) => {
      const total = `${first}${second}${third}.com`
      console.log(total)
    })
  })
})
