export default class Robot{
  constructor(){
    this.name = window.navigator.appName;
  }
  sayHello(){
    alert(`Hello ${this.name}!`);
  }
}
