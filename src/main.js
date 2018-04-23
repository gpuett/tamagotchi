import { Tamagotchi } from './../src/tamagotchi.js';
//import { randomImage } from './../src/roll.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#tamagotchi").submit(function(event) {
    let newTama = new Tamagotchi($("#name").val());
    // $("#gif, #cheetahgif, #cat").show();

    newTama.setHunger();
    newTama.setRest();
    newTama.setPlay();
    event.preventDefault();
    $("#feed1").click(function() {
      newTama.feedPizza();
    });
    $("#feed2").click(function() {
      newTama.feedCarrot();
    });
    $("#feed3").click(function() {
      newTama.feedApple();
    });
    $("#rest").click(function() {
      newTama.nap();
    });
    $("#play").click(function() {
      newTama.play();
    });
    $(".foodLevel").text(newTama.foodLevel);
    $(".restLevel").text(newTama.restLevel);
    $(".playLevel").text(newTama.playLevel);
    setInterval(() => {
      $(".foodLevel").text(newTama.foodLevel);
      if (newTama.foodLevel < 0) {
        $(".foodLevel").text("Your pet starved!");
      }
    }, 1000);
    setInterval(() => {
      $(".restLevel").text(newTama.restLevel);
      if (newTama.restLevel < 0) {
        $(".restLevel").text("Your pet died of sleep deprivation!");
      }
    }, 5000);
    setInterval(() => {
      $(".playLevel").text(newTama.playLevel);
      if (newTama.playLevel < 0) {
        $(".playLevel").text("Your pet died of boredom!");
      }
    }, 2000);

  });
});
