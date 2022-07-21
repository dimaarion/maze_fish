import Body from "../Body";
export default class Player extends Body{
   
    constructor(props){
        super(props);
       
    }
    options = {
      frameImg:5,
      colums:6,
      play:true,
      loop:true,
      fps:10
    }

    src = ()=>require("../assets/player/rightRest/rightRest.png");
}