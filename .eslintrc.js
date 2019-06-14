module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        // "node": true
    },
    "extends": "airbnb",
    // eslint:recommended
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 0, //不禁用console
        "indent":["error","single"],
        "react/prefer-stateless-function":0
    },
    "settings": {
        // 'import/resolver': {
        //     webpack: {
        //       config: './webpack.common.js',
        //     }
        // },
       
    }
};