'use strict';

const app = require('../app.js');
const template = require('../../templates/contactTemplate.handlebars');
const appointmentTemplate = require('../../templates/appointmentTemplate.handlebars');

// const modal = require('../../templates/modal.handlebars');
const contactApi = require('../contact/api.js');
const appointmentApi = require('../apointment/api.js');
const contactUi = require('../contact/ui.js');
const appointmentUi = require('../apointment/ui.js');
// const getFormFields = require('../../../lib/get-form-fields.js');


const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const getContactsOnSignIn = () => {
  $('#contacts-table').html(template());
  $('#create-contact').removeClass('hide');
  contactApi.getContact()
  .done((data) => {
    $('#contacts-table').html('');
    $('#contacts-table').html(template(data));
    $('.delete-contact').click(contactUi.deleteContact);
    $('.update-contact').on('click', (event) => {
      event.preventDefault();
      let contact_id = $(event.target).data('id');
      $('#contact-id').val(contact_id);
      $('#update-form').removeClass('hide');
      });
    });
  $('#appointments-table').html(appointmentTemplate());
  $('#create-appointment').removeClass('hide');
  appointmentApi.getAppointment()
  .done((data) => {
    $('#appointments-table').html('');
    $('#appointments-table').html(appointmentTemplate(data));
    // $('.delete-appointment').click(contactUi.deleteAppointment);
    $('.delete-appointment').on('click', appointmentUi.deleteAppointment);
    $('.update-appointment').on('click', (event) => {
      event.preventDefault();
      let appointment_id = $(event.target).data('id');
      $('#appointment-id').val(appointment_id);
      $('#update-form2').removeClass('hide');
    });
  });
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  getContactsOnSignIn();
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('#contacts-table').html('');
  // $('#create-contact').html('');
  $('#appointments-table').html('');
  // $('#create-appointment').html('');
  };

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  getContactsOnSignIn
};
