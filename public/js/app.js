const hamburgerMenu = document.getElementById("hamburger-btn");
const content = document.getElementsByClassName("menu-content");
const sections = document.getElementsByClassName("sections");
const opacity = document.getElementsByClassName("content");

function hamburger() {
    if (document.getElementById("brand-menu").classList.contains("menu-closed")) {
        document.getElementById("brand-menu").classList.remove("menu-closed");
        document.getElementById("brand-menu").classList.add("menu-open");
    } else if(document.getElementById("personality-menu").classList.contains("menu-closed")) {
        document.getElementById("personality-menu").classList.remove("menu-closed");
        document.getElementById("personality-menu").classList.add("menu-open");
    } else if(document.getElementById("design-menu").classList.contains("menu-closed")) {
        document.getElementById("design-menu").classList.remove("menu-closed");
        document.getElementById("design-menu").classList.add("menu-open");
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

function main() {
    closeHelperMenies();
    closeMenu();
    openMainMenu();
}

function brand() {
    fadeOutSections();
    document.getElementById("culture").classList.remove("fadeOut");
    closeHelperMenies();
    closeMenu();
    removeActiveSection();
    removeActiveLink();
    document.getElementById("main").classList.remove('opacity-change');
    document.getElementById("brand-menu").classList.add('menu-open');

    document.getElementById("brand-menu").classList.add("active-section");
    document.getElementById("culture-tab").classList.add("active-menu");
    setTimeout(function() {
        hideActiveSection();
        document.getElementById("culture").classList.remove("hidden");
        document.getElementById("culture").classList.add("block");
        document.getElementById("culture").classList.add("opened-section");
    }, 500)
}

function closeBrand() {
    document.getElementById("brand-menu").classList.remove("menu-open");
    document.getElementById("brand-menu").classList.add("menu-closed");
}

function personality() {
    fadeOutSections();
    document.getElementById("voice").classList.remove("fadeOut");

    closeHelperMenies();
    closeMenu();
    removeActiveSection();
    removeActiveLink();
    document.getElementById("main").classList.remove('opacity-change');
    document.getElementById("personality-menu").classList.add('menu-open');
    document.getElementById("personality-menu").classList.add("active-section");
    document.getElementById("voice-tab").classList.add("active-menu");
    setTimeout(function() {
        hideActiveSection();
        document.getElementById("voice").classList.remove("hidden");
        document.getElementById("voice").classList.add("block");
        document.getElementById("voice").classList.add("opened-section");
    }, 500)
}

function closePersonality() {
    document.getElementById("personality-menu").classList.remove("menu-open");
    document.getElementById("personality-menu").classList.add("menu-closed");
}

function design() {
    fadeOutSections();
    document.getElementById("intentional").classList.remove("fadeOut");    
    closeHelperMenies();
    closeMenu();
    removeActiveSection();
    removeActiveLink();
    document.getElementById("main").classList.remove('opacity-change');
    document.getElementById("design-menu").classList.add('menu-open');

    document.getElementById("design-menu").classList.add("active-section");
    document.getElementById("intentional-tab").classList.add("active-menu");

    setTimeout(function() {
        hideActiveSection();
        document.getElementById("intentional").classList.remove("hidden");
        document.getElementById("intentional").classList.add("block");
        document.getElementById("intentional").classList.add("opened-section");
    }, 500)
}

function closeDesign() {
    document.getElementById("design-menu").classList.remove("menu-open");
    document.getElementById("design-menu").classList.add("menu-closed");
}


function openHelperMenu(menu) {
    fadeOutSections();
    document.getElementById(menu).classList.remove("fadeOut");   
    removeActiveLink();
    removeActiveSection();

    document.getElementById("brand-menu").classList.add("active-section");
    document.getElementById(menu + "-tab").classList.add("active-menu");

    setTimeout(function() {
        hideActiveSection();
        document.getElementById(menu).classList.remove("hidden");
        document.getElementById(menu).classList.add("block");
        document.getElementById(menu).classList.add("opened-section");
    }, 500)
}

function openMainMenu() {
    fadeOutSections();
    document.getElementById("welcome").classList.remove("fadeOut");   
    removeActiveLink();
    removeActiveSection();

    document.getElementById("brand-menu").classList.add("active-section");

    setTimeout(function() {
        hideActiveSection();
        document.getElementById("welcome").classList.remove("hidden");
        document.getElementById("welcome").classList.add("block");
        document.getElementById("welcome").classList.add("fadeIn");
        document.getElementById("welcome").classList.add("opened-section");
    }, 500)
}

function closeHelperMenies() {
    var helpMenu = document.getElementsByClassName("help-menu");
    for (var i=0; i<helpMenu.length; i++) {
        helpMenu[i].classList.remove("menu-open");
        helpMenu[i].classList.add("menu-close");
    }
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

function hideActiveSection() {
    for (var i = 0; i < sections.length; i++) {
        if(sections[i].classList.contains("opened-section")) {
            sections[i].classList.remove("opened-section");
            sections[i].classList.add("hidden");
        }
    }
}

function fadeOutSections() {
    for (var i = 0; i < sections.length; i++) {
        if(sections[i].classList.contains("opened-section")) {
            sections[i].classList.add("fadeOut");
        }
    }
}