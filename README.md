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

## How to `upload`/`commit` your app

Before continuing, make sure your [`rar/zip`](https://docs.discloudbot.com/v/en/suport/faq/zip) contains the [`discloud.config`](https://docs.discloudbot.com/v/en/suport/faq/discloud.config) file.

> Upload with simply the file `path/url`:

```js
const { discloud } = require("discloud.app");

discloud.apps.create({
  file: "FILE_PATH/FILE_NAME.zip" // rar | zip
});
```

> Upload with `Blob | Buffer`:

```js
const { discloud } = require("discloud.app");

discloud.apps.create({
  file: {
    data: readFileSync("FILE_PATH/FILE_NAME.zip"), // Blob | Buffer
    name: "FILE_NAME.zip"
  }
});
```

> Commit with simply the file `path/url`:

```js
const { discloud } = require("discloud.app");

discloud.apps.update("APP_ID", {
  file: "FILE_PATH/FILE_NAME.zip" // rar | zip
});
```

> Commit with `Blob | Buffer`:

```js
const { discloud } = require("discloud.app");

discloud.apps.update("APP_ID", {
  file: {
    data: readFileSync("FILE_PATH/FILE_NAME.zip"), // Blob | Buffer
    name: "FILE_NAME.zip"
  }
});
```

> For you to send a `stream`, import the `streamToBlob` function to convert:

```js
const { discloud, streamToBlob } = require("discloud.app");

const blob = await streamToBlob(stream);

discloud.apps.create({
  file: {
    data: blob, // Blob | Buffer
    name: "FILE_NAME.zip"
  }
});
```
