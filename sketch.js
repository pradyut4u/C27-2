const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob,sling,holder
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var options={
isStatic:true
    }
    holder =Bodies.rectangle(180,50,150,20,options)
    World.add(world,holder)
    bob = new Bob(200,360);
    sling = new Sling(bob.body,holder);
}
function draw(){
    background(99,111,201)
    Engine.update(engine);
    bob.display()
    sling.display()
    rectMode(CENTER)
    rect(holder.position.x,holder.position.y,150,20)
if(keyCode===32){
    bob.body.position.x=mouseX
    bob.body.position.y=mouseY
}
if(keyCode===ENTER){
    bob.body.position.x=200
}
}

/*function mouseDragged(){
    Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}*/