'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
// const app = require('../app.js');
const getFormFields = require('../../../lib/get-form-fields.js');

// const displayChores = () => {
//   api.displayChores()
//   .done(ui.displayChores)
//   .fail(ui.failure);
// };

const updateAppointment = (event) => {
  event.preventDefault();
  let appointment_id = $('#appointment-id').val();
  let data = getFormFields(event.target);
  if ($('#update-5').val() === '' || $('#update-6').val() === '' || $('#update-7').val() === '') {
    $('#update-alert2').removeClass('hide');
    return;
  } else {
    $('#update-alert2').addClass('hide');
    $('#update-form2').find('[type="text"]').val('');
    api.updateAppointment(data, appointment_id)
    .done(ui.createAppointmentSuccess)
    .fail(ui.failure);
  }
};

const createAppointment = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  if ($('#create-5').val() === '' || $('#create-6').val() === '' || $('#create-7').val() === '' ) {
    $('#create-alert2').removeClass('hide');
    return;
  } else {
    $('#create-alert2').addClass('hide');
    $('#create-appointment').find('[type="text"]').val('');
    api.createAppointment(data)
    .done(ui.createAppointmentSuccess)
    .fail(ui.failure);
  }
};

// const deleteChore = (event) => {
//   event.preventDefault();
//   let chore_id = $(event.target).data('id');
//   api.deleteChore(chore_id)
//   .done(ui.deleteChoreSuccess)
//   .fail(ui.failure);
// };

const addHandlers = () => {
  $('#create-appointment').on('submit', createAppointment);
  $('#update-form2').on('submit', updateAppointment);
};

module.exports = {
  addHandlers,
};
