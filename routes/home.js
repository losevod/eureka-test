const {Router} = require('express');
const router = Router();
const os = require('os'); 

router.get('/', (req, res) => {
    res.render('index',{
        title: 'Проверить пользователя',
    });
});


router.post('/', (req, res) => {
    let formData = req.body.visitor;
    if (os.userInfo().username === formData) {
        res.redirect('/userFound')
    } else {
        res.redirect('/userNotFound');
    }
    res.redirect('/userFound');
})


module.exports = router;