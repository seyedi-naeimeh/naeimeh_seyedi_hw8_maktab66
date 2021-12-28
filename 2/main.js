function Circle(radius) {
  this.radius = radius;
  this.getArea = () => Math.PI * Math.pow(this.radius, 2);
  this.getPerimeter = () => 2 * Math.PI * this.radius;
}

let circy = new Circle(11);
console.log(circy.getArea());

let circ = new Circle(4.44);
console.log(circ.getPerimeter());
