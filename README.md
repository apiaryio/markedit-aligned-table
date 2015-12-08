# markedit-aligned-table

[![CircleCI Build Status](https://circleci.com/gh/apiaryio/markedit-aligned-table.svg?style=shield)](https://circleci.com/gh/apiaryio/markedit-aligned-table)

This is modified version of [MarkedIt's table renderer](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_block/table.js). The only difference is that it uses `align="where"` instead of `style="text-align: where"` for column alignment, because the latter is stripped during sanitisation by Google CAJA's [sanitizer](https://www.npmjs.com/package/sanitizer).

## Installation

```shell
npm install markedit-aligned-table
```

## Usage

```js
	var md = require('markdown-it')('commonmark')
		.disable('table')
		.use(require('markedit-aligned-table'));
```
