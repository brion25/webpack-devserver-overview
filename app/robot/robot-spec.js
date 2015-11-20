import {expect} from 'chai';
import Robot from './Robot.js';

describe("Robot",()=>{
  let robot = null;

  beforeEach(()=>{
    robot = new Robot('Brionator');
  })

  it("should say hello",()=>{
    let msg = robot.sayHello();
    expect(msg).to.equal('Hello Brionator!');
  })
});
