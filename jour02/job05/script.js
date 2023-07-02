window.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;
    var scrollPosition = window.scrollY;
    
    var scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
    
    document.getElementById("footer").style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});
