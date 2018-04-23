import { Tamagotchi } from './../src/tamagotchi.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#tamagotchi").submit(function(event) {
    let newTama = new Tamagotchi($("#name").val());
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
    $(".foodLevel").text(newTama.foodLevel)
    $(".restLevel").text(newTama.restLevel)
    $(".playLevel").text(newTama.playLevel)
  });
});
