export default {
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    env: {
        "browser": true,
        "es2021": true
    },
    extends: ["eslint:recommended", 'airbnb', 'prettier'],
    plugins: ['prettier'],
    "rules": {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 2,
                trailingComma: 'all',
                printWidth: 100,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
    }
};
