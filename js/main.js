function transmite() {
    let text = document.getElementById("intrebare").value;
    window.open("mailto:ecaterina.besliu1979@gmail.com?subject=Intrebare&body=" + text);
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}