import Matter from 'matter-js';
const MoveFinger = (entities, { touches, time, events, world }) => {
    let engine = entities.physics.engine;
   
    Matter.Engine.update(engine, time.delte)
    return entities;
  };
  
  export { MoveFinger };