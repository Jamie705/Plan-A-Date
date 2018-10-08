// DOM Elements Query
var $locationInputElement = $('#location-input');
var $foodInputElement = $('#food-input');
var $eventInputElement = $('#event-input');
var $searchButtonElement = $('#search-button');
var $searchResultsElement = $('#result');


//$(document).ready(function () {
$searchButtonElement.on('click', function (event) {
  event.preventDefault();
  // Store user input in a local variable
  var locationInput = $locationInputElement.val().trim();
  var foodInput = $foodInputElement.val().trim();
  var eventInput = $eventInputElement.val().trim();
  // Search for events and food using eventbright and yelp    
  search(foodInput, eventInput, locationInput);
});