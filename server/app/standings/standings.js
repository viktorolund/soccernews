'use strict';

const standings = require('./data/standings.json');

function Standings() {
    this.standingsData = standings;
}

Standings.prototype.find = function(findCB) {

    if (findCB && typeof findCB === 'function') {
        try {
            return findCB(this.standingsData);
        } catch(err) {
            return findCB(err);
        }
    } else {
        throw new Error("Kan inte returnera data");
    }
}

module.exports = Standings;
