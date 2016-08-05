'use strict';

const template = require('../../templates/appointmentTemplate.handlebars');
const api = require('./api.js');
// const getFormFields = require('../../../lib/get-form-fields.js');

const failure = (error) => {
  console.error(error);
};

const getAppointments = () => {
  api.getAppointments()
  .done(displayAppointments)
  .fail(failure);
};

const deleteAppointment = (event) => {
  event.preventDefault();
  let appointment_id = $(event.target).attr('data-id');
  api.deleteAppointment(appointment_id)
  .done(removeFromTable(event))
  .fail(failure);
};

const updateAppointment = (data, appointment_id) => {
  event.preventDefault();
  api.updateAppointment(data, appointment_id)
  .done(getAppointments)
  .fail();
};

const removeFromTable = (e) => {
  $(e.target).parents('tr').remove();
};

const displayAppointments = (data) => {
  let appointments = data;
  $('#update-form2').addClass('hide');
  $('#appointments-table').html('');
  $('#appointments-table').html(template(appointments));
  $('.delete-appointment').on('click', function() {
    console.log('in delete button');
    event.preventDefault();
    let appointment_id = $(event.target).attr('data-id');
    api.deleteAppointment(appointment_id)
    .done(removeFromTable(event))
    .fail(failure);
  });
  $('.update-appointment').on('click', (event) => {
    event.preventDefault();
    let appointment_id = $(event.target).data('id');
    $('#appointment-id').val(appointment_id);
    $('#update-form2').removeClass('hide');
  });
};

const createAppointmentSuccess = () => {
  $('#appointments-table').html('');
  api.getAppointment()
  .done(displayAppointments)
  .fail(failure);
};

module.exports = {
  displayAppointments,
  getAppointments,
  failure,
  deleteAppointment,
  createAppointmentSuccess,
  updateAppointment
};
