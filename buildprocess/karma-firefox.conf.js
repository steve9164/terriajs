'use strict';

/*global require*/
var createKarmaBaseConfig = require('./createKarmaBaseConfig');

module.exports = function(config) {
    var options = Object.assign({}, createKarmaBaseConfig(config), {
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless']
            }
        },
        browsers: ['FirefoxHeadless'],
    });

    config.set(options);
};
