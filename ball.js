let ball = {
    x: 10,
    y: 10,
    xInc: 3,
    yInc: 3,
    scale: 1,
    img: document.getElementById("basketball"),
    rotation: 0,
    // Draw the ball
    draw: function() {
    context.drawImage(this.img, this.x, this.y);
    },
    // Move the ball
    move: function() {
    this.x += this.xInc;
    // Bounce of the left and right canvas edges
    if (this.x < 0 || this.x + this.img.width > canvas.width) {
    this.xInc *= -1;
    }}};
   let canvas = document.getElementById("myCanvas");
   let context = canvas.getContext("2d");
   // Draw ball at starting position
   context.save();
   ball.draw();
   context.restore();
   // Used to cancel animation
   let animFrameId;
   // Start the animation when the mouse is on the canvas
   canvas.addEventListener("mouseover", function(e) {
    animFrameId = window.requestAnimationFrame(drawFrame);
   });
   // Stop the animation when the mouse is moved off the canvas
   canvas.addEventListener("mouseout", function(e) {
    window.cancelAnimationFrame(animFrameId);
   });
   // Draw a single frame
   function drawFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    ball.draw();
    ball.move();
    context.restore();
    animFrameId = window.requestAnimationFrame(drawFrame);
   }