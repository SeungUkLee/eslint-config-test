/**
 * @fileoverview test
 * @author SeungukLee
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const DEPRECATED_FUNCS = [
    'getFriendNames',
    'getFamilyNames'
]
const RECOMMENDED_FUNC = 'getNames'

module.exports = {
    meta: {
        docs: {
            description: "test",
            category: "Fill me in",
            recommended: false
        },
        fixable: true,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression (node) {
                const { callee } = node;
                if (DEPRECATED_FUNCS.includes(calle.name)) {
                    context.report({
                        node,
                        data: { deprecatedFunc: name },
                        message: `'{{deprecatedFunc}}()' 은 deprecated 되었습니다.`,
                        fix: fixer => fixer.replaceText(callee, RECOMMENDED_FUNC)
                    })
                }
            }
        };
    }
};
