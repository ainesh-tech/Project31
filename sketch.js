/*open Source code 
developed on 12/1/2021*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const Row1Y=200;
const Row2Y=140;
const Row3Y=80;
const Divheight=330;

//ground
var RealGround;
//diferrent divisions
var Div1,Div2,Div3,Div4,Div5;
var InvisDiv;
//first row of static circles
var static1,static2,static3,static4,static5,static6,static7,static8,static9;
//middle statics
var mid1,mid2,mid3,mid4,mid5,mid6,mid7,mid8,mid9;
//top statics
var top1,top2,top3,top4,top5,top6,top7,top8,top9;
//plinkos
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18;
function setup() {
  createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;
  //Bodies here
  
  Div1=new Divide(10,500,20,Divheight);
  Div2=new Divide(160,500,20,Divheight);
  Div3=new Divide(310,500,20,Divheight);
  Div4=new Divide(460,500,20,Divheight);
  Div5=new Divide(610,500,20,Divheight);
  InvisDiv=new Divide(700,500,20,Divheight);

  //static circles row bottom
  static1=new PliCircle(40,Row1Y);
  static2=new PliCircle(120,Row1Y);
  static3=new PliCircle(200,Row1Y);
  static4=new PliCircle(280,Row1Y);
  static5=new PliCircle(360,Row1Y);
  static6=new PliCircle(440,Row1Y);
  static7=new PliCircle(520,Row1Y);
  static8=new PliCircle(600,Row1Y);
  static9=new PliCircle(680,Row1Y);
  //static circles row mid
  mid1=new PliCircle(20,Row2Y);
  mid2=new PliCircle(100,Row2Y);
  mid3=new PliCircle(180,Row2Y);
  mid4=new PliCircle(260,Row2Y);
  mid5=new PliCircle(340,Row2Y);
  mid6=new PliCircle(420,Row2Y);
  mid7=new PliCircle(500,Row2Y);
  mid8=new PliCircle(580,Row2Y);
  mid9=new PliCircle(660,Row2Y);
  
  //static circles row bottom
  top1=new PliCircle(40,Row3Y);
  top2=new PliCircle(120,Row3Y);
  top3=new PliCircle(200,Row3Y);
  top4=new PliCircle(280,Row3Y);
  top5=new PliCircle(360,Row3Y);
  top6=new PliCircle(440,Row3Y);
  top7=new PliCircle(520,Row3Y);
  top8=new PliCircle(600,Row3Y);
  top9=new PliCircle(680,Row3Y);
  //Real Ground
  RealGround=new Ground(300,700,800,70);
  //Plinko
  plinko1=new Plinko(random(30,520),10);
  plinko2=new Plinko(random(30,520),10);
  plinko3=new Plinko(random(30,520),10);
  plinko4=new Plinko(random(30,520),10);
  plinko5=new Plinko(random(30,520),10);
  plinko6=new Plinko(random(30,520),10);
  plinko7=new Plinko(random(30,520),10);
  plinko8=new Plinko(random(30,520),10);
  plinko9=new Plinko(random(30,520),10);
  plinko10=new Plinko(random(30,520),20);
  plinko11=new Plinko(random(30,520),20);
  plinko12=new Plinko(random(30,520),20);
  plinko13=new Plinko(random(30,520),20);
  plinko14=new Plinko(random(30,520),20);
  plinko15=new Plinko(random(30,520),20);
  plinko16=new Plinko(random(30,520),20);
  plinko17=new Plinko(random(30,520),20);
  plinko18=new Plinko(random(30,520),20);
}

function draw() {
  background(0);  
  
  //diferrent divisions
  Div1.display();
  Div2.display();
  Div3.display();
  Div4.display();
  Div5.display();
//bottom row
  static1.display();
  static2.display();
  static3.display();
  static4.display();
  static5.display();
  static6.display();
  static7.display();
  static8.display(); 
  static9.display();
//mid row
  mid1.display();
  mid2.display();
  mid3.display();
  mid4.display();
  mid5.display();
  mid6.display();
  mid7.display();
  mid8.display();
  mid9.display();
//top row
  top1.display();
  top2.display();
  top3.display();
  top4.display();
  top5.display();
  top6.display();
  top7.display();
  top8.display(); 
  top9.display();
  //plinko
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  //Displayin The ground
  RealGround.display();
  Engine.update(engine);
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(plinko1.body,{x:random(30,520),y:10});
  }
}