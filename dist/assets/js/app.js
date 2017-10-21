  $('#introduction .inner').delay(1200).animate({
    height: $('#introduction .heading').height(),
    marginTop: 0
  }, 300, () => {
    $('#introduction').css({
      height: 'auto'
    });
    $('#header').addClass('landing-descend');
    $('#content').show();
    $('#content').addClass('landing-ascend');
  });
