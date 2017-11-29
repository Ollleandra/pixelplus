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
        url: 'https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=6',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICRwcmVsb2FkZXIgPSAkKCcubG9hZGVyQXJlYScpLFxyXG4gICAgICAgICRsb2FkZXIgPSAkcHJlbG9hZGVyLmZpbmQoJy5sb2FkZXInKTtcclxuICAgICRsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgJHByZWxvYWRlci5kZWxheSgyMDAwKS5mYWRlT3V0KCdzbG93Jyk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7XHJcbiAgICAgICAgaW50ZXJ2YWw6IDQwMDBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuLy8gVG8gZ2V0IEdpcGh5XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9xPWZ1bm55K2NhdCZhcGlfa2V5PWRjNnphVE94RkptekMmbGltaXQ9NicsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSByZXN1bHRzLmRhdGE7XHJcbiAgICAgICAgICAgICQuZWFjaChpZCwgZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXlJbWcgPSBcIjxpbWcgc3JjPSdcIiArIHRoaXMuaW1hZ2VzLmZpeGVkX2hlaWdodC51cmwgKyBcIic+XCI7XHJcbiAgICAgICAgICAgICAgICAkKCcjZ2lmZnknKS5hcHBlbmQoXCI8ZmlndXJlIGNsYXNzPSdjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQnPlwiICsgbXlJbWcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPHAgY2xhc3M9J3Byb2R1Y3QtZGVzYyc+0KHQsNC80YvQuSDQutC70LXQstGL0Lkg0YfQsNC50L3QuNC6LCDQutC+0YLQvtGA0YvQuSDQvdCw0LTQviDQutGD0L/QuNGC0YwhPC9wPjxmaWdjYXB0aW9uPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSdwcm9kdWN0LXByaWNlJz48c3Bhbj4xIDkwMDwvc3Bhbj4g0YAuPC9wPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjxwIGNsYXNzPSd0by1zZWxsJz48YSB0aXRsZT0n0JrRg9C/0LjRgtGMJyBocmVmPScjYmFza2V0Jz48c3BhbiBjbGFzcz0naWNvbi1jYXJ0LXBsdXMnPjwvc3Bhbj48L2E+PC9wPlwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
