// core cookie functionality
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

// read language
var userLang = navigator.language || navigator.userLanguage;
var langCookie = getCookie("preferLang");

// read and print cookie
console.log("Cookie read: " + langCookie);

function setLangCookie(lang) {
    // console.log("Cookie set to: " + lang);
    document.cookie = "preferLang=" + lang + ";path=/";
}