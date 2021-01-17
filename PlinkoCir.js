class PliCircle{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:1,
            friction:0
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
        fill("red")
       ellipse(0,0,this.r,this.r);
       pop();
    }
}