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

// 
project.create = function (req, res, next) {
  // console.log(req.body);
  // console.log("creat project");
  // console.log(req.params.id);

  // db.one('INSERT INTO projects(name, department_id) VALUES($1, $2) ;',
console.log(req.body.name)
  db.one('INSERT INTO projects(name)VALUES($1) RETURNING id;',
    [req.body.name])
    .then(function (result) {
      res.locals.projectId = result.id;
      //^mara7 a7tajh
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}


// -----------------------------------------------//

project.delete = function (req, res, next) {
  // console.log("delete project");
  // console.log(req.params.project_id);
  db.none('DELETE FROM ideas WHERE project_id=$1; DELETE FROM projects WHERE id=$1 ;', [req.params.id])
      .then(function (result) {

          console.log("success result")
          // res.locals.projectId = result.id;
          next();
      })
      .catch(function (error) {
          console.log(error);
          next();
      })
}
// -----------------------------------------------//


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