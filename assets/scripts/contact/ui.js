'use strict';

const template = require('../../templates/contactTemplate.handlebars');
const api = require('./api.js');
// const getFormFields = require('../../../lib/get-form-fields.js');

const failure = (error) => {
  console.error(error);
};

const getContacts = () => {
  api.getContacts()
  .done(displayContacts)
  .fail(failure);
};

const deleteContact = (event) => {
  event.preventDefault();
  let contact_id = $(event.target).attr('data-id');
  api.deleteContact(contact_id)
  .done(removeFromTable(event))
  .fail(failure);
};

const updateContact = (data, contact_id) => {
  api.updateContact(data, contact_id)
  .done(getContacts)
  .fail();
};

const removeFromTable = (e) => {
  $(e.target).parents('tr').remove();
};

const displayContacts = (data) => {
  let contacts = data;
  $('#update-form').addClass('hide');
  $('#contacts-table').html('');
  $('#contacts-table').html(template(contacts));
  $('.delete-contact').click(deleteContact);
  $('.update-contact').on('click', (event) => {
    event.preventDefault();
    let contact_id = $(event.target).data('id');
    $('#contact-id').val(contact_id);
    $('#update-form').removeClass('hide');
  });
};

const createContactSuccess = () => {
  $('#contacts-table').html('');
  api.getContact()
  .done(displayContacts)
  .fail(failure);
};

module.exports = {
  displayContacts,
  getContacts,
  failure,
  deleteContact,
  createContactSuccess,
updateContact
};
