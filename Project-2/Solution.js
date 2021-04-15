//Constructor
function Point(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
    this.calcDistance = function(otherPoint){
        //Calculates the distance between two points and round to second decimal place
        distance = Math.sqrt((((this.x - otherPoint.x)**2)+((this.y - otherPoint.y)**2)
        +((this.z - otherPoint.z)**2)));
        return distance;
     
    }
}
     
    //Creates two new points
    p1 = new Point(1,2,3);
    p2 = new Point(4,5,6);
     
    //Prints distance
    console.log("this distance between the points is " + p2.calcDistance(p1));
