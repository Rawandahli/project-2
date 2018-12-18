var express = require('express');
var router = express.Router();

// var project = require('../models/project');
// var department = require('../models/department');


var idea = require('../models/idea');


router.get('/project/:project_id', idea.getAll , renderShow);

router.get('/project/:project_id/new', idea.getAll ,renderNew);

router.post('/project/:project_id' , idea.create, idea.getAll , renderShow )

router.delete('/project/:project_id/:idea_id', idea.delete, redirectShow);

// router.get('project/:projectId', idea.getAll , renderShow);

// function renderIndex(req, res) {

//     var mustacheVariables = {
//         idea: res.locals.idea
//     }
//     res.render('./ideas/index', mustacheVariables);
// }


function renderShow(req, res) {
    console.log("rendering show ideas",res.locals.ideas)

    if(res.locals.ideas[0] != null){
    var mustacheVariables = {
        ideas: res.locals.ideas,
        projectId: res.locals.ideas[0].project_id
        // ///////////
        // createId: res.locals.projects[0].createId
    }
}
    res.render('./ideas/show', mustacheVariables);

}

    
    
function renderNew(req, res) {
    console.log("res.locals" ,res.locals)
    var mustacheVariables = {
        // project: res.locals.projects,
        ideas: res.locals.ideas,
        projectId: res.locals.ideas[0].project_id
    }
    console.log("mustacheVariables ", mustacheVariables);
    res.render('./ideas/new', mustacheVariables);
}

        
    function redirectShow(req, res) {
        res.redirect(`/project/${req.params.project_id}`);
    }

module.exports = router;