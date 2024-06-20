module.exports = {
    // 'parser': '@babel/eslint-parser',
    env: {
        browser: true,
        es2021: true,
        node: true,
    },

    settings: {
        // 'react': {
        //     'version': 'detect',
        // },
    },

    extends: [
        'eslint:recommended',
        // 'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
    ],

    overrides: [],

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // 'ecmaFeatures': {
        //     'jsx': true,
        // },
    },

    plugins: [
        // 'react',
        'import',
    ],

    rules: {
        indent: ['error', 4],
        'eol-last': ['error', 'always'],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-extra-parens': 'error',
        camelcase: 'error',
        curly: 'error',
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
    },
};
