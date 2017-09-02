/**
 * Created by Актилек on 13.02.2017.
 */
$('#popup-open').click(function () {
    $('.popup-wrap').fadeIn(200);
});
$('#popup-closed').click(function () {
    $('.popup-wrap').fadeOut();
});
 

var quotes = [
    {
        body: "Вот тут должен быть отзыв клиента. не большой такой, буквально на пару строк. что бы вместился и еще чуть места снизу осталось"
    },
    {
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam laudantium, libero animi dolores nostrum, neque aut amet alias consectetur voluptatibus aliquid dicta deleniti cupiditate unde fuga pariatur earum officiis nulla."
    },
    {
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita saepe repellat esse consectetur modi, quibusdam, magnam illo doloremque! Veritatis aut architecto facilis optio assumenda a voluptatibus, maiores voluptate alias labore."
    },
    {
        body: "Lorem ipsum dolor sit amet."
    }
];


$('#quote_btn_next').click(function () {
    printQuotes();
});

$('#quote_btn_prev').click(function () {
    printQuotes();
});

//случайный выбор
function printQuotes() {
    var quote = getRandomQuote();
    $('#quote .quote_body').text(quote.body);
}

//по порядку
var quote_number = 0;
function getOrderedQuote() {
    var quote = quotes[quote_number];
    quote_number++;
    if (quote_number == quote.length){
        quote_number = 0;
    };
    return quote;
    
}
function getRandomQuote() {
    var i = Math.floor(Math.random() * quotes.length);
    var quote = quotes[i];
    return quote;
};

function initMap() {
    var bishkek = {lat: 42.882724, lng: 74.613467};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: bishkek
    });
    var marker = new google.maps.Marker({
        position: bishkek,
        map: map
    });
};

$(document).ready(function() {
    
    $('#fullpage').fullpage({
        anchors: ['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'block7', 'block8', 'block9'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1500,
        scrollOverflow: true,
        responsiveWidth: 950
    });

    $('.slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 950,
        //сообщает, при какой ширине экрана нужно включать настройки
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        }
    ]
    });
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
    });

});