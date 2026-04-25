[**Documentation**](../README.md)

***

[Documentation](../packages.md) / discloud.app

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

[Migration Guide - v1 to v2](../_media/MIGRATION_v1_TO_v2-1.md)

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
- [AppModerator](classes/AppModerator.md)
- [AppModeratorsManager](classes/AppModeratorsManager.md)
- [AppsModeratorsManager](classes/AppsModeratorsManager.md)
- [AppStatus](classes/AppStatus.md)
- [AppStatusManager](classes/AppStatusManager.md)
- [AppUploaded](classes/AppUploaded.md)
- [Base](classes/Base.md)
- [BaseApp](classes/BaseApp.md)
- [BaseAppsManager](classes/BaseAppsManager.md)
- [BaseAppsModeratorsManager](classes/BaseAppsModeratorsManager.md)
- [BaseAppsStatusManager](classes/BaseAppsStatusManager.md)
- [BaseAppStatus](classes/BaseAppStatus.md)
- [BaseCustomdomain](classes/BaseCustomdomain.md)
- [BaseCustomdomainsManager](classes/BaseCustomdomainsManager.md)
- [BaseManager](classes/BaseManager.md)
- [BaseSharedApp](classes/BaseSharedApp.md)
- [BaseSharedAppsManager](classes/BaseSharedAppsManager.md)
- [BaseSharedAppsStatusManager](classes/BaseSharedAppsStatusManager.md)
- [BaseSharedAppStatus](classes/BaseSharedAppStatus.md)
- [BaseSubdomain](classes/BaseSubdomain.md)
- [BaseSubdomainsManager](classes/BaseSubdomainsManager.md)
- [BitField](classes/BitField.md)
- [CachedManager](classes/CachedManager.md)
- [Customdomain](classes/Customdomain.md)
- [CustomdomainApp](classes/CustomdomainApp.md)
- [CustomdomainInstruction](classes/CustomdomainInstruction.md)
- [CustomdomainsManager](classes/CustomdomainsManager.md)
- [DataManager](classes/DataManager.md)
- [DiscloudAPIError](classes/DiscloudAPIError.md)
- [DiscloudApp](classes/DiscloudApp.md)
- [DiscloudConfig](classes/DiscloudConfig.md)
- [HttpBadStatusError](classes/HttpBadStatusError.md)
- [Ignore](classes/Ignore.md)
- [MissingMainError](classes/MissingMainError.md)
- [ModPermissionsBF](classes/ModPermissionsBF.md)
- [REST](classes/REST.md)
- [SharedApp](classes/SharedApp.md)
- [SharedAppOwner](classes/SharedAppOwner.md)
- [SharedAppsManager](classes/SharedAppsManager.md)
- [SharedAppStatus](classes/SharedAppStatus.md)
- [SharedAppStatusManager](classes/SharedAppStatusManager.md)
- [Subdomain](classes/Subdomain.md)
- [SubdomainsManager](classes/SubdomainsManager.md)
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
- [ApiDomain](interfaces/ApiDomain.md)
- [ApiDomainApp](interfaces/ApiDomainApp.md)
- [ApiDomainInstruction](interfaces/ApiDomainInstruction.md)
- [ApiNetIO](interfaces/ApiNetIO.md)
- [ApiStatusApp](interfaces/ApiStatusApp.md)
- [ApiSubdomain](interfaces/ApiSubdomain.md)
- [ApiTeamApp](interfaces/ApiTeamApp.md)
- [ApiTeamAppOwner](interfaces/ApiTeamAppOwner.md)
- [~~ApiTeamApps~~](interfaces/ApiTeamApps.md)
- [ApiTerminal](interfaces/ApiTerminal.md)
- [ApiUploadApp](interfaces/ApiUploadApp.md)
- [ApiUser](interfaces/ApiUser.md)
- [ApiUserAppStatus](interfaces/ApiUserAppStatus.md)
- [BaseApiApp](interfaces/BaseApiApp.md)
- [BitFieldConstructor](interfaces/BitFieldConstructor.md)
- [DiscloudAppOptions](interfaces/DiscloudAppOptions.md)
- [FSGlobOptionsWithFileTypes](interfaces/FSGlobOptionsWithFileTypes.md)
- [FSGlobOptionsWithoutFileTypes](interfaces/FSGlobOptionsWithoutFileTypes.md)
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
- [RESTGetApiCustomdomainListResult](interfaces/RESTGetApiCustomdomainListResult.md)
- [RESTGetApiCustomdomainResult](interfaces/RESTGetApiCustomdomainResult.md)
- [RESTGetApiSubdomainListResult](interfaces/RESTGetApiSubdomainListResult.md)
- [RESTGetApiSubdomainResult](interfaces/RESTGetApiSubdomainResult.md)
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
- [CreateAppOptions](type-aliases/CreateAppOptions.md)
- [DiscloudConfigType](type-aliases/DiscloudConfigType.md)
- [FileResolvable](type-aliases/FileResolvable.md)
- [FileResolvableSync](type-aliases/FileResolvableSync.md)
- [FSGlobOptions](type-aliases/FSGlobOptions.md)
- [Instanciable](type-aliases/Instanciable.md)
- [LocaleString](type-aliases/LocaleString.md)
- [ModPermissionsResolvable](type-aliases/ModPermissionsResolvable.md)
- [ModPermissionsString](type-aliases/ModPermissionsString.md)
- [RequestOptions](type-aliases/RequestOptions.md)
- [RESTDeleteApiAppDeleteResult](type-aliases/RESTDeleteApiAppDeleteResult.md)
- [RESTDeleteApiAppTeamResult](type-aliases/RESTDeleteApiAppTeamResult.md)
- [RESTDeleteApiCustomdomainResult](type-aliases/RESTDeleteApiCustomdomainResult.md)
- [RESTDeleteApiSubdomainResult](type-aliases/RESTDeleteApiSubdomainResult.md)
- [RESTGetApiCustomdomainVerifyResult](type-aliases/RESTGetApiCustomdomainVerifyResult.md)
- [RESTPostApiCustomdomainCreateResult](type-aliases/RESTPostApiCustomdomainCreateResult.md)
- [RESTPostApiSubdomainResult](type-aliases/RESTPostApiSubdomainResult.md)
- [RESTPostApiUploadResult](type-aliases/RESTPostApiUploadResult.md)
- [RESTPutApiAppRestartResult](type-aliases/RESTPutApiAppRestartResult.md)
- [RESTPutApiAppStartResult](type-aliases/RESTPutApiAppStartResult.md)
- [RESTPutApiAppStopResult](type-aliases/RESTPutApiAppStopResult.md)
- [RESTPutApiCustomdomainEditResult](type-aliases/RESTPutApiCustomdomainEditResult.md)
- [RouteLike](type-aliases/RouteLike.md)
- [Routes](type-aliases/Routes.md)
- [UpdateAppOptions](type-aliases/UpdateAppOptions.md)

## Variables

- [APIVersion](variables/APIVersion.md)
- [APT](variables/APT.md)
- [APTPackages](variables/APTPackages.md)
- [~~bindFunctions~~](variables/bindFunctions.md)
- [DefaultDiscloudAppOptions](variables/DefaultDiscloudAppOptions.md)
- [DefaultRestOptions](variables/DefaultRestOptions.md)
- [discloud](variables/discloud.md)
- [discloudConfigRequiredScopes](variables/discloudConfigRequiredScopes.md)
- [discloudConfigScopes](variables/discloudConfigScopes.md)
- [filenamePattern](variables/filenamePattern.md)
- [~~fileNamePattern~~](variables/fileNamePattern-1.md)
- [~~mergeDefaults~~](variables/mergeDefaults.md)
- [RouteBases](variables/RouteBases.md)
- [Routes](variables/Routes.md)
- [validAvatarURLExtensions](variables/validAvatarURLExtensions.md)
- [version](variables/version.md)

## Functions

- [calculatePercentage](functions/calculatePercentage.md)
- [fsGlob](functions/fsGlob.md)
- [fsGlobIterate](functions/fsGlobIterate.md)
- [glob](functions/glob.md)
- [globIterate](functions/globIterate.md)
- [importJSON](functions/importJSON.md)
- [resolveFile](functions/resolveFile.md)
- [resolveFileSync](functions/resolveFileSync.md)
- [streamToBlob](functions/streamToBlob.md)
- [streamToFile](functions/streamToFile.md)

## References

### AppsAptsManager

Renames and re-exports [AppAptManager](classes/AppAptManager.md)

***

### AppsManager

Renames and re-exports [AppManager](classes/AppManager.md)

***

### AppTeam

Renames and re-exports [AppModerator](classes/AppModerator.md)

***

### AppTeamManager

Renames and re-exports [AppsModeratorsManager](classes/AppsModeratorsManager.md)

***

### BaseTeamApp

Renames and re-exports [BaseSharedApp](classes/BaseSharedApp.md)

***

### TeamApp

Renames and re-exports [SharedApp](classes/SharedApp.md)

***

### TeamAppManager

Renames and re-exports [SharedAppsManager](classes/SharedAppsManager.md)

***

### TeamAppStatus

Renames and re-exports [SharedAppStatus](classes/SharedAppStatus.md)
