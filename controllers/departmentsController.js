var express = require('express');
var router = express.Router();

var department = require('../models/department');


router.get('/', department.getAll, renderIndex);

router.get('/:id', department.getAllprojects, renderShow);


function renderIndex(req, res) {
  var mustacheVariables = {
    department: res.locals.department
  }
  res.render('./departments/index', mustacheVariables);
}

function renderShow(req, res) {
 
  var mustacheVariables = {
    department: res.locals.departments
     //   console.log(res.locals.projects);
  }
  res.render('./departments/show', mustacheVariables);
}




module.exports = router;