module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
		"import",
		"react",
	],
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "warn",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/prefer-for-of": "warn",
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/unified-signatures": "warn",
		"comma-dangle": "warn",
		"constructor-super": "error",
		"semi": ["warn", "always"],
		eqeqeq: ["error", "always"],
		"import/no-deprecated": "warn",
		"import/no-extraneous-dependencies": "error",
		"import/no-unassigned-import": [
            "warn",
            { "allow": ["**/*.css"] }
        ],
		"no-cond-assign": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty": [
			"error",
			{
				allowEmptyCatch: true,
			},
		],
		"no-invalid-this": "error",
		"no-new-wrappers": "error",
		"no-param-reassign": "error",
		"no-redeclare": "error",
		"no-sequences": "error",
		"no-shadow": "warn",
		"no-throw-literal": "error",
		"no-unsafe-finally": "error",
		"no-unused-labels": "error",
		"no-var": "warn",
		"no-void": "error",
		"prefer-const": "warn",
		"react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_",
            }
        ],
        "no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_",
            }
        ],

	},
	settings: {
		jsdoc: {
			tagNamePreference: {
				returns: "return",
			},
		},
	},
};
