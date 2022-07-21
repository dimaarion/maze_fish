import Test  from "./Test"
import Matter from 'matter-js';
import Player from "./components/Player";
import Platform from "./components/Platform";
import Block from "./Block";
import Sprite from "./Sprite";
export default function Game(){
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    let platform = new Platform("platform");
    platform.createRect(world);
    platform.isStatic(true);
    let player = new Player("player");
    player.createRect(world)
    
 
    return  {
        physics: { engine: engine, world: world },
        platform: {body: platform.body,color:"blue",src:()=>arrSpr,sprait:platform.sprite,options:{},renderer: <Block/> },
        player: {component:player,renderer: <Sprite/> },
};

}