class dot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.dot = Constraint.create(options);
        World.add(world, this.dot);
    }

    fly(){
        this.dot.bodyA = null;
    }
    display(){
        if(this.dot.bodyA){
        var pointA = this.dot.bodyA.position;
        var pointB = this.pointB;
        push();
        fill("red");
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    
}