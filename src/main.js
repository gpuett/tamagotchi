import { Tamagotchi } from './../src/tamagotchi.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#tamagotchi").submit(function(event) {
    let newTama = new Tamagotchi($("#name").val());
    $("#gif").show();
    newTama.setHunger();
    newTama.setRest();
    newTama.setPlay();
    console.log(newTama);
    event.preventDefault();
    $("#feed").click(function() {
      newTama.feed();
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
    }, 1000);
    setInterval(() => {
      $(".restLevel").text(newTama.restLevel);
    }, 5000);
    setInterval(() => {
      $(".playLevel").text(newTama.playLevel);
    }, 2000);

  });
});
