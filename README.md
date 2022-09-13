# babel-plugin-transform-log-comments

Transforms special comments to console.\* calls, so that:

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
