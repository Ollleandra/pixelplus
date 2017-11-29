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


