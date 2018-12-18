var express = require('express');
var router = express.Router();

var project = require('../models/project');
// var department = require('../models/department');
var idea = require('../models/idea');

// router.get('/new', project.getAll, renderNew);

router.get('/', project.getAll, renderIndex);
//router.get('/:id/ideas', project.getAllIdeas, renderShow);
// router.get('/:id/ideas', project.getAllIdeas, renderShow);  // move to idea controller 


// router.get('/:id/ideas/new', project.getAllIdeas, renderNew);
// router.get('/:id/edit', student.find, house.getAll, renderEdit);
router.post('/:id', idea.create, redirectShow);
router.delete('/:id/idea/:idea_id', idea.delete, redirectShow);

// 
// router.post('/projects', project.create, redirectShow);
// router.delete('/projects', project.delete, redirectShow);


function renderIndex(req, res) {

    var mustacheVariables = {
        project: res.locals.project
    }
    res.render('./projects/index', mustacheVariables);
}


// function renderShow(req, res) {


//     console.log("rendering show ideas",res.locals.ideas)

//     var mustacheVariables = {
//         ideas: res.locals.ideas,
//         projectId: res.locals.ideas[0].project_id
//         // ///////////
//         // createId: res.locals.projects[0].createId
//     }
//     res.render('./projects/show', mustacheVariables);

// }

function renderNew(req, res) {
    var mustacheVariables = {
        // project: res.locals.projects,
        projectId: req.params.id
    }
    console.log("mustacheVariables ", mustacheVariables)
    res.render('./ideas/new', mustacheVariables);
}

function redirectShow(req, res) {
    res.redirect(`/ideas/${req.params.id}/ideas`);
}




// function redirectshow(req, res) {
//     res.redirect('/projects/id/ideas');
// }


module.exports = router;