rectangle = function(height, width, displacement){
    let rectangleShape = "";
    for (h=0;h<height;h++) {
        let line = "\n";
        let offset = "";
        for (o=0;o<displacement;o++){
            offset += " ";
        }
        line += offset;
        for (w=0; w<width; w++){
            line += "*";
        }
        rectangleShape += line;
    }
    console.log(rectangleShape);
}
triangle = function(height, displacement){
    let triangleShape = "";
    for (h=0;h<height;h++){
        let line = "\n";
        let offset = " ";
        for (o=0;o<displacement;o++){
            offset += " ";
        }
        line += offset;
        for (w=0; w<=h; w++){
            line += "*";
        }
        triangleShape += line;
    }
    console.log(triangleShape);
}
let shape = function(type, height, width, displacement){
    if (type == "rectangle") {
        return rectangle(height, width, displacement);
    }
    if (type == "triangle"){
        return triangle(height, displacement);
    }
}

let rectangle10 = function(height, width){
    r = (rectangle(height, width, 10));
    return r;
}
rectangle10(4, 3);
rectangle10(6, 5);

let rectangle20 = function(height, width){
    r = rectangle(height, width, 20);
    return r;
}
rectangle20(3, 6);
rectangle20(7, 2);

let triangle10 = function(height){
    r = triangle(height, 10);
    return r;
}
triangle10(8);
triangle10(3);

let triangle20 = function(height){
    r = triangle(height, 20);
    return r;
}
triangle20(4);
triangle20(6);
