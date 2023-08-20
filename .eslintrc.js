module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "sourceType": "module",
        "requireConfigFile":false,
        "babelOptions": {
            "presets": ["@babel/preset-react"]
         },
    },
    "parser": "@babel/eslint-parser",
    "plugins": [
       "react"
    ],
    "rules": {
        'require-atomic-updates': [0],
    }
};