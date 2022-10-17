module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            // your babel options
            presets: ["@babel/preset-react"],
        },

    },
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    overrides: [
    ],
    plugins: [
        "react"
    ],
    rules: {
        "react/react-in-jsx-scope": "off"
      }
}

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
