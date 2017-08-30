'use strict';
(function() {

  $(window).on('load', function() {

    $('.form__btn[type="submit"]').attr('disabled', true);

    $('form input').on('keyup', function(){
      formValdidate($(this));
    });

    $('form input[type="radio"]').on('change', function(){
      formValdidate($(this));
    });

    function formValdidate(node) {
      if (node.attr('type') === 'radio') {
        node.siblings('.form__field-tooltip').removeClass('form__field-tooltip--show');             
        if ( node.attr('id') != 'citizenship-y') {          
          node.siblings('.form__field-tooltip').addClass('form__field-tooltip--show');
        }

      } else if ( node.attr('type') === 'text') {
        node.siblings('.form__field-tooltip').removeClass('form__field-tooltip--show');
        if ( node.val() =='' || node.val().match(/\s/g)) {
          node.siblings('.form__field-tooltip').addClass('form__field-tooltip--show');
        }
      }
      

      if(!($('form').find('.form__field-tooltip').hasClass('form__field-tooltip--show'))) {
        $('.form__btn[type="submit"]').attr('disabled', false);
      } else  $('.form__btn[type="submit"]').attr('disabled', true);
    }

    formValdidate( $('form input'));

  });

})();

// if(node.attr('type') === 'text') {

//         if ((node.val().search(/\D\s/gm))) {


//           node.siblings('.form__field-tooltip').addClass('form__field-tooltip--show');
//           console.log(node.val());

//         } else if ( node.attr('type') === 'radio') {
//           console.log(node);
//         }
//       }

//       function setAlert() {
//         console.log('alert')
//       }

//       function removeAlert() {
//         console.log('alert')
//       }
