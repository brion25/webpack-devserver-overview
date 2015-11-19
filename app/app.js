import Robot from './Robot';

var robot = new Robot(),
    btn = document.querySelector('#btnSayHello');

btn.onclick = () => {
  robot.sayHello();
}
