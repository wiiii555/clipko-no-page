let canvas = document.getElementById("tutorial");

// if (canvas.getContext) {
//   let ctx = canvas.getContext("2d");

//   ctx.fillRect(25, 25, 100, 100);
//   ctx.clearRect(45, 45, 60, 60);
//   ctx.strokeRect(50, 50, 50, 50);
// }


// if (canvas.getContext) {
//   let ctx = canvas.getContext('2d');

//   ctx.beginPath();
//   ctx.moveTo(75, 50);
//   ctx.lineTo(100, 75);
//   ctx.lineTo(100, 25);
//   ctx.closePath();
//   ctx.fill();
// }


// if (canvas.getContext){
//   let ctx = canvas.getContext('2d');

//   ctx.beginPath();
//   ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
//   ctx.moveTo(110, 75);
//   ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
//   ctx.moveTo(65, 65);
//   ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
//   ctx.moveTo(95, 65);
//   ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
//   ctx.stroke();

//   // 如果你想看到连续的线, 可以移除调用的moveTo()
// }



// if (canvas.getContext){
//   let ctx = canvas.getContext('2d');

//   // 填充三角形
//   ctx.beginPath();
//   ctx.moveTo(25, 25);
//   ctx.lineTo(105, 25);
//   ctx.lineTo(25, 105);
//   ctx.fill();

//   // 描边三角形
//   ctx.beginPath();
//   ctx.moveTo(125, 125);
//   ctx.lineTo(125, 45);
//   ctx.lineTo(45, 125);
//   ctx.closePath();
//   ctx.stroke();
// }



// if (canvas.getContext){
//   let ctx = canvas.getContext('2d');

//   for(let i = 0; i < 4; i++){
//     for(let j = 0; j < 3; j++){
//       ctx.beginPath();
//       let x = 25 + j * 50; // x 坐标值
//       let y = 25 + i * 50; // y 坐标值
//       let radius = 20; // 圆弧半径
//       let startAngle = 0; // 开始点
//       let endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
//       let anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

//       ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

//       if (i>1){
//         ctx.fill();
//       } else {
//         ctx.stroke();
//       }
//     }
//   }
// }


// if (canvas.getContext) {
//   let ctx = canvas.getContext('2d');

//   // 二次贝塞尔曲线
//   ctx.beginPath();
//   ctx.moveTo(75, 25);
//   ctx.quadraticCurveTo(25, 25, 25, 62.5);
//   ctx.quadraticCurveTo(25, 100, 50, 100);
//   ctx.quadraticCurveTo(50, 120, 30, 125);
//   ctx.quadraticCurveTo(60, 120, 65, 100);
//   ctx.quadraticCurveTo(125, 100, 125, 62.5);
//   ctx.quadraticCurveTo(125, 25, 75, 25);
//   ctx.stroke();
// }


if (canvas.getContext){
  var ctx = canvas.getContext('2d');

   //三次贝塞尔曲线
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
}