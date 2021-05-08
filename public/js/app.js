const hamburgerMenu = document.getElementById("hamburger-btn");
const content = document.getElementsByClassName("menu-content");
const sections = document.getElementsByClassName("sections");
const opacity = document.getElementsByClassName("content");

function hamburger() {
    if (document.getElementById("brand-menu").classList.contains("menu-closed")) {
        document.getElementById("brand-menu").classList.remove("menu-closed");
        document.getElementById("brand-menu").classList.add("menu-open");
    } else {
        if (hamburgerMenu.classList.contains("hamburger-btn-close")) {
            closeMenu();
        } else {
            openMenu();
        }
    }
}

function openMenu() {
    document.getElementById("menu").classList.add('menu-open');
    document.getElementById("bar1").classList.add('bar1');
    document.getElementById("bar2").classList.add('bar2');
    document.getElementById("bar3").classList.add('bar3');
    hamburgerMenu.classList.add("hamburger-btn-close");
    for (var i = 0; i < content.length; i++) {
        content[i].classList.add("menu-closed");
        content[i].classList.add("transition-" + i);
    }
    for (var i = 0; i < opacity.length; i++) {
        opacity[i].classList.add('opacity-change');
    }
}

function closeMenu() {
    document.getElementById("menu").classList.remove('menu-open');
    document.getElementById("bar1").classList.remove('bar1');
    document.getElementById("bar2").classList.remove('bar2');
    document.getElementById("bar3").classList.remove('bar3');
    hamburgerMenu.classList.remove("hamburger-btn-close");
    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove("menu-closed");
        content[i].classList.remove("transition-" + i);
    }
    for (var i = 0; i < opacity.length; i++) {
        opacity[i].classList.remove('opacity-change');
    }
}

function brand() {
    hideAllSections();
    closeMenu();
    removeActiveSection();
    removeActiveLink();
    document.getElementById("main").classList.remove('opacity-change');
    document.getElementById("brand-menu").classList.add('menu-open');
    document.getElementById("culture").classList.remove("hidden");
    document.getElementById("culture").classList.add("block");
    document.getElementById("brand-menu").classList.add("active-section");
    document.getElementById("culture-tab").classList.add("active-menu");
}

function closeBrand() {
    document.getElementById("brand-menu").classList.remove("menu-open");
    document.getElementById("brand-menu").classList.add("menu-closed");
}

function openHelperMenu(menu) {
    hideAllSections();
    removeActiveLink();
    removeActiveSection();
    document.getElementById(menu).classList.remove("hidden");
    document.getElementById(menu).classList.add("block");
    document.getElementById("brand-menu").classList.add("active-section");
    document.getElementById(menu + "-tab").classList.add("active-menu");
}

function removeActiveLink() {
    var links = document.getElementsByClassName("active-link");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active-menu");
    }
}

function removeActiveSection() {
    var links = document.getElementsByClassName("active-link");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active-section");
    }
}

function hideAllSections() {
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add("hidden");
    }
}

function fadeOutSections() {
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add("fadeOut");
    }
}