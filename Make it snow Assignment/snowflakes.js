function newRandomsnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(3, 7),
        color: "white",
        v: randomInt(1, 10)
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
    snow.y += snow.v;
}

function movesnow(snow) {
    if (snow.y > cnv.height) {
        snow.y = 0;
        snow.x = randomInt(0, 800)
    }
}

function teleport(snow) {
    if (snow.y === 700) {
        snow.y = cnv.height;
    }
}