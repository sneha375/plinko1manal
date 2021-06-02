const Engine = Matter.Engine;
  const World = Matter.World;
  
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(550, 700);
  engine = Engine.create();
  world = engine.world;
  ground1= new Ground(350,670,1200,20);

//division1=new Division(10,530,20,260);
 //division2=new Division(120,530,20,260);
 //division3=new Division(220,530,20,260);
 //division4=new Division(320,530,20,260);
// division5=new Division(420,530,20,260);
 //division6=new Division(520,530,20,260);
   for (var k = 0; k <=width; k = k + 90) {
     divisions.push(new Divisions(k, height-divisionHeight/1.8, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-10; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j =15; j <=width; j=j+75) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

   
    

    
}
 


function draw() {
  background("lightblue");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground1.display();
  // division1.display(); 
 // division2.display(); 
  //division3.display();
  //division4.display();
 // division5.display();
  //division6.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}