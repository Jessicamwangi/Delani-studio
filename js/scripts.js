//    what we do section
$('.main').click(function () {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
//portifolio section 
$(".custom-portfolio-images").hover(function () {
  $(this).children(".Hover").fadeToggle(1000, "linear");
});
// giving feedback to the customer
$('.submit').click(function () {
  var Name = $('#name').val();
  var Email = $('#email').val();
  var Message = $('#comment');
  var key ='KEY';
  if (Name == '' || Email == '' || Message == '') {
      alert('Please make sure you have filled in the form correctly!');
  } else {
      alert(' Hello ' + ' We have successfully received your message. Thank you for reaching out to us.');
  }
});
//    reset my form button
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});



