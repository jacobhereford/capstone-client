'use strict';

const app = require('../app.js');

const createAppointment = (data) => {
  return $.ajax({
    url: app.host + '/appointments',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const deleteAppointment = (appointment_id) => {
  debugger;
  return $.ajax({
    url: app.host + '/appointments/' + appointment_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateAppointment = (data, appointment_id) => {
  return $.ajax({
    url: app.host + '/appointments/' + appointment_id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const getAppointment = () => {
  return $.ajax({
    url: app.host + '/appointments',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getAppointments = (appointment_id) => {
  return $.ajax({
    url: app.host + '/appointments/' + appointment_id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


module.exports = {
  createAppointment,
  getAppointment,
  deleteAppointment,
  updateAppointment,
  getAppointments
};
