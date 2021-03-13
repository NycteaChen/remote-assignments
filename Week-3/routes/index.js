const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('Hello, My Server!')
})

router.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if(name){
        res.render('layout', { name });
    } else {
        res.redirect('/enterName');
    }
})

router.get('/enterName', (req, res) => {
    res.render('name');
})

//使用get方法，資料會以query string儲存在網址上 > trackName?name=使用者輸入
//用req.query將value取出(使用req.body會出現undefined)
router.get('/trackName', (req, res) => {
    res.cookie('name', req.query.name);
    res.redirect('/myName');
});


router.post('/clearName', (req, res) => {
    res.clearCookie('name');
    res.redirect('/myName')
})


router.post('/sum', (req,res) => {
    let { number } = req.body;
    let sum = 0;
    if ( number >= 1) {
        for ( let i = 0; i <= number; i++ ){
            sum += i;
        } res.render('sum', { sum } );
    } else {
        res.render('sum');
    }
})

router.post('/goodbye', (req, res) => {
    res.redirect("/sum.html");
})





module.exports = router;
