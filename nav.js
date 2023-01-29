
// nav bar more (hamburger) menu behavior
document.getElementById("nav-more").onclick = function(){
    document.getElementById("body").classList.toggle('open'); // let's make this things smooth
};
// close nav when any tap/click registers on it
document.getElementById("nav-menu-list").onclick = function(){
    document.getElementById("body").classList.remove('open'); // let's make this things smooth
};
// close nav when any tap/click registers on it
document.getElementById("nav-menu-backdrop").onclick = function(){
    document.getElementById("body").classList.remove('open'); // let's make this things smooth
};

// scroll &	resize event listener
window.addEventListener('resize', throttle(onScroll, 50));
window.addEventListener('scroll', throttle(onScroll, 50));

// let's make the events not eat all the resources
function throttle(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

function onScroll(){
    // only show/hide nav bar when on home page
    var home = document.getElementById("body").classList.contains("home");
    if (home) {
        // nav title bar show and hide
        var mastHeight = document.getElementById("masthead-photo").offsetHeight;
        // add/remove sticky to show the nav
        if (window.pageYOffset >= (mastHeight / 2)) {
            document.getElementById("nav").classList.add("sticky");
        } else if (window.pageYOffset < (mastHeight / 2)) {
            document.getElementById("nav").classList.remove("sticky");
            document.getElementById("body").classList.remove('open');
        } else if (window.pageYOffset <= 5){
            document.getElementById("nav").classList.remove("sticky");
        }
    }
}