function newRandomsnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomDec(2, 5),
        color: "white",
        v: randomDec(1, 5)
    }
}

// Gloabal Array Variable
let array = [];

// Create and Return an array with "total" snow objets
function snowArray(total) {
    for (let n = 1; n <= total; n++) {
        array.push(newRandomsnow());
    }
    return array;
}

function drawsnow(snow) {
    fill("white");
    circle(snow.x, snow.y, snow.r, "fill");
    
}

function movesnow(snow) {
    if (snow.y > cnv.height) {
        snow.y = 0;
        snow.x = randomInt(0, 800)
    }
    snow.y += snow.v;
}

