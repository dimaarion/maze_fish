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
    
    let arrSpr = [
        require(`./assets/player/rightRest/1.png`),
        require(`./assets/player/rightRest/2.png`),
        require(`./assets/player/rightRest/3.png`),
        require(`./assets/player/rightRest/4.png`),
        require(`./assets/player/rightRest/5.png`)
      ]
      const monsterSprite = {
        name: "monster",
        animationTypes: ['IDLE', 'WALK', 'EAT', 'CELEBRATE', 'DISGUST', 'ALL'],
        frames:arrSpr,
        animationIndex: function getAnimationIndex(animationType) {
          switch (animationType) {
            case 'IDLE':
              return [0, 1];
            case 'WALK':
              return [0, 1, 2,3,4];
            case 'EAT':
              return [0];
            case 'CELEBRATE':
              return [0];
            case 'DISGUST':
              return [0];
            case 'ALL':
              return [0];
          }
        },
      };
    return  {
        physics: { engine: engine, world: world },
        platform: {body: platform.body,color:"blue",src:()=>arrSpr,sprait:platform.sprite,options:{},renderer: <Block/> },
        player: {body: player.body,color:"red",src:()=>require(`./assets/money.png`),cols:10,anims:[{name:"run",row:1,frames:10}],renderer: <Sprite/> },
};

}