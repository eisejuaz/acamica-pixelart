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
(function() {
    // Se guarda el color de la rueda en colorActual
    var colorActual;
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    // $('#indicador-de-color').click(function() {
    //   $(this).animate({'background-color': colorActual}, 0);
    // });
  })
);


var $paleta = $('#paleta');

var $grillaPixeles = $('#grilla-pixeles');

var generaPaleta = function() {
  for (let i = 0; i < nombreColores.length; i++) {
    var $nuevoDiv = $('<div>',{"class": 'color-paleta'}).css('background-color', nombreColores[i]);
    $($paleta).append($nuevoDiv);
    
    // $($paleta).append('<div class="color-paleta"></div>');
    // $($paleta).find('>:last-child').css('background-color', nombreColores[i]);
  };
};

generaPaleta();

var creaGrilla = function() {
  for (let i = 0; i <= 1750; i++) {
    $($grillaPixeles).append('<div></div>');
  };
};

creaGrilla();

$(function() {

  var cambiaIndicadorDeColor = function() {
    var $colorPicked = $(this).css('background-color');
    $('#indicador-de-color').css('background-color', $colorPicked);
  };
  
  $('.color-paleta').click(cambiaIndicadorDeColor);

  var pintaPixel = function() {
    var $colorAPintar = $('#indicador-de-color').css('background-color');
    console.log($colorAPintar);
    $(this).css('background-color', $colorAPintar);
    // var $pixelito = $(this).css('background-color');
    // console.log($pixelito);
  };

  $('#grilla-pixeles div').click(pintaPixel);

});