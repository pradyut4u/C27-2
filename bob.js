class Bob {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':0.2,
          'density':10.0
      }
      this.body = Bodies.circle(x, y,50,options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
   //   pos.x=mouseX;
   //   pos.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      ellipse(0, 0,50,50);
      pop();
    }
  };