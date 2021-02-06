/**
 * @fileoverview test
 * @author SeungukLee
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-deprecated-funcs"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-deprecated-funcs", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "test",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
