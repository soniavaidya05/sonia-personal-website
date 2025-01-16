// Get the canvas and set up variables
var q = document.getElementById("matrix"),
    s = window.screen,
    w = (q.width = window.innerWidth), // Set canvas width to window width
    h = (q.height = window.innerHeight), // Set canvas height to window height
    p = Array(256).join(1).split(''),
    c = q.getContext('2d'),
    m = Math;

// Adjust the canvas size when the window resizes
window.addEventListener('resize', function() {
    w = q.width = window.innerWidth;
    h = q.height = window.innerHeight;
});

// Animation logic
setInterval(function () {
    c.fillStyle = 'rgba(39,39,39,0.05)';
    c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(137, 104, 205,0.8)';
    p = p.map(function (v, i) {
        var r = m.random();
        var str = r > 0.5 ? '1' : '0';
        c.fillText(str, i * 10, v);
        v += 11;
        var ret = v > h ? 0 : v; 
        return ret;
    });
}, 110);
