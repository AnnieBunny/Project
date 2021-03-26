
const placeService = require('../services/placeService');




router.post('/create', (req, res, next) => {
    let { country, description, image } = req.body;


    let placeData = {
        country,
        description,
        image,
    };
    console.log(req.body)
    placeService.create(placeData, req.user._id)
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
