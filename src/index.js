import $ from 'jquery';

const body = $('body');

const p = $("<p></p>").text("Inserindo um paragrafo").css("color", "red");

body.append(p);