var express = require('express');
var router = express.Router();


var idea = require('../models/idea');


router.get('/project/:project_id', idea.getAll, renderShow);

router.get('/project/:project_id/new', idea.getAll, renderNew);

router.post('/project/:project_id', idea.create, idea.getAll, renderShow);

router.delete('/project/:project_id/:idea_id', idea.delete, redirectShow);

//update 

// router.get('/project/:project_id/:idea_id',idea.getAll ,renderNew)
// router.put('/project/:project_id/:idea_id/edit', idea.update,redirectshow2)




function renderShow(req, res) {
    console.log(req.params)

    var mustacheVariables = {
        ideas: res.locals.ideas,
        projectId: req.params.project_id
      
    }
    // }
    res.render('./ideas/show', mustacheVariables);

}



function renderNew(req, res) {
    console.log("res.locals", res.locals)
    var mustacheVariables = {
      
        ideas: res.locals.ideas,
        projectId: req.params.project_id
    }
    console.log("mustacheVariables ", mustacheVariables);
    res.render('./ideas/new', mustacheVariables);
}


function redirectShow(req, res) {
    console.log("aljbjbjkb")
    res.redirect(`/ideas/project/${req.params.project_id}`);
}




function redirectshow2(req, res) {
    res.redirect(`/ideas/project/project_id${req.params.project_id}`);
}

module.exports = router;