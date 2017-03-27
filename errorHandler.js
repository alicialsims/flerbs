const express = require('express');

const errorHandler = (err, req, res, next) =>{
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}

module.exports = errorHandler;