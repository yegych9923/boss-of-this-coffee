$(document).ready(function() {
    $('body').bind('mousemove', function(e) {
        var coeff = 30;
        var x = -1 * (e.clientX / coeff);
        var y = -1 * (e.clientY / coeff);

        document.getElementById('hero-img').style.marginLeft = x + 'px';
        document.getElementById('hero-img').style.marginTop = y + 'px';
    });
});