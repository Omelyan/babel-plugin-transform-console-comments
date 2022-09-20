### babel-plugin-transform-console-comments

Transforms _special comments_ to console.\* calls, so that:

```javascript
// > Start loading application...
await appLoading();
// > The application has been loaded.
```

becomes:

```javascript
console.log("Start loading application...");
await appLoading();
console.log("The application has been loaded.");
```

I thought it might be a little bit prettier in some cases :man_shrugging:.

The very first version; only console.log with string literal is currently supported; I plan to add template literals and additional options in the future.

# Installation

`npm install babel-plugin-transform-console-comments --save-dev`

Add it to your plugins array in your babel config (e.g. babel.config.js file):

```javascript
module.exports = {
  plugins: [
    "transform-console-comments",
    // ...
  ],
};
```
