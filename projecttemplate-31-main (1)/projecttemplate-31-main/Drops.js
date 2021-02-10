class createDrops{
    constructor(x, y, radius) {
        var options = {
          isStatic:false,
            'restitution':0.5,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius=5;
        World.add(world, this.body);
      }

      update(){  
        if(this.body.position.y> height){
          Matter.body.setPosition(this.body, {x:random(0,310), y:random(0,600)})
      }

    }
      display(){
        fill("blue");
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
      }
}