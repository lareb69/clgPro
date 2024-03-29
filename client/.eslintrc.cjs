module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 'off',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
        'global-require': 'off',
        'arrow-body-style': 'off',
        'react/function-component-definition': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        'react/button-has-type': 'off',
        'react/self-closing-comp': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
    },
};
