let beat, analyzer;

function preload() {
    beat = loadSound('beat.mp3');
    console.log("PRELOAD RAN");
}

function setup() {
    console.log("SETUP");
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('myContainer');
    
    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();
    analyzer.setInput(beat);
}

function mousePressed() {
    console.log("mouse pressed");
    if (beat.isPlaying()) {
        console.log("beat playing");
        beat.stop();
    } else {
        console.log("beat not playing");
        beat.loop();
    }
}

function draw() {
    erase();
    ellipse(width / 2, height / 2, 220, 220);
    noErase();
    
    // Get the average (root mean square) amplitude
    let rms = 0
    if (analyzer.getLevel()){
        console.log("level got");
        rms = analyzer.getLevel();
    }
    
    fill(127);
    stroke(0);

    // Draw an ellipse with size based on volume
    ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}
