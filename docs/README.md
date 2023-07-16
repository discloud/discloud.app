Documentation / [Exports](modules.md)

# Discloud.app

## Instalation

```sh
npm i discloud.app
yarn add discloud.app
```

## Links

[Documentation](https://discloud.github.io/discloud.app)  
[Github](https://github.com/discloud/discloud.app)  
[NPM](https://www.npmjs.com/package/discloud.app)  
[Discloud Server](https://discord.discloudbot.com)  

## Examples usage

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

Before continuing, make sure your [`zip`](https://docs.discloudbot.com/v/en/suport/faq/zip) contains the [`discloud.config`](https://docs.discloudbot.com/v/en/discloud.config) file.

> Upload with simply the file `path/url`:

```js
const { discloud } = require("discloud.app");

discloud.apps.create({
  file: "FILE_PATH/FILE_NAME.zip"
}); // Promise<RESTPostApiUploadResult>
```

> Upload with `Blob | Buffer | File | RawFile | ReadableStream`:

```js
const { discloud } = require("discloud.app");

discloud.apps.create({
  file: {
    data: readFileSync("FILE_PATH/FILE_NAME.zip"), // Blob | Buffer
    name: "FILE_NAME.zip"
  }
}); // Promise<RESTPostApiUploadResult>
```

> Commit with simply the file `path/url`:

```js
const { discloud } = require("discloud.app");

discloud.apps.update("APP_ID", {
  file: "FILE_PATH/FILE_NAME.zip"
}); // Promise<RESTPutApiAppCommitResult>
```

> Commit with `Blob | Buffer | File | RawFile | ReadableStream`:

```js
const { discloud } = require("discloud.app");

discloud.apps.update("APP_ID", {
  file: {
    data: readFileSync("FILE_PATH/FILE_NAME.zip"), // Blob | Buffer
    name: "FILE_NAME.zip"
  }
}); // Promise<RESTPutApiAppCommitResult>
```

> For you to send a `stream`, import the `streamToFile` function to convert:

```js
const { discloud, streamToFile } = require("discloud.app");

const file = await streamToFile(stream, "FILE_NAME.zip");

discloud.apps.create({ file }); // Promise<RESTPostApiUploadResult>
```
