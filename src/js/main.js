var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',60);
   } else clearTimeout(timeOut);
};


var form = document.querySelector('.js-validate');
var button = form.querySelector('.button');
var email = form.querySelector('.email');
var field = form.querySelectorAll('.field');


var remove = function () {
   var errors = form.querySelectorAll('.error');
   for (var i = 0; i < errors.length; i++) {
      errors[i].remove();
   }
};

var generateError =function (text) {
   var error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.style.fontStyle = 'italic';
      error.style.position = 'relative';
      error.style.top = '80px';
      error.style.fontSize = '20px';
      error.innerHTML = text;
      return error
}

var jsModal = function () {
   var modal = document.querySelector('.js-modal');
         modal.classList.add('is-show');
         var overlay = document.querySelector('.overlay');
         overlay.classList.add('js-overlay');
}

var insertBefore = function () {

   for (var i = 0; i < field.length; i++) {
      if (!field[i].value) {
         var error = generateError('Заполните форму');
         form[i].parentElement.insertBefore(error, field[i]);
      }else if (field[i] = true) {
         jsModal();

         var closs = document.querySelector('.modal-closse');
         closs.addEventListener('click', function (event) {
            event.preventDefault();
            var close = document.querySelector('.js-modal');
            close.classList.remove('is-show');
            var close = document.querySelector('.overlay');
            close.classList.remove('js-overlay');

         });

      }
   }
}



form.addEventListener('submit', function (event) {
   event.preventDefault();
   remove();
   generateError();
   insertBefore();
});







// $('.button').click(function (event) { 
//    event.preventDefault();
//    var modalName = $(this).attr('data-modal');
//    var modal = $('.js-modal[data-modal="'+ modalName +'"]');

//    modal.addClass('is-show')
// });


// $('.modal-closse').click(function (event) { 
//    event.preventDefault();
//    $('.js-modal').removeClass('is-show');
   
// });