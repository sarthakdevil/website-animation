addEventListener('MouseEvent',
function(event) {
  console.log('Hello')
})
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var circles = [];

function Circle(x, y, dx, dy, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
  ;
  };

  this.update = function() {
    this.x += this.dx;
    this.y += this.dy;

    // Reverse direction if circles hit the edges of the canvas
    if (this.x < 30 || this.x > canvas.width - 30) {
      this.dx = -this.dx;
    }
    if (this.y < 30 || this.y > canvas.height - 30) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

for (var i = 0; i < 120; i++) {
  var x = Math.random() * (canvas.width - 60) + 30;
  var y = Math.random() * (canvas.height - 60) + 30;
  var dx = (Math.random() - 0.5) * 5;
  var dy = (Math.random() - 0.5) * 5;
  var color = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';

  var circle = new Circle(x, y, dx, dy, color);
  circles.push(circle);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
  }
circles.globalAlpha=0.2;
  c.fillStyle = 'cyan';
  c.font='bold 50px comic-sans';
  c.fillText('Hackers_en_route', 600,350 );
  c.font='bold 25px comic-sans';
  c.fillText('follow for more', 600,400 );
}

animate();
