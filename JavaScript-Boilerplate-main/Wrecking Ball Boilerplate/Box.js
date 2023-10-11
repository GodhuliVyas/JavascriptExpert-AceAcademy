class Box {
    constructor(x,y,width,height){
      var options = {
        "restitution": 0.8,
        "friction" :1.0,
        "density": 0.04
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      World.add(world, this.body)
      
    }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push(); //push the setting of translate , add the new box
    translate(pos.x , pos.y); //marks the origin of the shape on the canvas to be drawn 
    rotate(angle);
    rectMode(CENTER);   //origin is center of the box and it will start drawing from here
    strokeWeight(4);  //thickness of border
    stroke("green");  //color of border
    fill("yellow"); //color of box
    rect(0, 0, this.width, this.height );
    pop();  //pop the setting of translate again to initial
  }
}