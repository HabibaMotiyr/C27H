class Slingshot {
    constructor(bodyA,bodyB){
     var options={
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness: 0.05,
          length:15
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        
    }
    display(){
     var pointA= this.sling.bodyA.position
     var pointB= this.sling.bodyB.position
     push();
     strokeWeight(5)
     line(pointA.x, pointA.y, pointB.x, pointB.y);
     pop();
     

    }
}