# Discloud.app

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
discloud.login("DISCLOUD_TOKEN");
```

```js
// Other file
// Get instanced discloud
const { discloud } = require("discloud.app");

// ...

async function () {
  await discloud.apps.fetch("ID"); // Promise<App>
}
```
