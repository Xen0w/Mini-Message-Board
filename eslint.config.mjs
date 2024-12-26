import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],

    // Define globals: browser and node (including process)
    languageOptions: {
      globals: {
        ...globals.browser, // Keep the browser globals
        ...globals.node, // Add the Node.js globals (including process)
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
