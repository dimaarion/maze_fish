import AnimatedSprite from 'react-native-animated-sprite';
export default class Animater{
    render() {
        return (
        
            <AnimatedSprite
              ref={'monsterRef'}
              sprite={this.props.monsterSprite}
              animationFrameIndex={this.props.monsterSprite.animationIndex(this.state.animationType)}
              loopAnimation={false}
              coordinates={{
                top: 100,
                left: 100,
              }}
              size={{
                width: monsterSprite.size.width * 1.65,
                height: monsterSprite.size.height * 1.65,
              }}
              draggable={true}
             
             
            />
           
         
        );
      }
    }
    
