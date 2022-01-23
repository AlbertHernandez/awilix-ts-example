export class User {
  readonly userName;
  readonly age;
  readonly userId;

  constructor(dependencies: { userId: string; userName: string; age: number }) {
    this.userId = dependencies.userId;
    this.userName = dependencies.userName;
    this.age = dependencies.age;
  }
}
