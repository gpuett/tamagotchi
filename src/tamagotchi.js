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

  feed() {
    this.foodLevel = 10;
  }

  setRest() {
    setInterval(() => {
      this.restLevel--;
    } , 5000);
  }


}

export { Tamagotchi };
