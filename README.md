# babel-plugin-transform-log-comments
Transform special comments like // > to console.* calls:
```javascript
// > Start loading application...
await appLoading()
// > The application has been loaded.
```
becomes:
```javascript
console.log('Start loading application...');
await appLoading();
console.log('The application has been loaded.');
```
