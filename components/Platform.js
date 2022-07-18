import Body from "../Body";
export default class Platform extends Body{
    constructor(props){
        super(props);
    }

    

    frames = [
        require(`../assets/player/rightRest/1.png`),
        require(`../assets/player/rightRest/2.png`),
        require(`../assets/player/rightRest/3.png`),
        require(`../assets/player/rightRest/4.png`),
        require(`../assets/player/rightRest/5.png`)
    ]

    sprite = {
        name: "monster",
        animationTypes: ['IDLE', 'WALK', 'EAT', 'CELEBRATE', 'DISGUST', 'ALL'],
        frames:this.frames,
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
      }
}