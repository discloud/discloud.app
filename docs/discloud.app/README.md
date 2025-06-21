[**Documentation**](../README.md)

***

[Documentation](../packages.md) / discloud.app

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
[How to send a terminal command](#how-to-send-a-terminal-command)  
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
await discloud.login("DISCLOUD_TOKEN");
```

```js
// Other file
// Get instanced discloud
const { discloud } = require("discloud.app");

// ...

await discloud.apps.fetch("ID"); // Promise<App>
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

await discloud.apps.status("APP_ID"); // Promise<AppStatus>
await discloud.apps.status(/* "all" | undefined */); // Promise<Map<string, AppStatus>>
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
await discloud.appApt.install("APP_ID", [
  "canvas",
  "ffmpeg",
  "java",
  "libgl",
  "openssl",
  "puppeteer",
  "tools",
]); // Promise<RESTPutApiAppAptResult>

// Uninstall APTs
await discloud.appApt.uninstall("APP_ID", ["canvas", "ffmpeg"]); // Promise<RESTDeleteApiAppAptResult>
```

### How to `fetch`/`add`/`edit`/`remove` moderators for your application

```js
const { discloud, ModPermissions } = require("discloud.app");

// Fetch mods and permissions
await discloud.appTeam.fetch("APP_ID"); // Promise<ApiAppTeam[]>

// Add a mod
await discloud.appTeam.create("APP_ID", "MOD_ID", [
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
await discloud.appTeam.edit("APP_ID", "MOD_ID", [
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
await discloud.appTeam.delete("APP_ID", "MOD_ID"); // Promise<RESTApiBaseResult>
```

## Enumerations

- [DiscloudConfigScopes](enumerations/DiscloudConfigScopes.md)
- [Events](enumerations/Events.md)
- [ModPermissionsFlags](enumerations/ModPermissionsFlags.md)
- [RequestMethod](enumerations/RequestMethod.md)
- [RESTEvents](enumerations/RESTEvents.md)

## Classes

- [App](classes/App.md)
- [AppApt](classes/AppApt.md)
- [AppAptManager](classes/AppAptManager.md)
- [AppBackup](classes/AppBackup.md)
- [AppManager](classes/AppManager.md)
- [AppStatus](classes/AppStatus.md)
- [AppTeam](classes/AppTeam.md)
- [AppTeamManager](classes/AppTeamManager.md)
- [AppUploaded](classes/AppUploaded.md)
- [Base](classes/Base.md)
- [BaseApp](classes/BaseApp.md)
- [BaseManager](classes/BaseManager.md)
- [BaseTeamApp](classes/BaseTeamApp.md)
- [BitField](classes/BitField.md)
- [CachedManager](classes/CachedManager.md)
- [DataManager](classes/DataManager.md)
- [DiscloudAPIError](classes/DiscloudAPIError.md)
- [DiscloudApp](classes/DiscloudApp.md)
- [DiscloudConfig](classes/DiscloudConfig.md)
- [Ignore](classes/Ignore.md)
- [MissingMainError](classes/MissingMainError.md)
- [ModPermissionsBF](classes/ModPermissionsBF.md)
- [REST](classes/REST.md)
- [TeamApp](classes/TeamApp.md)
- [TeamAppManager](classes/TeamAppManager.md)
- [TeamAppStatus](classes/TeamAppStatus.md)
- [User](classes/User.md)
- [UserAgent](classes/UserAgent.md)

## Interfaces

- [ApiApp](interfaces/ApiApp.md)
- [ApiAppBackup](interfaces/ApiAppBackup.md)
- [ApiAppBackupAll](interfaces/ApiAppBackupAll.md)
- [ApiAppLog](interfaces/ApiAppLog.md)
- [ApiAppManager](interfaces/ApiAppManager.md)
- [ApiAppManagerRemovedAll](interfaces/ApiAppManagerRemovedAll.md)
- [ApiAppManagerRestartedAll](interfaces/ApiAppManagerRestartedAll.md)
- [ApiAppManagerStartedAll](interfaces/ApiAppManagerStartedAll.md)
- [ApiAppManagerStopedAll](interfaces/ApiAppManagerStopedAll.md)
- [ApiAppTeam](interfaces/ApiAppTeam.md)
- [ApiAppTeamManager](interfaces/ApiAppTeamManager.md)
- [ApiConsoleApp](interfaces/ApiConsoleApp.md)
- [ApiConsoleAppShell](interfaces/ApiConsoleAppShell.md)
- [ApiNetIO](interfaces/ApiNetIO.md)
- [ApiStatusApp](interfaces/ApiStatusApp.md)
- [ApiTeamApps](interfaces/ApiTeamApps.md)
- [ApiTerminal](interfaces/ApiTerminal.md)
- [ApiUploadApp](interfaces/ApiUploadApp.md)
- [ApiUser](interfaces/ApiUser.md)
- [ApiUserAppStatus](interfaces/ApiUserAppStatus.md)
- [BaseApiApp](interfaces/BaseApiApp.md)
- [BitFieldConstructor](interfaces/BitFieldConstructor.md)
- [Constructor](interfaces/Constructor.md)
- [DiscloudAppOptions](interfaces/DiscloudAppOptions.md)
- [InternalRequest](interfaces/InternalRequest.md)
- [IUserAgent](interfaces/IUserAgent.md)
- [LastDataLeft](interfaces/LastDataLeft.md)
- [RateLimitData](interfaces/RateLimitData.md)
- [RawFile](interfaces/RawFile.md)
- [RequestData](interfaces/RequestData.md)
- [RequestHeaders](interfaces/RequestHeaders.md)
- [RESTApiAppManagerResult](interfaces/RESTApiAppManagerResult.md)
- [RESTApiBaseResult](interfaces/RESTApiBaseResult.md)
- [RESTDeleteApiAppAllDeleteResult](interfaces/RESTDeleteApiAppAllDeleteResult.md)
- [RESTDeleteApiAppAptResult](interfaces/RESTDeleteApiAppAptResult.md)
- [RestEvents](interfaces/RestEvents.md)
- [RESTGetApiAppAllBackupResult](interfaces/RESTGetApiAppAllBackupResult.md)
- [RESTGetApiAppAllLogResult](interfaces/RESTGetApiAppAllLogResult.md)
- [RESTGetApiAppAllResult](interfaces/RESTGetApiAppAllResult.md)
- [RESTGetApiAppBackupResult](interfaces/RESTGetApiAppBackupResult.md)
- [RESTGetApiAppLogResult](interfaces/RESTGetApiAppLogResult.md)
- [RESTGetApiAppResult](interfaces/RESTGetApiAppResult.md)
- [RESTGetApiAppStatusResult](interfaces/RESTGetApiAppStatusResult.md)
- [RESTGetApiAppTeamResult](interfaces/RESTGetApiAppTeamResult.md)
- [RESTGetApiTeamResult](interfaces/RESTGetApiTeamResult.md)
- [RESTGetApiUserResult](interfaces/RESTGetApiUserResult.md)
- [RESTOptions](interfaces/RESTOptions.md)
- [RESTPostApiAppTeamResult](interfaces/RESTPostApiAppTeamResult.md)
- [RESTPostApiUploadErrorResult](interfaces/RESTPostApiUploadErrorResult.md)
- [RESTPostApiUploadOkResult](interfaces/RESTPostApiUploadOkResult.md)
- [RESTPutApiAppAllRestartResult](interfaces/RESTPutApiAppAllRestartResult.md)
- [RESTPutApiAppAllStartResult](interfaces/RESTPutApiAppAllStartResult.md)
- [RESTPutApiAppAllStopResult](interfaces/RESTPutApiAppAllStopResult.md)
- [RESTPutApiAppAptResult](interfaces/RESTPutApiAppAptResult.md)
- [RESTPutApiAppCommitResult](interfaces/RESTPutApiAppCommitResult.md)
- [RESTPutApiAppConsoleResult](interfaces/RESTPutApiAppConsoleResult.md)
- [RESTPutApiAppRamResult](interfaces/RESTPutApiAppRamResult.md)
- [RESTPutApiAppTeamResult](interfaces/RESTPutApiAppTeamResult.md)
- [RESTPutApiLocaleResult](interfaces/RESTPutApiLocaleResult.md)
- [UploadAppOptions](interfaces/UploadAppOptions.md)

## Type Aliases

- [AppLanguages](type-aliases/AppLanguages.md)
- [AppTypes](type-aliases/AppTypes.md)
- [AppVersion](type-aliases/AppVersion.md)
- [APTString](type-aliases/APTString.md)
- [BitFieldResolvable](type-aliases/BitFieldResolvable.md)
- [ClientEvents](type-aliases/ClientEvents.md)
- [Constructable](type-aliases/Constructable.md)
- [CreateAppOptions](type-aliases/CreateAppOptions.md)
- [DiscloudConfigType](type-aliases/DiscloudConfigType.md)
- [FileResolvable](type-aliases/FileResolvable.md)
- [FileResolvableSync](type-aliases/FileResolvableSync.md)
- [If](type-aliases/If.md)
- [LocaleString](type-aliases/LocaleString.md)
- [ModPermissionsResolvable](type-aliases/ModPermissionsResolvable.md)
- [ModPermissionsString](type-aliases/ModPermissionsString.md)
- [ProfileOptions](type-aliases/ProfileOptions.md)
- [RequestOptions](type-aliases/RequestOptions.md)
- [RESTDeleteApiAppDeleteResult](type-aliases/RESTDeleteApiAppDeleteResult.md)
- [RESTDeleteApiAppTeamResult](type-aliases/RESTDeleteApiAppTeamResult.md)
- [RESTPostApiUploadResult](type-aliases/RESTPostApiUploadResult.md)
- [RESTPutApiAppRestartResult](type-aliases/RESTPutApiAppRestartResult.md)
- [RESTPutApiAppStartResult](type-aliases/RESTPutApiAppStartResult.md)
- [RESTPutApiAppStopResult](type-aliases/RESTPutApiAppStopResult.md)
- [RouteLike](type-aliases/RouteLike.md)
- [Routes](type-aliases/Routes.md)
- [UpdateAppOptions](type-aliases/UpdateAppOptions.md)

## Variables

- [APIVersion](variables/APIVersion.md)
- [APT](variables/APT.md)
- [APTPackages](variables/APTPackages.md)
- [DefaultDiscloudAppOptions](variables/DefaultDiscloudAppOptions.md)
- [DefaultRestOptions](variables/DefaultRestOptions.md)
- [discloud](variables/discloud.md)
- [discloudConfigRequiredScopes](variables/discloudConfigRequiredScopes.md)
- [discloudConfigScopes](variables/discloudConfigScopes.md)
- [filenamePattern](variables/filenamePattern.md)
- [~~fileNamePattern~~](variables/fileNamePattern-1.md)
- [ProfileOptions](variables/ProfileOptions.md)
- [RouteBases](variables/RouteBases.md)
- [Routes](variables/Routes.md)
- [version](variables/version.md)

## Functions

- [bindFunctions](functions/bindFunctions.md)
- [calculatePercentage](functions/calculatePercentage.md)
- [glob](functions/glob.md)
- [globIterate](functions/globIterate.md)
- [importJSON](functions/importJSON.md)
- [mergeDefaults](functions/mergeDefaults.md)
- [resolveFile](functions/resolveFile.md)
- [resolveFileSync](functions/resolveFileSync.md)
- [streamToBlob](functions/streamToBlob.md)
- [streamToFile](functions/streamToFile.md)
