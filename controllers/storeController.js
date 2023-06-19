const Store = require('../models/store');

const store_index = (_req, res) => {
        res.render('home/index', { title: 'Home page' });
}


// module export to questRoutes
module.exports = {
    store_index,
}
