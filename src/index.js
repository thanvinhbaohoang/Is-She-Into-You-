import $ from 'jquery';
import './style.scss';
// const $ = require('jquery');

$('#main').html('Here we go! askflbaslkdflkjasdfn');
console.log('TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');

let seconds = 0;

function incrementSeconds() {
  seconds += 1;
  $('#main').html(`You've been on this page for ${seconds} seconds.`);
}

setInterval(incrementSeconds, 1000);
