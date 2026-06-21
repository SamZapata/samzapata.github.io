// const flows = [
//   {
//     selector: '.pulse-top',
//     path: [
//       { x: 300, y: 140 },
//       { x: 300, y: 240 }
//     ]
//   },
//   {
//     selector: '.pulse-left',
//     path: [
//       { x: 180, y: 250 },
//       { x: 280, y: 250 }
//     ]
//   },
//   {
//     selector: '.pulse-right',
//     path: [
//       { x: 320, y: 250 },
//       { x: 420, y: 250 }
//     ]
//   },
//   {
//     selector: '.pulse-bottom',
//     path: [
//       { x: 300, y: 260 },
//       { x: 300, y: 360 }
//     ]
//   }
// ];

// function animateFlow(flow, speed = 3000) {

//   const dot = document.querySelector(flow.selector);

//   let start = null;

//   function step(timestamp) {

//     if (!start) start = timestamp;

//     const progress =
//       ((timestamp - start) % speed) / speed;

//     const x =
//       flow.path[0].x +
//       (flow.path[1].x - flow.path[0].x) *
//       progress;

//     const y =
//       flow.path[0].y +
//       (flow.path[1].y - flow.path[0].y) *
//       progress;

//     dot.setAttribute("cx", x);
//     dot.setAttribute("cy", y);

//     requestAnimationFrame(step);

//   }

//   requestAnimationFrame(step);

// }

// flows.forEach(flow => animateFlow(flow));


