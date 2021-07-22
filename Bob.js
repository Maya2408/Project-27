class Bob{
    constructor(){
     var options ={
         isStatic: false,
         restitution: 0.3,
         friction:0.5,
         density:1.2
      }
      Matter.Bodies.circle(56, 46, 55, 55);
    }
}