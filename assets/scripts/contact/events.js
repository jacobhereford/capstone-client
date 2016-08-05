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

const updateContact = (event) => {
  event.preventDefault();
  let contact_id = $('#contact-id').val();
  let data = getFormFields(event.target);
  if ($('#update-1').val() === '' || $('#update-2').val() === '' || $('#update-3').val() === ''  || $('#update-4').val() === '' ) {
    $('#update-alert').removeClass('hide');
    return;
  } else {
    $('#update-alert').addClass('hide');
    $('#update-form').find('[type="text"]').val('');
    api.updateContact(data, contact_id)
    .done(ui.createContactSuccess)
    .fail(ui.failure);
  }
};

const createContact = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  if ($('#create-1').val() === '' || $('#create-2').val() === '' || $('#create-3').val() === '' || $('#create-4').val() === '') {
    $('#create-alert').removeClass('hide');
    return;
  } else {
    $('#create-alert').addClass('hide');
    $('#create-contact').find('[type="text"]').val('');
    api.createContact(data)
    .done(ui.createContactSuccess)
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
  $('#create-contact').on('submit', createContact);
  $('#update-form').on('submit', updateContact);
};

module.exports = {
  addHandlers,
};
