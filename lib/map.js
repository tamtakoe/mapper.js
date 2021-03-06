'use strict';

var mapObject = require('./mapObject');

/**
 * @param {Object|Object[]} data
 * @param {Object}          schema
 * 
 * @returns {Object|Object[]}
 */
module.exports = function (data, schema) {
    if (data instanceof Array) {
        return data.map(function (object) {
            return mapObject(object, schema);
        });
    }

    return mapObject(data, schema);
};