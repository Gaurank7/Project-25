class paper{
   constructor(x , y , radi){
      var options={
         isStatic:false,
        'restitution':0.3,
        'friction':0,
        'density':1.2
     }
this.width = width
this.height = height
this.image = loadImage("paper.png")
this.body = Bodies.circle(this.x,this.y,(this.radi-20/2),options);
World.add(world, this.body)
}
display(){
var pos = this.body.position;
var angle = this.body.angle
push();
translate(this.body.position.x, this.body.position.y);
rectMode(CENTER)
fill("white")
rotate()
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();
 }
}