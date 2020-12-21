class Dustbin{
    constructor(){
var options={
    isStatic:true
}
this.bodyc = Bodies.rectangle(width/2,670,800,20,options)
World.add(world,this.bodyc)
    }
    display(){
        rectMode(CENTER)
        rect(this.bodyc.position.x,this.bodyc.position.y,800,20)
    }
}