import {
  userByIdFinder,
  userCreator,
  userFinder,
} from "./infrastructure/dependencies/container";

userCreator.run({
  userId: "1",
  userName: "Adri",
});

userCreator.run({
  userId: "2",
  userName: "Joan",
});

userCreator.run({
  userId: "3",
  userName: "Selena",
});

const selena = userByIdFinder.run("3");
console.log("selena: ", selena);

const users = userFinder.run();
console.log("users: ", users);
