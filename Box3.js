class Box3{
    constructor(x,y,width,height){
  var options = {
     isStatic:true
 }
 this .body = Bodies.rectangle(x,y,width,height,options);
 
	 World.add(world, this.body);
}
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill(225,0,0);
       rect(pos.x,pos.y,20,100);
       
      
   }

} 