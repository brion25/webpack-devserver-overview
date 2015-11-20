export default class Robot{
  constructor(name){
    this.name = name;
  }
  
  sayHello() {
    return `Hello ${this.name}!`;
  }
}
