function scrollOff() {
    document.body.style.cssText = `
        position: relative;
        background: #000;
        overflow: hidden;
    `  
}

function scrollOn() {
    document.body.style.cssText = `
        position: '';
        background: '';
        overflow: '';
    `  
}
