$(document).on('click', '.buy-now', function(e){
    e.preventDefault();
    if ($(this).hasClass('disabled')) {
        return false;
    }
    $(document).find('.buy-now').addClass('disabled');

    var parent = $(this).parents('.single-products');
    var cart = $(document).find('.cart-shop');
    var src = parent.find('img').attr('src');

    var parTop = parent.offset().top;
    var parLeft = parent.offset().left;
    console.log(src)
    $('<img />', {
        class: 'img-product-fly',
        src: src
    }).appendTo('body').css({
        'top': parTop,
        'left': parseInt(parLeft) + parseInt(parent.width()) - 50
    });
    setTimeout(function(){
        $(document).find('.img-product-fly').css({
            'top': cart.offset().top,
            'left':  cart.offset().left
        });
        setTimeout(function(){
            $(document).find('.img-product-fly').remove();
            var citem = parseInt(cart.find('.count-item').data('count')) + 1;
            cart.find('.count-item').text('('+citem+')').data('count', citem);
            $(document).find('.buy-now').removeClass('disabled');
        },1000);
    },500);
});

$(document).ready(function(){
    $('.butom_comment_high').click(function(){
        $(this).parent().toggleClass();
        $(this).parents().children('.body_comment').slideToggle();
    });
});
$(document).ready(function(){
    $('.butom_content').click(function(){
        $(this).parent().toggleClass();
        $(this).parents().children('.body_comment_left').slideToggle();
    });
    $('.butom_content').click(function(){
        if(value==="xem thêm thông tin"){
            document.getElementById('showvalue').location.href='#box_thongtinsanpham';
        }
    });
});
function changeImage(id){
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('image-main').setAttribute('src', imagePath);
}
function zoom(a){
    if(a.value==="xem thêm thông tin"){
        a.value="Ẩn bớt thông tin";
    }else{
        a.value="xem thêm thông tin";
    }
}

