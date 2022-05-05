$(document).ready(function() {
    const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0])
    const screenWidth = document.body.clientWidth;

    function rem(size) {
        return size / fontSize;
    }

    $('body').bind('mousemove', function(e) {
        var coeff = 30;
        var x = -1 * (e.clientX / coeff);
        var y = -1 * (e.clientY / coeff);

        document.getElementById('hero-img').style.marginLeft = x + 'px';
        document.getElementById('hero-img').style.marginTop = y + 'px';
    });

    if (rem(screenWidth) > rem(1200)) {
        document.getElementsByClassName('diskounts-catalog-items').style.rowGap = 
            (screenWidth - $('.catalog__item').css('width') * 4) / 4;
    }
});