const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('Hello, My Server!')
})

router.get('/myName', (req, res) => {
    const name = req.cookies.name;
    res.render('layout', { name });
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






module.exports = router;
