import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', function() {
  let tamago = new Tamagotchi("Tamago");

  beforeEach(function() {
    jasmine.clock().install();
    tamago.setHunger();
    tamago.setRest();
    tamago.setPlay();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    tamago.setReset();
  });

  it('should have a name and a food, rest, and play level of 10 when it is created', function() {
    expect(tamago.name).toEqual("Tamago");
    expect(tamago.foodLevel).toEqual(10);
    expect(tamago.restLevel).toEqual(10);
    expect(tamago.playLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(tamago.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    tamago.foodLevel = 0;
    expect(tamago.isItDead()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(tamago.isItDead()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    tamago.feed();
    expect(tamago.foodLevel).toEqual(10);
  });

  it('should have a rest level of 5 after 25001 milliseconds', function(){
    jasmine.clock().tick(25001);
    expect(tamago.restLevel).toEqual(5);
  });

  it('should need a nap if the rest level drops below zero', function(){
    tamago.restLevel = 0;
    expect(tamago.needsANap()).toEqual(true);
  });

  it('should have a rest level of 10 if it napped', function(){
    jasmine.clock().tick(9001);
    tamago.nap();
    expect(tamago.restLevel).toEqual(10);
  });

  it('should check the play Level of 7 after 6001 milliseconds', function(){
    jasmine.clock().tick(6001);
    expect(tamago.playLevel).toEqual(7);
  });

  it('should need to play if the play level drops below zero', function() {
    jasmine.clock().tick(20001);
    expect(tamago.needsToPlay()).toEqual(true);
  });

  it ('should have a play level of 10 if it plays', function(){
    jasmine.clock().tick(5001);
    tamago.play();
    expect(tamago.playLevel).toEqual(10);
  });

});
