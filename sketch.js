function setup() {
  var canvas1 = createCanvas(windowWidth, windowHeight);
  canvas1.position(0, 0);

  canvas1.parent("#canvas1");

  colorMode(HSB, 360, 100, 100, 100);

  noLoop();
}

var mouseOn = document.getElementById("mouse_on");
var mouseOff = document.getElementById("mouse_off");

mouseOff.style.display = "none";

function mouseTurnOn() {
  if ((mouseOff.style.display = "none")) {
    mouseOn.style.display = "none";
    mouseOff.style.display = "block";
    loop();
  }
}

function mouseTurnOff() {
  if ((mouseOff.style.display = "block")) {
    mouseOn.style.display = "block";
    mouseOff.style.display = "none";
    clear();
    noLoop();
  } else {
    mouseOff.style.display = "block";
    loop();
  }
}

function draw() {
  noStroke();

  drawingContext.shadowBlur = 1000;
  drawingContext.shadowColor = (207, 7, 99);

  ellipse(mouseX, mouseY, 33, 33);

  fill(255, 255, 100, 4);
  // for (i = 0; i < 100; i++) {
  //   ellipse(200, 200, i * 3);
  // }

  blendMode(OVERLAY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// var s1 = function (sketch) {
//   sketch.setup = function () {
//     var canvas1 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
//     canvas1.position(0, 0);

//     canvas1.parent("#canvas1");
//   };

//   var mouseOn = sketch.documnet.getElementById("mouse_on");
//   var mouseOff = sketch.documnet.getElementById("mouse_off");

//   sketch.mouseTurnOn = function () {
//     if (mouseOn.style.display === block && mouseOff.style.display === none) {
//       alert();
//     }
//   };

//   sketch.draw = function () {
//     sketch.ellipse(sketch.mouseX, sketch.mouseY, 33, 33);
//     sketch.stroke(0);
//     sketch.fill(150, 0, 0, 63);

//     sketch.blendMode(sketch.MULTIPLY);
//   };

//   sketch.windowResized = function () {
//     sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
//   };
// };

// new p5(s1);

// var s1 = function (sketch) {
//   sketch.setup = function () {
//     var canvas1 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
//     canvas1.position(0, 0);

//     canvas1.parent("#canvas1");
//     img1 = sketch.loadImage("assets/hands.png");
//   };

//   sketch.draw = function () {
//     sketch.background(0);

//     var scale = 1;
//     sketch.imageMode(sketch.CENTER);

//     sketch.image(
//       img1,
//       0.5 * sketch.width,
//       0.6 * sketch.height,
//       scale * sketch.width,
//       (scale * img1.height * sketch.width) / img1.width
//     );

//     tint(255, 127);

//     // sketch.blendMode(sketch.OVERLAY);
//   };

//   sketch.windowResized = function () {
//     sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
//   };
// };

// new p5(s1);

// var s2 = function (sketch) {
//   sketch.setup = function () {
//     var canvas2 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
//     canvas2.position(0, 0);

//     // sketch.stroke(227, 11, 0);
//     sketch.noFill();

//     canvas2.parent("#canvas2");
//   };

//   sketch.draw = function () {
//     sketch.ellipse(sketch.mouseX, sketch.mouseY, 40, 50);

//     // sketch.blendMode(sketch.MULTIPLY);

//     sketch.fill(20, 0, 0, 0);
//   };

//   sketch.windowResized = function () {
//     sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
//   };
// };

// new p5(s2);

// function preload() {
//   img1 = loadImage("assets/hands.png");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function mouseDragged() {}

// function draw() {
//   background(0);
//   var scale = 1;
//   imageMode(CENTER);

//   image(
//     img1,
//     0.5 * width,
//     0.7 * height,
//     scale * width,
//     (scale * img1.height * width) / img1.width
//   );
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
