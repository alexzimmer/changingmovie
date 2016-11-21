var interval = 4000;
var clock = 0;
var count = 1;
var v = "v";
var clipx = null;
var cc;

function setup () {

// v2 = createVideo(['/2.mov',]);
// v3 = createVideo(['/3.mov',]);  
//set timer
// clock = millis();
var json = "videos.json";
//load video json
loadJSON(json, getclip);
//cc = clipx[0];
//v1 = createVideo([cc]);
console.log(json);
}

function draw () {
// if (millis() - clock > interval){
//   // (v+count).play();
//   count++;
//   clock = millis(); 
// }

// if (count >= 3) {
//     count = 1;
//   }
}

function getclip(video) {
  clipx = video.clips;
  console.log(clipx);
  console.log(clipx.length);
}