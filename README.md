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

[Examples usage](#examples-usage)  
[How to upload/commit your application](#how-to-uploadcommit-your-application)  
[How to fetch your application](#how-to-fetch-your-application)  
[How to start, stop, restart or delete your application](#how-to-start-stop-restart-or-delete-your-application)  
[How to view app logs](#how-to-view-app-logs)  
[How to backup apps](#how-to-backup-apps)  
[How to see your app statuses](#how-to-see-your-app-statuses)  
[How to change your app's name and/or avatar](#how-to-change-your-apps-name-andor-avatar)  
[How to change the amount of RAM in the app](#how-to-change-the-amount-of-ram-in-the-app)  
[How to install or uninstall APT](#how-to-install-or-uninstall-apt)  
[How to fetch/add/edit/remove moderators for your application](#how-to-fetchaddeditremove-moderators-for-your-application)  

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

### How to `upload`/`commit` your application

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

### How to `fetch` your application

```js
const { discloud } = require("discloud.app");

discloud.apps.fetch("APP_ID"); // Promise<App>
discloud.apps.fetch(/* "all" | undefined */); // Promise<Map<string, App>>
```

### How to `start`, `stop`, `restart` or `delete` your application

```js
const { discloud } = require("discloud.app");

discloud.apps.start("APP_ID"); // Promise<RESTApiBaseResult>
discloud.apps.start(/* "all" | undefined */); // Promise<ApiAppManagerStartedAll>

discloud.apps.stop("APP_ID"); // Promise<RESTApiBaseResult>
discloud.apps.stop(/* "all" | undefined */); // Promise<ApiAppManagerStopedAll>

discloud.apps.restart("APP_ID"); // Promise<RESTApiBaseResult>
discloud.apps.restart(/* "all" | undefined */); // Promise<ApiAppManagerRestartedAll>

discloud.apps.delete("APP_ID"); // Promise<RESTDeleteApiAppDeleteResult>
discloud.apps.delete(/* "all" | undefined */); // Promise<ApiAppManagerRemovedAll>
```

### How to view app `logs`

```js
const { discloud } = require("discloud.app");

discloud.apps.terminal("APP_ID"); // Promise<ApiTerminal>
discloud.apps.terminal(/* "all" | undefined */); // Promise<Map<string, ApiTerminal>>
```

### How to `backup` apps

```js
const { discloud } = require("discloud.app");

discloud.apps.backup("APP_ID"); // Promise<AppBackup>
discloud.apps.backup(/* "all" | undefined */); // Promise<Map<string, AppBackup>>
```

### How to see your app `statuses`

```js
const { discloud } = require("discloud.app");

discloud.apps.status("APP_ID"); // Promise<AppStatus>
discloud.apps.status(/* "all" | undefined */); // Promise<Map<string, AppStatus>>
```

### How to change your app's `name` and/or `avatar`

```js
const { discloud } = require("discloud.app");

discloud.apps.profile("APP_ID", {
  avatarURL // Optional URL ending with JPG, JPEG or PNG
  name // Optional text up to 30 characters
}); // Promise<RESTApiBaseResult>
```

### How to change the amount of `RAM` in the app

```js
const { discloud } = require("discloud.app");

discloud.apps.ram("APP_ID", 100 /* number greater than 100 */); // Promise<RESTPutApiAppRamResult>
// Remember that if your app type is site, the minimum is 512
```

### How to install or uninstall `APT`

```js
const { discloud } = require("discloud.app");

// Install APTs
discloud.appApt.install("APP_ID", [
  "canvas",
  "ffmpeg",
  "java",
  "libgl",
  "openssl",
  "puppeteer",
  "tools",
]); // Promise<RESTPutApiAppAptResult>

// Uninstall APTs
discloud.appApt.uninstall("APP_ID", ["canvas", "ffmpeg"]); // Promise<RESTDeleteApiAppAptResult>
```

### How to `fetch`/`add`/`edit`/`remove` moderators for your application

```js
const { discloud, ModPermissions } = require("discloud.app");

// Fetch mods and permissions
discloud.appTeam.fetch("APP_ID"); // Promise<ApiAppTeam[]>

// Add a mod
discloud.appTeam.create("APP_ID", "MOD_ID", [
  "backup_app",
  "commit_app",
  "edit_ram",
  "logs_app",
  "restart_app",
  "start_app",
  "status_app",
  "stop_app",
]); // Promise<ApiAppTeamManager>

// Edit mod permissions
discloud.appTeam.edit("APP_ID", "MOD_ID", [
  ModPermissions.backup_app,
  ModPermissions.commit_app,
  ModPermissions.edit_ram,
  ModPermissions.logs_app,
  ModPermissions.restart_app,
  ModPermissions.start_app,
  ModPermissions.status_app,
  ModPermissions.stop_app,
]); // Promise<ApiAppTeamManager>

// Remove a mod
discloud.appTeam.delete("APP_ID", "MOD_ID"); // Promise<RESTApiBaseResult>
```
