setTimeout(() => {
    $('#introduction .inner').animate({
        height: $('#introduction .heading').height(),
        marginTop: 0
    }, 500);

    $('#introduction').css({
        height: 'auto'
    });

    $('#content').show().animate({
        opacity: 1
    }, 500);
}, 1000);
