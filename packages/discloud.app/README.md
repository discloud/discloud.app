# discloud.app

## Example

Install discloud.app

```sh
npm i discloud.app
yarn add discloud.app
```

Usage

```js
// index.js
// Get instanced discloud
const { discloud } = require("discloud.app");

// Set token
await discloud.login("DISCLOUD_TOKEN");
```

```js
// Other file
// Get instanced discloud
const { discloud } = require("discloud.app");

await discloud.apps.fetch("ID"); // App
```
