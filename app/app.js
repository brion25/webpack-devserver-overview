import __styles from './app.scss';
import Robot from './robot/Robot.js';

var robot = new Robot('Brionator'),
    btn = document.querySelector('#btnSayHello');

btn.onclick = () => {
  alert(robot.sayHello());
}
