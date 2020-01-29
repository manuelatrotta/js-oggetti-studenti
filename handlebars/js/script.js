//al click sul bottone deve partire il mesaggio inserito con la data
$(document).ready(function() {
  $('.send').click(function() {
  //variabile del nuovo testo con val() inserita in seguito dall'utente
    var textNew = $('.send-msg').val();
//variabili per time
    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var time = hours + ':' + minutes;
//variabili in handlebarsj correlate a script entry-template
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
//var handlebarsj in cui decidiamo di introdurre variabili create prima
    var context = {
      'message' : textNew,
      'date' : time,
      'sentReceived' : 'sent'
    };
//aggiunta template in #add su html
    var html = template(context);
    $('#add').append(html);

//messaggio di risposta automatico con setTimeout
setTimeout(function() {
  var response = 'yes, of course';

  var data = new Date();
  var hours = data.getHours();
  var minutes = data.getMinutes();
  var time = hours + ':' + minutes;

  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var context = {
    'message' : response,
    'date' : time,
    'sentReceived' : 'received'
  };
    var html = template(context);

    $('#add').append(html);
    }, 2000);
  })
});
