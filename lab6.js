function changeText(){
    const form  = document.getElementById("glitchForm");
    let newText = document.getElementById("newGlText").value;
    let glitch = document.getElementById("glitch_text");
    glitch.innerHTML = newText;
    
    glitch.setAttribute("data-text", newText);
}

function changeSize(limit){
    let newSize = document.getElementById("fontSize").value;
    if(newSize <= limit){
        let fontS = document.getElementById("glitch_text");
        let size = newSize + "px";
        fontS.style.fontSize = size;
    }
}

function changeSpacing(){
    const glitch = document.getElementById("glitch_text");
    let spacing = document.getElementById("spacing").value;
    glitch.style.letterSpacing = spacing;
}

function changeColor(coloring, variable){
    const glitch = document.getElementById("glitch_text");
    let newColor = document.getElementById(coloring).value;
    glitch.style.setProperty(variable, newColor);
    
}

function changeAnimationTime(){
    const glitch = document.getElementById("glitch_text");
    let newTime = document.getElementById('animLength').value;
    if(newTime > 0){
        let newTimevalue = newTime + "s";
        let variable1 = '--glitchAfterTime';
        let variable2 = '--glitchBeforeTime';
        glitch.style.setProperty(variable1, newTimevalue);
        glitch.style.setProperty(variable2, newTimevalue);
    }
}