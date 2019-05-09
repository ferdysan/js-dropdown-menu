//attivo o disattivo il menu dropdown_menu

// $('.element-menu').click(function () {
//   $(this).toggleClass('cliccato');
//   $(this).children('.dropdown_menu').toggleClass('aperto');
// });


//STESSA COSA CON MOUSE enter

// $('.element-menu').mouseenter(function () {
//   $(this).addClass('apri_menu');
//   $(this).children('.dropdown_menu').toggle();
// });
//
// $('.element-menu').mouseleave(function() {
//   $(this).removeClass('apri_menu');
//   $(this).children('dropdown_menu').removeClass('apri_menu');
// })

$('.element-menu').mouseenter(function() {
  // quando entro con il mouse in una voce aggiungo la classe apri_menu
  // questa classe mantiene lo stesso stile (colore e sfondo) dell'effetto hover
  // $(this).addClass('apri_menu');

  // aggiungo la classe aperto al dropdown_menu che visualizza il sottomenu
  $(this).children('.dropdown_menu').addClass('aperto');
});

$('.element-menu').mouseleave(function() {

  // quando esco con il mouse dall'elemento del menu tolgo la classe apri_menu
  // $(this).removeClass('apri_menu');
  // tolgo la classe aperto per nasconde il sottomenu
  $(this).children('.dropdown_menu').removeClass('aperto');
});
