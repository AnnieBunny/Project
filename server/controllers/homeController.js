const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const expenseService = require('../services/expenseService');
const Expense = require('../models/Expense');




router.get('/', (req, res,next) => {
    
    // expenseService.getAll()
    // .then( expenses => {
    //     console.log(33333)
    //     // expenses = courses.map(x => ({ ...x, createdAt: moment(x.createdAt).format('MMM Do YY, h:mm:ss a') }))
    //     res.render('home', { expenses});
    // })
    // .catch(next)

        return Expense.find({}).lean().then(expenses => {
            res.render('home', { expenses });
          
        }).catch(next)

    

});


router.get('/secret-action', isAuth, (req, res) => {
    res.send('very secret');
});

module.exports = router;