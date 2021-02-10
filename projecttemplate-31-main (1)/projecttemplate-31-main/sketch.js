const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var drops = [];
var maxDrops= 100;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(310,600);
    engine = Engine.create();
    world = engine.world;

    for(var i=0; i< maxDrops; i++){
        drops.push(new createDrops(random(0,310), random(0,310)))
    }
}

function draw(){
    Engine.update(engine);
    background("black");

    for(var i = 0; i< maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
drawSprites();
}  