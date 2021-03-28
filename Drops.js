class createDrop{
    constructor(x,y,r){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }

        this.x=x
		this.y=y
		this.r=5

        this.rain = Bodies.circle(x,y,this.r/2,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    Position(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}