'use strict';

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    var colorActual;
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    // $('#indicador-de-color').click(function() {
    //   $(this).css('background-color', colorActual);
    // });
    $('#indicador-de-color').css('background-color', colorActual);
  })
);

var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');

var generaPaleta = function () {
  for (let i = 0; i < nombreColores.length; i++) {
    var $nuevoDiv = $('<div>', { "class": 'color-paleta' }).css('background-color', nombreColores[i]);
    $($paleta).append($nuevoDiv);
  };
};

var creaGrilla = function () {
  for (let i = 0; i <= 1750; i++) {
    $($grillaPixeles).append('<div></div>');
  };
};

generaPaleta();
creaGrilla();

$(function () {

  var $pixelito = $('#grilla-pixeles div');
  var $mouseAbajo = false;

  var cambiaIndicadorDeColor = function () {
    var $colorPicked = $(this).css('background-color');
    $('#indicador-de-color').css('background-color', $colorPicked);
  };

  $('div.color-paleta').click(cambiaIndicadorDeColor);

  // funcion abandonada para pintar un solo pixel, incorporada luego en el mousedown
  // var pintaPixel = function() {
  //   var $colorAPintar = $('#indicador-de-color').css('background-color');
  //   $(this).css('background-color', $colorAPintar);
  // };
  // $($pixelito).click(pintaPixel);

  var pintarMuchosPixels = function () {

    $($pixelito).mousedown(function () {

      var $colorAPintar = $('#indicador-de-color').css('background-color');
      $(this).css('background-color', $colorAPintar);

      $mouseAbajo = true;

    }).mouseup(function () {
      $mouseAbajo = false;
    });

    if ($mouseAbajo) {
      var $colorAPintar = $('#indicador-de-color').css('background-color');
      $(this).css('background-color', $colorAPintar);
    };
  };

  $($pixelito).mouseover(pintarMuchosPixels);

  var borrarTodo = function () {
    $($pixelito).animate({ 'background-color': 'white' }, 750);
  };

  $('button#borrar').click(borrarTodo);

  // codigo para revisar en clases

  // $(".imgs img").click(function(){
  //   implementacion();

  //   console.log($superheroe);
  //   cargarSuperheroe($superheroe);
  // }); 

  $('#batman').click(function () {
    cargarSuperheroe(batman);
  });

  $('#wonder').click(function () {
    cargarSuperheroe(wonder);
  });

  $('#flash').click(function () {
    cargarSuperheroe(flash);
  });

  $('#invisible').click(function () {
    cargarSuperheroe(invisible);
  });

  $('#guardar').click(function () {
    guardarPixelArt();
  });
});
