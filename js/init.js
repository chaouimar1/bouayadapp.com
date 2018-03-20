(function($){
  $(function(){
    
    var options = [
      {
        selector: '.about_section', offset: 200, callback: function (el) {
          $(el).addClass('fadeInUp');
        }
      },
      {
        selector: '.developer_section', offset: 200, callback: function (el) {
          $(el).addClass('fadeInUp');
        }
      },
      {
        selector: '.header_section', offset: 200, callback: function (el) {
          $(el).addClass('fadeInUp');
        }
      },
      {
        selector: '.screenshots_section', offset: 200, callback: function (el) {
          $(el).addClass('fadeInUp');
        }
      }
    ]; 
    
    Materialize.scrollFire(options); 

  }); // end of document ready
})(jQuery); // end of jQuery name space