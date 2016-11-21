
var clip, clipx, clock, d, v;
var count = 0;

function preload () {
var json = "videos.json";
loadJSON(json,getclip);
console.log(json);
print(clip);
}

function setup(){
  createCanvas(640,380);
  clock = millis ();
  d = clipx[count].duration * 1000;  
  console.log ("duration equals " + d);
  v = createVideo([clipx[count].local]);
  v.hide();
}

function draw () {
  
if (millis() - clock > d) {
  v = createVideo([clipx[count].local]);
  v.play();
  v.hide();
  clock = millis (); 
  count ++
  }
image(v,10,10);

  
if (count >= clipx.length) {
  count = 0
}

}

function getclip(video) {
  clipx = video.clips;
  console.log(clipx);
  console.log(clipx.length);
}
