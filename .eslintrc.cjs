module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    ignorePatterns: ["src/components/winduum/*"],
    parserOptions: {
        ecmaVersion: 'latest'
    }
}
