class Paper{

    constructor(x,y,r){
  
var options={
    isStatic:false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
}
//this.image=loadImage("paper.png");
this.radius=10;
        this.x=x;
        this.y=y;
        this.body=Matter.Bodies.circle(this.x,this.y,10,options)
        
        World.add(world,this.body);
    }
display(){
    
    var pos=this.body.position;
      push()
      translate(pos.x,pos.y);
   ellipseMode(CENTER);
    strokeWeight(4)
    stroke("pink");
    ellipse(0,0,this.radius);
    pop()
}


}