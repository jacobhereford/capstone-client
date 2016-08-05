'use strict';

const app = require('../app.js');

const createContact = (data) => {
  return $.ajax({
    url: app.host + '/contacts',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const deleteContact = (contact_id) => {
  return $.ajax({
    url: app.host + '/contacts/' + contact_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateContact = (data, contact_id) => {
  return $.ajax({
    url: app.host + '/contacts/' + contact_id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const getContact = () => {
  return $.ajax({
    url: app.host + '/contacts',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getContacts = (contact_id) => {
  return $.ajax({
    url: app.host + '/contacts/' + contact_id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


module.exports = {
  createContact,
  getContact,
  deleteContact,
  updateContact,
  getContacts
};
