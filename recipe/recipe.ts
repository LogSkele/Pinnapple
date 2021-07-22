class Pinnaple {
  private static stepOne() {
    return '1.Get a pinnapple 🍍.\n';
  }

  private static stepTwo() {
    return '2.Slice it up.\n';
  }

  private static stepThree() {
    return '3.Done.\n';
  }

  private static stepFour() {
    return '4.Eat it!\n';
  }

  perfectRecipe() {
    const stepOne = Pinnaple.stepOne();
    const stepTwo = Pinnaple.stepTwo();
    const stepThree = Pinnaple.stepThree();
    const stepFour = Pinnaple.stepFour();
    console.log(`Recipe of obtaining the perfect pinnapple:\n${stepOne}${stepTwo}${stepThree}${stepFour}`);
  }
}

const pinnaple = new Pinnaple();

pinnaple.perfectRecipe();
