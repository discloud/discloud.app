[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / discloud

# Variable: discloud

> `const` **discloud**: [`DiscloudApp`](../classes/DiscloudApp.md)

Defined in: [packages/discloud.app/src/index.ts:79](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/discloud.app/src/index.ts#L79)

This is an instance of [DiscloudApp](../classes/DiscloudApp.md)

Use this instead of instantiating the [DiscloudApp](../classes/DiscloudApp.md) class to use the library.

## Example

```js
// index.js
// Get instanced discloud
const { discloud } = require("discloud.app");

// Set token
discloud.login("DISCLOUD_TOKEN");

// Other file
// Get instanced discloud
const { discloud } = require("discloud.app");

// ...

async function () {
  await discloud.apps.fetch("ID"); // Promise<App>
}
```
