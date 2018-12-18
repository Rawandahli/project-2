var express = require('express');
var router = express.Router();

// var project = require('../models/project');
var department = require('../models/department');
// var idea = require('../models/idea');

router.get('/', department.getAll, renderIndex);
// router.get('/new', department.getAllproject, renderNew);
router.get('/:id', department.getAllprojects, renderShow);

// router.get('/:id', department.find, project.findBydepartment, renderShow);

function renderIndex(req, res){
    var mustacheVariables = {
        department: res.locals.department
    }
    res.render('./departments/index', mustacheVariables);
  }

  function renderShow(req,res){
    //   console.log(res.locals.projects);
            var mustacheVariables = {
              department: res.locals.departments
            //   projects: res.locals.projects
            }
            res.render('./departments/show', mustacheVariables);
          }



          
        //   function renderNew(req, res) {
        //     var mustacheVariables = {
        //         department: res.locals.department
        //     }
        //     res.render('./departments/new', mustacheVariables);
        // }
        // res.send(res.locals.projects)




//   idea: res.locals.idea,





// function renderNew(req, res) {
//     var mustacheVariables = {
//         department: res.locals.departments
//     }
//     res.render('./departments/new', mustacheVariables);
// }








// function renderShow(req, res) {
//     //   res.send(res.locals.departments)
//     var mustacheVariables = {
//         department: res.locals.departments
//     }
//     res.render('./departments/show', mustacheVariables);

// }

module.exports = router;