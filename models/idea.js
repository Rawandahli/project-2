var db = require('../db/config');
var idea = {};


idea.getAll = function (req, res, next) {
    
    db.manyOrNone("SELECT * FROM ideas where project_id = $1;", [req.params.project_id])
      .then(function (result) {
        res.locals.ideas = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }




idea.find = function (req, res, next) {
    db.one("SELECT * FROM ideas WHERE id = $1;", [req.params.id])
        .then(function (result) {
            res.locals.idea = result;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

idea.create = function (req, res, next) {

    console.log("ideacreat" , req.body ,req.params.id )
    db.one('INSERT INTO ideas(idea, project_id) VALUES($1, $2) RETURNING project_id;',
        [req.body.idea, parseInt(req.params.project_id)])
        .then(function (result) {
            console.log(result)
            res.locals.projectId = result.id;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}

/////////////////////////////////// 






idea.delete = function (req, res, next) {
    console.log(req.body);
    console.log("delete idea");
    console.log(req.params.idea_id);
    db.one('DELETE FROM ideas WHERE id=$1',
        [req.params.idea_id])
        .then(function (result) {

            console.log(" success result")
            // res.locals.projectId = result.id;
            next();
        })
        .catch(function (error) {
            console.log(error);
            next();
        })
}



idea.getAllIdeas = function (req, res, next) {
    db.manyOrNone("SELECT * FROM ideas where department_id = $1;", [req.params.id])
      .then(function (result) {
        res.locals.idea = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }



// student.create 
// = function (req, res, next) {

//   idea.update = function (req, res, next) {
//    

//   idea.delete = function (req, res, next) {


//   idea.findByHouse = function (req, res, next) {


module.exports = idea;