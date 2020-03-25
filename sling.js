class Sling{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 100
        }

        this.bodyB = bodyB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //attach(body){
  //      this.sling.bodyA = body;
//    }
    
  //  fly(){
      //  this.sling.bodyA = null;
    //}

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(5);
                line(pointA.x, pointA.y, pointB.x, pointB.y);

            }
            else{
                strokeWeight(5);
                line(pointA.x, pointA.y, pointB.x, pointB.y);

            }
           
            
            pop();
        }
    }
    
}