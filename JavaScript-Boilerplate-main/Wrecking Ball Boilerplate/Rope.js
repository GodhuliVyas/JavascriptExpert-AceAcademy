class Rope {
  constructor(bodyA , pointB){      //bodyA is body of ball
                                    //point B is the point of thread
    var options = {                 //point B and bodyA have to get attached i.e. ball+rope
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 250,
    }

    this.pointB = pointB;
    this.rope = Constraint.create(options)
    World.add(world, this.rope);
  }
  attach(body) {
    this.rope.bodyA = body  //here body of ball needs to be shown after refreshing the page
  }

  fly() {
    this.rope.bodyA = null;   //the body been thrown has to be hidden i.e. null 
  }

  display() {
    if(this.rope.bodyA){    //if body is attached execute
      var pointA = this.rope.bodyA.position;            //position of bodyA
      var pointB = this.pointB;
  
      push();
      stroke("brown");
      strokeWeight(3);
      line(pointB.x, pointB.y,          pointA.x, pointA.y);   
          //x y coordinate of rope       x y coordinate of ball
      pop();
      
     }
    }
  }
