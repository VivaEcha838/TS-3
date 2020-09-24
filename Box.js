class Box{
    constructor(x, y, width, height,) {
      var options = {
        isStatic: false,
    
           'restitution':0.8,
            'friction':0.4,
            'density':0.2
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.Visiblity = 255;
        World.add(world, this.body);
      }
       score(){
        if(this.Visiblity<0 && this.Visiblity > -105){
        score++
        }
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed < 3){
          push();
        
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill("green")
          rect(0, 0, this.width, this.height);
          
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           rect(0,0,this.width,this.height);
           pop();
         }
        }
      }
         
         
           
         
      
    
  
