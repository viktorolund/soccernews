'use strict';

var express = require('express'),
    router = express.Router(),
    Standings = require('./standings/standings');

/**
 *  Allow only xml and json headers
 *  On user routes go to the next route
 */
function routePermission(req, res, next) {
    var acceptsXml = req.xhr,
        acceptsJSON = (req.headers.accept.indexOf('json') !== -1);

    if (acceptsXml || acceptsJSON) {
        next();
    } else {
        next('route');
    }

}

/**
 *  standings api
 */
router.route('/standings')
    .get(routePermission, function(req, res) {
        new Standings().find(function(standingsData, err) {
            if (err) res.send(err);

            res.json(standingsData);
        });
    });

module.exports = router;
