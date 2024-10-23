# Express Crash Course

Based on the youtube video https://www.youtube.com/watch?v=CnH3kAXSrmU

## Technologies

- Express.js

## Install and start

Install: `npm install`
Start dev: `npm run dev` (already includes --watch for auto-reload)

## Folder Structure

- public : static files
- routes : express routes

## .env

- PORT

## Notes

### common .JS vs ES6 modules

To use ES6 modules, you need to specify the type in the package.json file: "type": "module"

Importing modules:
Common JS: `const express = require('express');`
ES6: `import express from 'express';`

JS: `const posts = require('./routes/posts')`
ES6: `import posts from './routes/posts.js'`

Exports:
JS: `module.exports = router;`
ES6: `export default router;`
