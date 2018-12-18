var db = require('../db/config');
var project = {};

project.getAll = function (req, res, next) {
  db.manyOrNone("SELECT * FROM projects;")
    .then(function (result) {
      res.locals.projects = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}
// project.getAllIdeas = function (req, res, next) {
//   db.manyOrNone("SELECT * FROM ideas where project_id = $1;", [req.params.id])
//     .then(function (result) {
//       res.locals.ideas = result;
//       next();
//     })
//     .catch(function (error) {
//       console.log(error);
//       next();
//     })
// }
 

// project.create = function (req, res, next) {
//   console.log(req.body);
//   console.log("creat project");
//   console.log(req.params.id);
//   db.one('INSERT INTO projects(name, department_id) VALUES($1, $2) RETURNING department_id;',
//       [req.body.project, parseInt(req.params.id)])
//       .then(function (result) {
//           console.log(result)
//           res.locals.createId = result.id;
//           next();
//       })
//       .catch(function (error) {
//           console.log(error);
//           next();
//       })
// }


project.find = function (req, res, next) {
  db.one("SELECT * FROM projects WHERE id = $1;", [req.params.id])
    .then(function (result) {
      res.locals.project = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}


module.exports = project;