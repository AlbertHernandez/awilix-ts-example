import {
  babyByIdFinder,
  babyCreator,
  babyFinder,
} from "./modules/dependencies/container";

babyCreator.run({
  userId: "1",
  userName: "Adri",
});

babyCreator.run({
  userId: "2",
  userName: "Joan",
});

babyCreator.run({
  userId: "3",
  userName: "Selena",
});

const selena = babyByIdFinder.run("3");
console.log("selena: ", selena);

const babies = babyFinder.run();
console.log("babies: ", babies);
