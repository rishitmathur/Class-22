const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground
var ground2
function setup (){
var Canvas= createCanvas(400,400)
engine=Engine.create()
world=engine.world

var toy={
    restitution:1.2
}
ground=Bodies.circle(200,200,10,toy)
World.add(world,ground)
var tin={
isStatic:true
}
ground2=Bodies.rectangle(200,350,400,100,tin)
World.add(world,ground2)
}
function draw(){
    background("blue")
Engine.update(engine)
ellipseMode(RADIUS)
ellipse(ground.position.x,ground.position.y,10,10)

rectMode(CENTER)
rect(ground2.position.x,ground2.position.y,400,100)
}