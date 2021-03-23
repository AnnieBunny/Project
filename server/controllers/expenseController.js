const router = require('express').Router();
const expenseService = require('../services/expenseService');

router.get('/create', (req, res) => {
    res.render('create');
});


router.post('/create', (req, res, next) => {
    let { merchant, total, category, description,report } = req.body;


    let expenseData = {
        merchant,
        total,
        category,
        description,
        report: Boolean(report),

    };
    console.log(req.body)
   expenseService.create(expenseData, req.user._id)
        .then(() => res.redirect('/'))
        // .catch(() => res.status(500).end())
        .catch(next)
});

router.get('/:expenseId/report', (req, res, next) => {
 
    expenseService.getOne(req.params.expenseId)
 
        .then(expense => {

            res.render('report',{ expense})
            
        })
        .catch(next);

});


router.get('/:expenseId/delete', (req, res, next) => {

    expenseService.deleteOne(req.params.expenseId)
    .then(() => {
        res.redirect('/');
    })
    .catch(next)


});

router.get('/expense/newAmount', (req, res, next) => {

    const {amount} = req.body;

    expenseService.updateOne(req.locals.user._id, amount)
    .then(() => {

        
        res.render('/');
    })
    .catch(next)
})



module.exports = router;
