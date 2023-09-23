var maxLength = 10;
var labelVar = "";
var button, label;

// user || score
var typeOfVar = "user";

function keyClick(id) {

    button = document.getElementById(id);
    label = document.getElementById("label");

    for(i = 0; i <= 9; i++) {
        if(id == "key" + i) {
            
            if(typeOfVar == "score")
                clear();

            addNumber();
            break;
        }
    }


    if(id == "del") clear();
    if(id == "sqrt") square();
    if(id == "back") back();
    
    writeValue();
}

function writeValue() {

    labelVar += "";

    if(labelVar.length > maxLength) {
        var newValue = "";
        for(i = 0; i < maxLength; i++) {
            newValue += labelVar.charAt(i);
        }
        labelVar = newValue;
    }
    if(labelVar == "NaN" || labelVar == "") labelVar = "0";
    label.innerHTML = "<p>" + labelVar + "</p>";
}

function addNumber() {
    if(labelVar == "0") labelVar = "";
    labelVar += button.value;
}

function clear() {
    typeOfVar = "user";
    labelVar = "";
}

function back() {
    if(typeOfVar == "user") {
        labelVar = labelVar.substr(0, labelVar.length - 1);
    }
    else
        clear();
}

function square() {
    typeOfVar = "score";
    labelVar = Math.sqrt(labelVar);
}