class Pineapple {
  private static stepOne() {
    return '1.Get a pineapple 🍍.\n';
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
    const stepOne = Pineapple.stepOne();
    const stepTwo = Pineapple.stepTwo();
    const stepThree = Pineapple.stepThree();
    const stepFour = Pineapple.stepFour();
    console.log(`Recipe of obtaining the perfect pineapple:\n${stepOne}${stepTwo}${stepThree}${stepFour}`);
  }
}

const pineapple = new Pineapple();

pineapple.perfectRecipe();
