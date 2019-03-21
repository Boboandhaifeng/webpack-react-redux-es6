module.exports = {
    root: true,    
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    "plugins": [
        "react",
        "import"
    ],
    "parser": "babel-eslint",
    rules: {
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 1,
        "indent": ["error", 2],
        // "quotes": ["error", "double"],
        // "semi": ["error", "always"],
        // "no-console": "error",
        "arrow-parens": 0
    }
}