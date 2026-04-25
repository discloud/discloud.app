# Discloud.app

A powerful and flexible SDK for interacting with the Discloud API. Deploy, manage, and monitor your applications hosted on Discloud with ease.

## Installation

```sh
npm i discloud.app
yarn add discloud.app
```

## Links

[Documentation](https://discloud.github.io/discloud.app)  
[GitHub](https://github.com/discloud/discloud.app)  
[NPM](https://www.npmjs.com/package/discloud.app)  
[Discloud Server](https://discord.discloudbot.com)  

## Migrations

[Migration Guide - v1 to v2](./MIGRATION_v1_TO_v2.md)

## Examples usage

[Examples usage](#examples-usage)  
[How to upload/commit your application](#how-to-uploadcommit-your-application)  
[How to fetch your application](#how-to-fetch-your-application)  
[How to start, stop, restart or delete your application](#how-to-start-stop-restart-or-delete-your-application)  
[How to view app logs](#how-to-view-app-logs)  
[How to send a terminal command](#how-to-send-a-terminal-command)  
[How to backup apps](#how-to-backup-apps)  
[How to see your app statuses](#how-to-see-your-app-statuses)  
[How to change your app's name and/or avatar](#how-to-change-your-apps-name-andor-avatar)  
[How to change the amount of RAM in the app](#how-to-change-the-amount-of-ram-in-the-app)  
[How to install or uninstall APT](#how-to-install-or-uninstall-apt)  
[How to fetch/add/edit/remove moderators for your application](#how-to-fetchaddeditremove-moderators-for-your-application)  
[How to manage custom domains](#how-to-manage-custom-domains)  
[How to manage subdomains](#how-to-manage-subdomains)  
[How to manage shared/team applications](#how-to-manage-sharedteam-applications)  

```js
// index.js
// Get instanced discloud
const { discloud } = require("discloud.app");

// Set token and authenticate
await discloud.login("DISCLOUD_TOKEN");
```

```js
// Other file
// Get instanced discloud
const { discloud } = require("discloud.app");

// Use discloud instance to manage apps
await discloud.apps.fetch("APP_ID"); // Promise<App>
```

### How to `upload`/`commit` your application

Before continuing, make sure your [`zip`](https://docs.discloudbot.com/v/en/suport/faq/zip) contains the [`discloud.config`](https://docs.discloudbot.com/v/en/discloud.config) file.

> Upload with simply the file `path/url`:

```js
const { discloud } = require("discloud.app");

await discloud.apps.create({
  file: "FILE_PATH/FILE_NAME.zip"
}); // Promise<RESTPostApiUploadResult>
```

> Upload with `Blob | Buffer | File | RawFile | ReadableStream`:

```js
const { discloud } = require("discloud.app");

await discloud.apps.create({
  file: {
    data: readFileSync("FILE_PATH/FILE_NAME.zip"), // Blob | Buffer
    name: "FILE_NAME.zip"
  }
}); // Promise<RESTPostApiUploadResult>
```

> Commit with simply the file `path/url`:

```js
const { discloud } = require("discloud.app");

await discloud.apps.update("APP_ID", {
  file: "FILE_PATH/FILE_NAME.zip"
}); // Promise<RESTPutApiAppCommitResult>
```

> Commit with `Blob | Buffer | File | RawFile | ReadableStream`:

```js
const { discloud } = require("discloud.app");

await discloud.apps.update("APP_ID", {
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

await discloud.apps.create({ file }); // Promise<RESTPostApiUploadResult>
```

### How to `fetch` your application

```js
const { discloud } = require("discloud.app");

await discloud.apps.fetch("APP_ID"); // Promise<App>
await discloud.apps.fetch(/* "all" | undefined */); // Promise<Map<string, App>>
```

### How to `start`, `stop`, `restart` or `delete` your application

```js
const { discloud } = require("discloud.app");

await discloud.apps.start("APP_ID"); // Promise<RESTApiBaseResult>
await discloud.apps.start(/* "all" | undefined */); // Promise<ApiAppManagerStartedAll>

await discloud.apps.stop("APP_ID"); // Promise<RESTApiBaseResult>
await discloud.apps.stop(/* "all" | undefined */); // Promise<ApiAppManagerStopedAll>

await discloud.apps.restart("APP_ID"); // Promise<RESTApiBaseResult>
await discloud.apps.restart(/* "all" | undefined */); // Promise<ApiAppManagerRestartedAll>

await discloud.apps.delete("APP_ID"); // Promise<RESTDeleteApiAppDeleteResult>
await discloud.apps.delete(/* "all" | undefined */); // Promise<ApiAppManagerRemovedAll>
```

### How to view app `logs`

```js
const { discloud } = require("discloud.app");

await discloud.apps.terminal("APP_ID"); // Promise<ApiTerminal>
await discloud.apps.terminal(/* "all" | undefined */); // Promise<Map<string, ApiTerminal>>
```

### How to send a terminal `command`

```js
const { discloud } = require("discloud.app");

await discloud.apps.console("APP_ID", "bash command"); // Promise<ApiConsoleAppShell>
```

### How to `backup` apps

```js
const { discloud } = require("discloud.app");

await discloud.apps.backup("APP_ID"); // Promise<AppBackup>
await discloud.apps.backup(/* "all" | undefined */); // Promise<Map<string, AppBackup>>
```

### How to see your app `statuses`

```js
const { discloud } = require("discloud.app");

await discloud.apps.status.fetch("APP_ID"); // Promise<AppStatus>
await discloud.apps.status.fetch("all"); // Promise<Map<string, AppStatus>>
```

### How to change your app's `name` and/or `avatar`

```js
const { discloud } = require("discloud.app");

await discloud.apps.profile("APP_ID", {
  avatarURL // Optional URL ending with GIF, JPG, JPEG or PNG
  name // Optional text up to 30 characters
}); // Promise<RESTApiBaseResult>
```

### How to change the amount of `RAM` in the app

```js
const { discloud } = require("discloud.app");

await discloud.apps.ram("APP_ID", 100 /* number greater than 100 */); // Promise<RESTPutApiAppRamResult>
// Remember that if your app type is site, the minimum is 512
```

### How to install or uninstall `APT`

```js
const { discloud } = require("discloud.app");

// Install APTs
await discloud.apps.apts.install("APP_ID", [
  "canvas",
  "ffmpeg",
  "java",
  "libgl",
  "openssl",
  "puppeteer",
  "tools",
]); // Promise<void>

// Uninstall APTs
await discloud.apps.apts.uninstall("APP_ID", ["canvas", "ffmpeg"]); // Promise<void>
```

> **Note:** In v1.x, use `discloud.appApt` instead of `discloud.apps.apts`. See the [Migration Guide](./MIGRATION.md) for more details.

### How to `fetch`/`add`/`edit`/`remove` moderators for your application

```js
const { discloud, ModPermissions } = require("discloud.app");

// Fetch mods and permissions
await discloud.apps.moderators.fetch("APP_ID"); // Promise<Map<string, AppModerator>>

// Add a mod
await discloud.apps.moderators.create("APP_ID", "MOD_ID", [
  "backup_app",
  "commit_app",
  "edit_ram",
  "logs_app",
  "restart_app",
  "start_app",
  "status_app",
  "stop_app",
]); // Promise<AppModerator>

// Edit mod permissions
await discloud.apps.moderators.edit("APP_ID", "MOD_ID", [
  ModPermissions.backup_app,
  ModPermissions.commit_app,
  ModPermissions.edit_ram,
  ModPermissions.logs_app,
  ModPermissions.restart_app,
  ModPermissions.start_app,
  ModPermissions.status_app,
  ModPermissions.stop_app,
]); // Promise<AppModerator>

// Remove a mod
await discloud.apps.moderators.delete("APP_ID", "MOD_ID"); // Promise<void>
```

> **Note:** In v1.x, use `discloud.appTeam` instead of `discloud.apps.moderators`. See the [Migration Guide](./MIGRATION.md) for more details.

### How to manage `custom domains`

```js
const { discloud } = require("discloud.app");

// Create a custom domain
await discloud.customdomains.create("APP_ID", "example.com"); // Promise<Customdomain>

// Fetch all custom domains
await discloud.customdomains.fetch(); // Promise<Map<string, Customdomain>>

// Fetch a specific custom domain
await discloud.customdomains.fetch("example.com"); // Promise<Customdomain>

// Verify a custom domain (check DNS records)
await discloud.customdomains.verify("example.com"); // Promise<Customdomain>

// Edit a custom domain (change associated app)
await discloud.customdomains.edit("example.com", "NEW_APP_ID"); // Promise<void>

// Delete a custom domain
await discloud.customdomains.delete("example.com"); // Promise<void>
```

### How to manage `subdomains`

```js
const { discloud } = require("discloud.app");

// Create a subdomain
await discloud.subdomains.create("myapp"); // Promise<Subdomain>

// Fetch all subdomains
await discloud.subdomains.fetch(); // Promise<Map<string, Subdomain>>

// Fetch a specific subdomain
await discloud.subdomains.fetch("myapp"); // Promise<Subdomain>

// Delete a subdomain
await discloud.subdomains.delete("myapp"); // Promise<void>
```

### How to manage `shared`/`team` applications

Shared applications are applications that your team has access to manage.

```js
const { discloud } = require("discloud.app");

// Fetch all shared applications
await discloud.sharedApps.fetch(); // Promise<Map<string, SharedApp>>

// Get logs for a shared application
await discloud.sharedApps.terminal("APP_ID"); // Promise<ApiTerminal>

// Set RAM for a shared application
await discloud.sharedApps.ram("APP_ID", 100); // Promise<void>

// Restart a shared application
await discloud.sharedApps.restart("APP_ID"); // Promise<void>

// Start a shared application
await discloud.sharedApps.start("APP_ID"); // Promise<void>

// Stop a shared application
await discloud.sharedApps.stop("APP_ID"); // Promise<void>

// Get status of a shared application
const status = await discloud.sharedApps.status.fetch("APP_ID"); // Promise<SharedAppStatus>
```

> **Note:** In v1.x, use `discloud.teamApps` instead of `discloud.sharedApps`. See the [Migration Guide](./MIGRATION.md) for more details.
