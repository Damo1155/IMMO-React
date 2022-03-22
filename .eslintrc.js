module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "react-hooks"
    ],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off"
    },
    settings: {
        react: {
            "pragma": "React",
            "version": "detect"
        }
    }
}