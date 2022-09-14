### babel-plugin-transform-console-comments

Transforms _special comments_ to console.\* calls, so that:

```javascript
// > Start loading application...
await appLoading();
// > The application has been loaded.
```

becomes:

```javascript
console.log('Start loading application...');
await appLoading();
console.log('The application has been loaded.');
```

I thought it might be a little bit prettier in some cases :man_shrugging:.

# Installation

`npm install babel-plugin-transform-console-comments --save-dev`

Add it to your plugins array in your babel config (e.g. babel.config.js file):

```javascript
module.exports = {
  plugins: [
    'transform-console-comments',
    // ...
  ],
};
```
