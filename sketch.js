var clipx, v, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20;
var nextcount = 0;
var currentvid;
var page = 0;
var wsjFont, nytFont, econoFont, guardianFont;
var clock;
var interval = 3000;

function preload() {
  var json = "videos.json";
  loadJSON(json, getclip);
  console.log(json);
  
  var nyt = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=media&begin_date=20161013&end_date=20161014&api-key=c4c69bb3c0f64e7b86b37508d485c15e";
  var wsj = "https://newsapi.org/v1/articles?source=the-wall-street-journal&&sortBy=top&apiKey=c39ce4fdbee744aebb2f418ff1d6417b";
  var econo = "https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=c39ce4fdbee744aebb2f418ff1d6417b";
  var guardian = "https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=c39ce4fdbee744aebb2f418ff1d6417b";
  loadJSON(nyt, showHeadlines);
  loadJSON(wsj, showWSJtitles);
  loadJSON(econo, showEconoTitles);
  loadJSON(guardian, showGuardianTitles);
  nytFont = loadFont('fonts/Olde English Regular.ttf');
  wsjFont = loadFont('fonts/OldStandard-Bold.otf');
  econoFont = loadFont('fonts/Swift-Regular.ttf');
  guardianFont = loadFont('fonts/Tinos-Bold.ttf');
  }

function setup() {
  createCanvas(1280, 720);
  count = int(random(0,3));
  count2 = int(random(4,7));
  count3 = int(random(8,10));
  count4 = int(random(11,14));
  count5 = int(random(15,17));
  count6 = int(random(18,20));
  count7 = int(random(21,23));
  count8 = int(random(24,26));
  count9 = int(random(27,29));
  count10 = int(random(30,32));
  count11 = int(random(33,35));
  count12 = int(random(36,38));
  count13 = int(random(39,41));
  count14 = int(random(42,45));
  count15 = int(random(45,46));
  count16 = int(random(47,49));
  count17 = int(random(50,52));
  count18 = int(random(53,55));
  count19 = int(random(56,59));
  count20 = int(random(60));
  
  clock = millis();

  console.log ([clipx[count].clipname] + " -- " + [clipx[count2].clipname] + " -- " + [clipx[count3].clipname] + " -- " + [clipx[count4].clipname] + " -- " + [clipx[count5].clipname] + 
  " -- " + [clipx[count6].clipname] + " -- " + [clipx[count7].clipname] + " -- " + [clipx[count8].clipname] + " -- " + [clipx[count9].clipname] + 
  " -- " + [clipx[count10].clipname] + " -- " + [clipx[count11].clipname] + " -- " + [clipx[count12].clipname] + " -- " + [clipx[count13].clipname] + 
  " -- " + [clipx[count14].clipname] + " -- " + [clipx[count15].clipname] + " -- " + [clipx[count16].clipname] + " -- " + [clipx[count17].clipname] + 
  " -- " + [clipx[count18].clipname] + " -- " + [clipx[count19].clipname] + " -- " + [clipx[count20].clipname] + " the end");
  
  v = createVideo([clipx[count].local]);
  v.hide();
  v.onended(function () {nextclip(v2)});
  
  v2 = createVideo([clipx[count2].local]);
  v2.hide();
  v2.onended(function () {nextclip(v3)});
  
  v3 = createVideo([clipx[count3].local]);
  v3.hide();
  v3.onended(function () {nextclip(v4)});
  
  v4 = createVideo([clipx[count4].local]);
  v4.hide();
  v4.onended(function () {nextclip(v5)});
  
  v5 = createVideo([clipx[count5].local]);
  v5.hide();
  v5.onended(function () {nextclip(v6)});
  
  v6 = createVideo([clipx[count6].local]);
  v6.hide();
  v6.onended(function () {nextclip(v7)});
  
  v7 = createVideo([clipx[count7].local]);
  v7.hide();
  v7.onended(function () {nextclip(v8)});
  
  v8 = createVideo([clipx[count8].local]);
  v8.hide();
  v8.onended(function () {nextclip(v9)});
  
  v9 = createVideo([clipx[count9].local]);
  v9.hide();
  v9.onended(function () {nextclip(v10)});
  
  v10 = createVideo([clipx[count10].local]);
  v10.hide();
  v10.onended(function () {nextclip(v11)});
  
  v11 = createVideo([clipx[count11].local]);
  v11.hide();
  v11.onended(function () {nextclip(v12)});
  
  v12 = createVideo([clipx[count12].local]);
  v12.hide();
  v12.onended(function () {nextclip(v13)});
  
  v13 = createVideo([clipx[count13].local]);
  v13.hide();
  v13.onended(function () {nextclip(v14)});
  
  v14 = createVideo([clipx[count14].local]);
  v14.hide();
  v14.onended(function () {nextclip(v15)});
  
  v15 = createVideo([clipx[count15].local]);
  v15.hide();
  v15.onended(function () {nextclip(v16)});
  
  v16 = createVideo([clipx[count16].local]);
  v16.hide();
  v16.onended(function () {nextclip(v17)});
  
  v17 = createVideo([clipx[count17].local]);
  v17.hide();
  v17.onended(function () {nextclip(v18)});
  
  v18 = createVideo([clipx[count18].local]);
  v18.hide();
  v18.onended(function () {nextclip(v19)});
  
  v19 = createVideo([clipx[count19].local]);
  v19.hide();
  v19.onended(function () {nextclip(v20)});
  
  v20 = createVideo([clipx[count20].local]);
  v20.hide();
  
  currentvid = v;
  v.play();
}

function draw() {
image(currentvid, 0, 0); 
if (nextcount >= 9){
    nextcount = 0;  
}

drawheadlineNYT(nextcount, 4, 2.4);
drawheadlineWSJ(nextcount, 4, 4);
drawheadlineEcono(nextcount, 4, 3);
drawheadlineGuardian(nextcount, 4, 2);

if (millis() - clock > interval) {
nextcount = nextcount + 1;
clock = millis();
  }
}

function nextclip(vid) {
  
  vid.play();
  currentvid = vid;
  
}

function showHeadlines(data) {
  nytdata = data.response.docs;
  console.log(nytdata.length);
}

function showWSJtitles(data) {
  wsjdata = data.articles;
  console.log(wsjdata.length);
}

function showEconoTitles(data) {
  econodata = data.articles;
  console.log(econodata.length);
}

function showGuardianTitles(data) {
  guardiandata = data.articles;
  console.log(guardiandata.length);
}

function getclip(video) {
  clipx = video.clips;
  console.log(clipx);
  console.log(clipx.length);
}

function drawheadlineNYT(nextcount, positionX, positionY) {
  noStroke();
  headline = (nytdata[nextcount].headline.main);
  fill(255,255,255);
  textSize(20);
  textAlign(CENTER);
  textFont(nytFont);
  text(headline, width - width / positionX , height - height / positionY);
  text(" - The New York Times", width - width / positionX + 50 , height - height / positionY + 20);
}

function drawheadlineWSJ(nextcount, positionX, positionY) {
  noStroke();
  headline = (wsjdata[nextcount].title);
  fill(255,255,255);
  textSize(15);
  textAlign(CENTER);
  textFont(wsjFont);
  text(headline, width - width / positionX , height - height / positionY);
  text(" - THE WALL STREET JOURNAL.", width - width / positionX + 50, height - height / positionY + 20);
}

function drawheadlineEcono(nextcount, positionX, positionY) {
  noStroke();
  headline = (econodata[nextcount].title);
  fill(255,255,255);
  textSize(15);
  textAlign(CENTER);
  textFont(econoFont);
  text(headline, width - width / positionX , height - height / positionY);
  text(" - The Economist", width - width / positionX + 50, height - height / positionY + 20);
}

function drawheadlineGuardian(nextcount, positionX, positionY) {
  noStroke();
  headline = (guardiandata[nextcount].title);
  fill(255,255,255);
  textSize(15);
  textAlign(CENTER);
  textFont(guardianFont);
  text(headline, width - width / positionX , height - height / positionY);
  text(" - The Guardian", width - width / positionX + 50, height - height / positionY + 20);
}