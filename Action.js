import Matter from "matter-js";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Action {
  World = Matter.World;
  Bodies = Matter.Bodies;
  Engine = Matter.Engine;
  p5;
  setup(p5) {
    this.p5 = p5;
  }
  procentIn(n, p) {
    return (n / 100) * p;
  }
  procent(x) {
    let r = windowWidth + windowHeight;
    return this.procentIn(r, x);
  }
  procentX(x) {
    let r = windowWidth;
    return this.procentIn(r, x);
  }
  procentY(x) {
    let r = windowHeight;
    return this.procentIn(r, x);
  }
  procentInv(n, p) {
    return (p * 100) / n;
  }
}
