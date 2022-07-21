import Action from "./Action";
import scena from "./assets/scena.json";
export default class Scena extends Action {
  setup() {
    // console.log(this.properties("platform", 1));
  }

  scenaWidth() {
    return scena.width * scena.tilewidth;
  }

  scenaHeight() {
    return scena.height * scena.tileheight;
  }

  scenaObject(name) {
    return Array.from(scena.layers).filter((x)=>x.name === name)
     
  }

  objects(name) {
    return Array.from(this.scenaObject(name)).map((x)=>x.objects);
  }

  scenaObjectX(name, i) {
    return this.objects(name).map((x) => x.x)[i];
  }
  scenaObjectY(name, i) {
    return this.objects(name).map((x) => x.y)[i];
  }
  scenaObjectW(name, i) {
    return this.objects(name).map((x) => x.width)[i];
  }
  scenaObjectH(name, i) {
    return this.objects(name).map((x) => x.height)[i];
  }
  objPosition(name, i) {
    return { x: this.scenaObjectX(name, i), y: this.scenaObjectY(name, i) };
  }
  objSize(name, i) {
    return {
      width: this.scenaObjectW(name, i),
      height: this.scenaObjectH(name, i)
    };
  }
  properties(name, i) {
    return this.objects(name).map((x) => x.properties)[i];
  }

  layers(){
    return scena.layers?scena.layers:[];
  }

  tileSize(){
    return {width:scena.tilewidth,height:scena.tileheight}
  }

  
}
