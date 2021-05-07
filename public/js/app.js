function hamburger() {
    document.getElementById("hamburger-btn").classList.toggle("hamburger-btn-close");
    document.getElementById("bar1").classList.toggle('bar1');

    document.getElementById("bar2").classList.toggle('bar2');
    document.getElementById("bar3").classList.toggle('bar3');
    document.getElementById("menu").classList.toggle('menu-open');
    const content = document.getElementsByClassName("menu-content");
    for(var i=0; i<content.length;i++) {
        content[i].classList.toggle("menu-closed");
        content[i].classList.toggle("transition-"+i);
    }
    document.getElementById("main").classList.toggle('opacity-change');


}

function menu() {
}