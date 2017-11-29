$(window).on('load', function () {
    $preloader = $('.loaderArea'),
        $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(2000).fadeOut('slow');
});
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 4000
    });

    $('.hamburger').click(function () {
        $(this).toggleClass("is-active");
    });

// To get Giphy
    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=5',
        dataType: 'json',
        success: function (results) {
            var id = results.data;
            $.each(id, function (index) {
                var myImg = "<img src='" + this.images.fixed_height.url + "'>";
                $('#giffy').append("<figure class='col-xs-12 col-sm-6 col-md-4'>" + myImg +
                    "<p class='product-desc'>Самый клевый чайник, который надо купить!</p><figcaption>" +
                    "<p class='product-price'><span>1 900</span> р.</p>" +
                    "<p class='to-sell'><a title='Купить' href='#basket'><span class='icon-cart-plus'></span></a></p>" +
                    "</figcaption></figure>");
            });
        }
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICRwcmVsb2FkZXIgPSAkKCcubG9hZGVyQXJlYScpLFxyXG4gICAgICAgICRsb2FkZXIgPSAkcHJlbG9hZGVyLmZpbmQoJy5sb2FkZXInKTtcclxuICAgICRsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgJHByZWxvYWRlci5kZWxheSgyMDAwKS5mYWRlT3V0KCdzbG93Jyk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7XHJcbiAgICAgICAgaW50ZXJ2YWw6IDQwMDBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuLy8gVG8gZ2V0IEdpcGh5XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoP3E9ZnVubnkrY2F0JmFwaV9rZXk9ZGM2emFUT3hGSm16QyZsaW1pdD01JyxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHJlc3VsdHMuZGF0YTtcclxuICAgICAgICAgICAgJC5lYWNoKGlkLCBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBteUltZyA9IFwiPGltZyBzcmM9J1wiICsgdGhpcy5pbWFnZXMuZml4ZWRfaGVpZ2h0LnVybCArIFwiJz5cIjtcclxuICAgICAgICAgICAgICAgICQoJyNnaWZmeScpLmFwcGVuZChcIjxmaWd1cmUgY2xhc3M9J2NvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCc+XCIgKyBteUltZyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8cCBjbGFzcz0ncHJvZHVjdC1kZXNjJz7QodCw0LzRi9C5INC60LvQtdCy0YvQuSDRh9Cw0LnQvdC40LosINC60L7RgtC+0YDRi9C5INC90LDQtNC+INC60YPQv9C40YLRjCE8L3A+PGZpZ2NhcHRpb24+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPHAgY2xhc3M9J3Byb2R1Y3QtcHJpY2UnPjxzcGFuPjEgOTAwPC9zcGFuPiDRgC48L3A+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPHAgY2xhc3M9J3RvLXNlbGwnPjxhIHRpdGxlPSfQmtGD0L/QuNGC0YwnIGhyZWY9JyNiYXNrZXQnPjxzcGFuIGNsYXNzPSdpY29uLWNhcnQtcGx1cyc+PC9zcGFuPjwvYT48L3A+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9maWdjYXB0aW9uPjwvZmlndXJlPlwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
