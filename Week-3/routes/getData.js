const express = require('express');
const router = express();


router.get('/', (req, res) => {
    let { number } = req.query;

    if( !number ) {
    res.send('Lack of Parameter');
    } else if( isNaN(number) || number < 1 ) {
        res.send("Wrong Parameter");
    } else {
        let sum = 0;
        for ( let i = 1; i <= number; i++ ) {
            sum += i;  
        } res.send(`${sum}`);
    }

})









module.exports = router;
