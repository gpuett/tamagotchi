class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.restLevel = 10;
    this.playLevel = 10;
  }

  setReset() {
    this.foodLevel = 10;
    this.restLevel = 10;
    this.playLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    } , 1000);
  }

  isItDead() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  needsANap() {
    if (this.restLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  setRest() {
    setInterval(() => {
      this.restLevel--;
    } , 5000);
  }

  nap() {
    this.restLevel = 10;
  }

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    } , 2000);
  }

  play() {
    this.playLevel = 10;
  }

  needsToPlay(){
    if (this.playLevel > 0){
      return false;
    } else {
      alert(`${this.name} needs to play!`)
      return true;
    }
  }
}

export { Tamagotchi };
