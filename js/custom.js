function fixmetotop() {
  var fixmeTop = $('.table-of-contents').offset().top;
  $(window).scroll(function() {
    //aktuelle Scrollposition auslesen
    var currentScroll = $(window).scrollTop(),
    //+1em rechnen
    currentScroll = currentScroll + 15,
    actualBottom = $('#bodybox').offset().top + $('#bodybox').outerHeight(true),
    heightSideNav = $('.table-of-contents').outerHeight(true);
    if (currentScroll >= fixmeTop && currentScroll <= actualBottom - heightSideNav) {
      //CSS für fixed setzen
      $('.table-of-contents').css({
        position: 'fixed',
        top: '0',
        bottom: ''
      });
    } else {
      if(currentScroll >= actualBottom - heightSideNav) {
        $('.table-of-contents').css({
          position: 'fixed',
          bottom: '0',
          top: ''
        });
      } else {
        //CSS für nicht fixed setzen
        $('.table-of-contents').css({
          position: 'static',
          bottom: '',
          top: ''
        });
      }
    }
  });
}
$(document).ready(function () {
  fixmetotop();
  $('.scrollspy').scrollSpy();
});
            var elem = document.querySelector('.sidenav');
              var instance = new M.Sidenav(elem);
              var collapsibleElem = document.querySelector('.collapsible');
              var collapsibleInstance = new M.Collapsible(collapsibleElem, options); 

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems, options);
        });
