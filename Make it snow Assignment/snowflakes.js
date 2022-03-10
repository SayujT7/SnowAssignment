function newSnow(initX, initY, initR, ) {
    return {
        x: initX,
        y: initY,
        r: initR,
    }
}

function newRandomsnow() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(3, 7),
        color: "white"
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
    if (snow.y <= 700) {
        snow.y++;
        
    } else if (snow.y >= 701) {
        snow.y = 0;
        snow.x = randomInt(0, 800)
    }
}

function teleport(snow) {
    if (snow.y === 700) {
        snow.y = cnv.height;
    }
}