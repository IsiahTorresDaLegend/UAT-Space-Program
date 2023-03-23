// This code was written for CSC 102 class at UAT, DOM assignment. Written by Isiah Torres.


// Global Variables
var theTime = new Date();
var tempTime = new Date();
var time_interval = 5000;
var last_iteration = 0;
var running = true;
var index = 0;
var timer;

// Load data into the array. 
// This variable takes the results of the getData() function (the "data" array) and binds its value to this single word "data".
// When "data" ia used, the "data" array is being referenced.
var data = getData();
