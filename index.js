
'use strict'; // this means that all of our processes have to follow the very letter of Js law 

var moment = require('moment'); // the older version of import  you need to npm install mom

/**
 * Returns a string element with a footer and updating year
 * @param {string} name //expects a fuction arg  of name
 * @return {string} // expets a string to be return
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};