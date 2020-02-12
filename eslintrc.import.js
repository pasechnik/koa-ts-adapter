module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "ignorePatterns": [
        "node_modules",
        "dist",
        "coverage"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "prefixWithI": [
            0
        ],
        "prettier/prettier": [
            "error"
        ],
        "arrow-body-style": [
            0
        ],
        "curly": [
            0
        ],
        "lines-around-comment": [
            0
        ],
        "max-len": "off",
        "no-confusing-arrow": [
            0
        ],
        "no-mixed-operators": [
            0
        ],
        "no-tabs": [
            0
        ],
        "no-unexpected-multiline": [
            0
        ],
        "prefer-arrow-callback": [
            0
        ],
        "quotes": [
            0
        ],
        "array-bracket-newline": [
            "off"
        ],
        "array-bracket-spacing": [
            "off"
        ],
        "array-element-newline": [
            "off"
        ],
        "arrow-parens": [
            "off",
            "as-needed"
        ],
        "arrow-spacing": [
            "off"
        ],
        "block-spacing": [
            "off"
        ],
        "brace-style": [
            "off"
        ],
        "comma-dangle": "off",
        "comma-spacing": [
            "off"
        ],
        "comma-style": [
            "off"
        ],
        "computed-property-spacing": [
            "off"
        ],
        "dot-location": [
            "off"
        ],
        "eol-last": "off",
        "func-call-spacing": [
            "off"
        ],
        "function-call-argument-newline": [
            "off"
        ],
        "function-paren-newline": [
            "off"
        ],
        "generator-star": [
            "off"
        ],
        "generator-star-spacing": [
            "off"
        ],
        "implicit-arrow-linebreak": [
            "off"
        ],
        "indent": [
            "off"
        ],
        "jsx-quotes": [
            "off"
        ],
        "key-spacing": [
            "off"
        ],
        "keyword-spacing": [
            "off"
        ],
        "linebreak-style": "off",
        "multiline-ternary": [
            "off"
        ],
        "newline-per-chained-call": "off",
        "new-parens": "off",
        "no-arrow-condition": [
            "off"
        ],
        "no-comma-dangle": [
            "off"
        ],
        "no-extra-parens": [
            "off"
        ],
        "no-extra-semi": "off",
        "no-floating-decimal": [
            "off"
        ],
        "no-mixed-spaces-and-tabs": [
            "off"
        ],
        "no-multi-spaces": [
            "off"
        ],
        "no-multiple-empty-lines": "off",
        "no-reserved-keys": [
            "off"
        ],
        "no-space-before-semi": [
            "off"
        ],
        "no-trailing-spaces": "off",
        "no-whitespace-before-property": [
            "off"
        ],
        "no-wrap-func": [
            "off"
        ],
        "nonblock-statement-body-position": [
            "off"
        ],
        "object-curly-newline": [
            "off"
        ],
        "object-curly-spacing": [
            "off"
        ],
        "object-property-newline": [
            "off"
        ],
        "one-var-declaration-per-line": [
            "off"
        ],
        "operator-linebreak": [
            "off"
        ],
        "padded-blocks": [
            "off"
        ],
        "quote-props": "off",
        "rest-spread-spacing": [
            "off"
        ],
        "semi": [
            "off"
        ],
        "semi-spacing": [
            "off"
        ],
        "semi-style": [
            "off"
        ],
        "space-after-function-name": [
            "off"
        ],
        "space-after-keywords": [
            "off"
        ],
        "space-before-blocks": [
            "off"
        ],
        "space-before-function-paren": "off",
        "space-before-function-parentheses": [
            "off"
        ],
        "space-before-keywords": [
            "off"
        ],
        "space-in-brackets": [
            "off"
        ],
        "space-in-parens": [
            "off",
            "never"
        ],
        "space-infix-ops": [
            "off"
        ],
        "space-return-throw-case": [
            "off"
        ],
        "space-unary-ops": [
            "off"
        ],
        "space-unary-word-ops": [
            "off"
        ],
        "switch-colon-spacing": [
            "off"
        ],
        "template-curly-spacing": [
            "off"
        ],
        "template-tag-spacing": [
            "off"
        ],
        "unicode-bom": [
            "off"
        ],
        "wrap-iife": [
            "off"
        ],
        "wrap-regex": [
            "off"
        ],
        "yield-star-spacing": [
            "off"
        ],
        "indent-legacy": [
            "off"
        ],
        "no-spaced-func": [
            "off"
        ],
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/brace-style": [
            "off"
        ],
        "@typescript-eslint/comma-spacing": [
            "off"
        ],
        "@typescript-eslint/func-call-spacing": [
            "off"
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/no-extra-parens": [
            "off"
        ],
        "@typescript-eslint/no-extra-semi": [
            "off"
        ],
        "@typescript-eslint/semi": [
            "off",
            null
        ],
        "@typescript-eslint/space-before-function-paren": [
            "off"
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/adjacent-overload-signatures": [
            "error"
        ],
        "@typescript-eslint/ban-ts-ignore": [
            "error"
        ],
        "@typescript-eslint/ban-types": [
            "error"
        ],
        "camelcase": "error",
        "@typescript-eslint/camelcase": [
            "error"
        ],
        "@typescript-eslint/class-name-casing": [
            "error"
        ],
        "@typescript-eslint/consistent-type-assertions": [
            "error"
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "warn"
        ],
        "@typescript-eslint/interface-name-prefix": [
            "error"
        ],
        "no-array-constructor": [
            "off"
        ],
        "@typescript-eslint/no-array-constructor": [
            "error"
        ],
        "no-empty-function": [
            "off"
        ],
        "@typescript-eslint/no-empty-function": [
            "error"
        ],
        "@typescript-eslint/no-empty-interface": [
            "error"
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": [
            "error"
        ],
        "@typescript-eslint/no-misused-new": [
            "error"
        ],
        "@typescript-eslint/no-namespace": [
            "error"
        ],
        "@typescript-eslint/no-non-null-assertion": [
            "warn"
        ],
        "@typescript-eslint/no-this-alias": [
            "error"
        ],
        "no-unused-vars": [
            "off"
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn"
        ],
        "no-use-before-define": [
            "off"
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": [
            "error"
        ],
        "@typescript-eslint/prefer-namespace-keyword": [
            "error"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error"
        ],
        "no-var": [
            "error"
        ],
        "prefer-const": [
            "error"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "error"
        ],
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/unified-signatures": "error",
        "complexity": "off",
        "constructor-super": "error",
        "dot-notation": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "max-classes-per-file": [
            "error",
            1
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-new-wrappers": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "error",
        "radix": "error",
        "spaced-comment": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "jsdoc-format": true,
                    "no-reference-import": true
                }
            }
        ]
    },
    "settings": {}
};
