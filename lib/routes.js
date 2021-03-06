// ----------------------------------------------------------------------------
//
// routes.js
//
// ----------------------------------------------------------------------------

var talks = require('../data/talks.js');

// ----------------------------------------------------------------------------

exports.index = function(req, res) {
    res.render(
        'index',
        { title: 'Node.js NZ' }
    );
};

exports.talks = function(req, res) {
    res.render(
        'talks',
        { talks : talks }
    );
};

exports.about = function(req, res) {
    res.render('about');
};

// ----------------------------------------------------------------------------
