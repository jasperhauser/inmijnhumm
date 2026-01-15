// nav bar more (hamburger) menu behavior
document.getElementById("nav-more").onclick = function(){
    document.body.classList.toggle('open'); // let's make this things smooth
};
// close nav when any tap/click registers on it
document.getElementById("nav-menu-list").onclick = function(){
    document.body.classList.remove('open'); // let's make this things smooth
};
// close nav when any tap/click registers on it
document.getElementById("nav-menu-backdrop").onclick = function(){
    document.body.classList.remove('open'); // let's make this things smooth
};

// scroll &	resize event listener
window.addEventListener('resize', throttle(onScroll, 50));
window.addEventListener('scroll', throttle(onScroll, 50));
// check scroll position on page load
window.addEventListener('load', onScroll);

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
    var home = document.body.classList.contains("home");
    if (home) {
        // nav title bar show and hide
        var mastHeight = document.getElementById("masthead-photo").offsetHeight;
        // add/remove sticky to show the nav
        if (window.scrollY >= (mastHeight / 2)) {
            // add sticky when scrolling down
            document.getElementById("nav").classList.add("sticky");
        } else if (window.scrollY < (mastHeight / 2)) {
            // remove sticky when at top of page
            document.getElementById("nav").classList.remove("sticky");
            // close nav when scrolling up
            document.body.classList.remove('open');
        } else if (window.scrollY <= 5){
            // remove sticky when at top of page
            document.getElementById("nav").classList.remove("sticky");
        }
    }
}