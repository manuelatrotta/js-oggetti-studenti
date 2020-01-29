$(document).ready(function() {
  $('.send').click(function() {
    var textNew = $('.send-msg').val();

    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var time = hours + ':' + minutes;

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'message' : textNew,
      'date' : time
    };
    var html = template(context);
    $('#add').append(html)
  })
});
