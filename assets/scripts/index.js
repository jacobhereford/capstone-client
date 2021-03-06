'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');
const contactEvents = require('./contact/events.js');
const appointmentEvents = require('./apointment/events.js');

$( function() {
  authEvents.addHandlers();
  contactEvents.addHandlers();
  appointmentEvents.addHandlers();
});
