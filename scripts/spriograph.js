(function () {
  if (typeof Humble == "undefined") window.Humble = {};
  Humble.Trig = {};
  Humble.Trig.init = init;
  Humble.Trig.drawSpirograph = drawSpirograph;

  function init() {
    // Get drawing context
    var canvas = document.getElementById("spriograph");
    var context = canvas.getContext("2d");
    var slider = document.getElementById("range");
    slider.addEventListener("input", function (event) {
      drawCircle(canvas, context, slider.value * Math.PI * 2);
    });

    drawCircle(canvas, context, 0);

    // Draw spirograph
    drawSpirograph(context, canvas.width / 2, canvas.height / 2, 100, 20, 10);
  }

  function drawSpirograph(context, cx, cy, radius1, radius2, ratio) {
    var x, y, theta;

    // Move to starting point (theta = 0)
    context.beginPath();
    context.moveTo(cx + radius1 + radius2, cy);

    // Draw segments from theta = 0 to theta = 2PI
    for (theta = 0; theta <= Math.PI * 2; theta += 0.01) {
      x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
      y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
      context.lineTo(x, y);
    }

    // Apply stroke
    context.stroke();
  }

  function drawCircle(canvas, context, theta) {
    let cx = canvas.width / 2;
    let cy = canvas.height / 2 - canvas.height / 20;
    let radius1 = canvas.height * 0.25;
    let radius2 = canvas.height * 0.1;
    let ratio = 10;

    // Calculate x, y
    let x = cx + radius1 * Math.cos(theta);
    let y = cy + radius1 * Math.sin(theta);

    // Draw guides
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(cx, cy, radius1, 0, Math.PI * 2);
    context.lineWidth = canvas.height * 0.002;
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
    context.stroke();
    context.beginPath();
    context.arc(x, y, radius2, 0, Math.PI * 2);
    context.stroke();

    // Draw spirograph
    context.beginPath();
    context.moveTo(cx + radius1 + radius2, cy);
    for (i = 0; i <= theta; i += 0.01) {
      x = cx + radius1 * Math.cos(i) + radius2 * Math.cos(i * ratio);
      y = cy + radius1 * Math.sin(i) + radius2 * Math.sin(i * ratio);
      context.lineTo(x, y);
    }
    context.lineWidth = canvas.height * 0.004;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath();
    context.arc(x, y, canvas.height * 0.01, 0, Math.PI * 2);
    context.fill();
  }

  window.addEventListener("load", (_event) => {
    init();
  });

  
})();
