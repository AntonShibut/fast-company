module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 0,
		indent: [2, 'tab'],
		'no-tabs': 0,
		semi: ['error', 'never'],
		'space-before-function-paren': ['error', 'never'],
		quotes: ['error', 'single']
	}
}
