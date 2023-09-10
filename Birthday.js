function clearFunction(){
    document.getElementById("clear").innerHTML = "0 Birthdays Today"; 
    var birthdaysElements = document.getElementsByClassName("Birthdays");
    if (birthdaysElements.length > 0) {
        birthdaysElements[0].style.visibility = 'hidden';
    }

}

function boxShrink(){
    var BboxElements = document.getElementsByClassName("Bbox");
    if (BboxElements.length > 0){
        BboxElements [0].style.height = '100px';
        document.getElementById("cButton").style.top ='55%';
    }
}




