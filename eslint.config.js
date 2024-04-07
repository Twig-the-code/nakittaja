import globals from 'globals'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import babelParser from '@babel/eslint-parser'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: babelParser
    }
  },
  ...compat.extends('standard'),
  {
    ...reactRecommended,
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: babelParser
    }
  }
]
