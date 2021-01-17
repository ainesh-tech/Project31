class Plinko{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.4,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.plicircle=Bodies.circle(x,y,this.r,options);
        World.add(world,this.plicircle);
    }
    display(){
        var pos=this.plicircle.position;
        var angle=this.plicircle.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        noStroke();
        fill("lightblue")
        ellipse(0,0,this.r,this.r);
        pop();
    }
}