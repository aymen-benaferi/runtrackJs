var keyloggerTextarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase();

    if (key.match(/[a-z]/) && !event.repeat) {
        if (document.activeElement === keyloggerTextarea) {
            keyloggerTextarea.value += key + key;
        } else {
            keyloggerTextarea.value += key;
        }
    }
});
