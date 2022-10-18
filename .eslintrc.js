module.exports = {
    extends: 'react-app',
    rules: {
        "eqeqeq": "off",

        "react/prop-types": "off"

    }
}

// module.exports = {
//     parser: "@babel/eslint-parser",
//     parserOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module",
//         requireConfigFile: false,
//         babelOptions: {
//             babelrc: false,
//             configFile: false,
//             // your babel options
//             presets: ["@babel/preset-react"],
//         },

//     },
//     env: {
//         browser: true,
//         es2021: true,
//         node: true
//     },
//     extends: [
//         "eslint:recommended",
//         "plugin:react/recommended"
//     ],
//     overrides: [
//     ],
//     plugins: [
//         "react"
//     ],
//     rules: {
//         "react/prop-types": "off",
//         "jsx-a11y/rule-name": 2,
//         "react/react-in-jsx-scope": "off",
//         "no-underscore-dangle": ["error", { "allow": [_id, b_codes_id] }],
//         "react/prop-types": "[<enabled>, { ignore: <ignore>, customValidators: <customValidator>, skipUndeclared: <skipUndeclared> }]"
//     },
//     "globals": {
//         "_": true,
//         "CSSModule": true,
//         "Streamy": true,
//         "ReactClass": true,
//         "SyntheticKeyboardEvent": true,
//       },
// }

// module.exports = {
//     parser: "@babel/eslint-parser",
//     parserOptions: {
//       requireConfigFile: false,
//       babelOptions: {
//         babelrc: false,
//         configFile: false,
//         // your babel options
//         presets: ["@babel/preset-env"],
//       },
//     },
//   };
