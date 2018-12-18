var db = require('../db/config');

var department = {};

department.getAll = function (req, res, next) {
    db.manyOrNone("SELECT * FROM departments;")
        .then(function (result) {
            res.locals.departments = result;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

department.getAllprojects = function (req, res, next) {
    db.manyOrNone("SELECT * FROM projects where department_id = $1;", [req.params.id])
      .then(function (result) {
        res.locals.departments = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }
  



// department.find = function (req, res, next) {
//     db.one('SELECT * FROM departments WHERE id = $1;' , [req.params.id])
//       .then(function (result) {
//         res.locals.department = result;
//         next();
//       })
//       .catch(function (error) {
//         console.log(error);
//         next();
//       })
//   }
module.exports = department;
