[Documentation](../README.md) / [Exports](../modules.md) / discloud.app

# Module: discloud.app

## Table of contents

### Enumerations

- [Events](../enums/discloud_app.Events.md)
- [RESTEvents](../enums/discloud_app.RESTEvents.md)
- [RequestMethod](../enums/discloud_app.RequestMethod.md)

### Classes

- [App](../classes/discloud_app.App.md)
- [AppApt](../classes/discloud_app.AppApt.md)
- [AppAptManager](../classes/discloud_app.AppAptManager.md)
- [AppBackup](../classes/discloud_app.AppBackup.md)
- [AppManager](../classes/discloud_app.AppManager.md)
- [AppStatus](../classes/discloud_app.AppStatus.md)
- [AppTeam](../classes/discloud_app.AppTeam.md)
- [AppTeamManager](../classes/discloud_app.AppTeamManager.md)
- [AppUploaded](../classes/discloud_app.AppUploaded.md)
- [Base](../classes/discloud_app.Base.md)
- [BaseApp](../classes/discloud_app.BaseApp.md)
- [BaseManager](../classes/discloud_app.BaseManager.md)
- [BaseTeamApp](../classes/discloud_app.BaseTeamApp.md)
- [BitField](../classes/discloud_app.BitField.md)
- [CachedManager](../classes/discloud_app.CachedManager.md)
- [DataManager](../classes/discloud_app.DataManager.md)
- [DiscloudAPIError](../classes/discloud_app.DiscloudAPIError.md)
- [DiscloudApp](../classes/discloud_app.DiscloudApp.md)
- [DiscloudConfig](../classes/discloud_app.DiscloudConfig.md)
- [GS](../classes/discloud_app.GS.md)
- [IgnoreFiles](../classes/discloud_app.IgnoreFiles.md)
- [ModPermissionsBF](../classes/discloud_app.ModPermissionsBF.md)
- [REST](../classes/discloud_app.REST.md)
- [RequestManager](../classes/discloud_app.RequestManager.md)
- [Routes](../classes/discloud_app.Routes.md)
- [TeamApp](../classes/discloud_app.TeamApp.md)
- [TeamAppManager](../classes/discloud_app.TeamAppManager.md)
- [TeamAppStatus](../classes/discloud_app.TeamAppStatus.md)
- [User](../classes/discloud_app.User.md)

### Interfaces

- [ApiApp](../interfaces/discloud_app.ApiApp.md)
- [ApiAppBackup](../interfaces/discloud_app.ApiAppBackup.md)
- [ApiAppBackupAll](../interfaces/discloud_app.ApiAppBackupAll.md)
- [ApiAppLog](../interfaces/discloud_app.ApiAppLog.md)
- [ApiAppManager](../interfaces/discloud_app.ApiAppManager.md)
- [ApiAppManagerRemovedAll](../interfaces/discloud_app.ApiAppManagerRemovedAll.md)
- [ApiAppManagerRestartedAll](../interfaces/discloud_app.ApiAppManagerRestartedAll.md)
- [ApiAppManagerStartedAll](../interfaces/discloud_app.ApiAppManagerStartedAll.md)
- [ApiAppManagerStopedAll](../interfaces/discloud_app.ApiAppManagerStopedAll.md)
- [ApiAppTeam](../interfaces/discloud_app.ApiAppTeam.md)
- [ApiAppTeamManager](../interfaces/discloud_app.ApiAppTeamManager.md)
- [ApiConsoleApp](../interfaces/discloud_app.ApiConsoleApp.md)
- [ApiConsoleAppShell](../interfaces/discloud_app.ApiConsoleAppShell.md)
- [ApiNetIO](../interfaces/discloud_app.ApiNetIO.md)
- [ApiStatusApp](../interfaces/discloud_app.ApiStatusApp.md)
- [ApiTeamApps](../interfaces/discloud_app.ApiTeamApps.md)
- [ApiTerminal](../interfaces/discloud_app.ApiTerminal.md)
- [ApiUploadApp](../interfaces/discloud_app.ApiUploadApp.md)
- [ApiUser](../interfaces/discloud_app.ApiUser.md)
- [ApiUserAppStatus](../interfaces/discloud_app.ApiUserAppStatus.md)
- [BaseApiApp](../interfaces/discloud_app.BaseApiApp.md)
- [ClientEvents](../interfaces/discloud_app.ClientEvents.md)
- [Constructor](../interfaces/discloud_app.Constructor.md)
- [DiscloudAppOptions](../interfaces/discloud_app.DiscloudAppOptions.md)
- [IgnoreFilesOptions](../interfaces/discloud_app.IgnoreFilesOptions.md)
- [InternalRequest](../interfaces/discloud_app.InternalRequest.md)
- [LastDataLeft](../interfaces/discloud_app.LastDataLeft.md)
- [RESTApiAppManagerResult](../interfaces/discloud_app.RESTApiAppManagerResult.md)
- [RESTApiBaseResult](../interfaces/discloud_app.RESTApiBaseResult.md)
- [RESTDeleteApiAppAllDeleteResult](../interfaces/discloud_app.RESTDeleteApiAppAllDeleteResult.md)
- [RESTDeleteApiAppAptResult](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)
- [RESTGetApiAppAllBackupResult](../interfaces/discloud_app.RESTGetApiAppAllBackupResult.md)
- [RESTGetApiAppAllLogResult](../interfaces/discloud_app.RESTGetApiAppAllLogResult.md)
- [RESTGetApiAppAllResult](../interfaces/discloud_app.RESTGetApiAppAllResult.md)
- [RESTGetApiAppAllStatusResult](../interfaces/discloud_app.RESTGetApiAppAllStatusResult.md)
- [RESTGetApiAppBackupResult](../interfaces/discloud_app.RESTGetApiAppBackupResult.md)
- [RESTGetApiAppLogResult](../interfaces/discloud_app.RESTGetApiAppLogResult.md)
- [RESTGetApiAppResult](../interfaces/discloud_app.RESTGetApiAppResult.md)
- [RESTGetApiAppStatusResult](../interfaces/discloud_app.RESTGetApiAppStatusResult.md)
- [RESTGetApiAppTeamResult](../interfaces/discloud_app.RESTGetApiAppTeamResult.md)
- [RESTGetApiTeamResult](../interfaces/discloud_app.RESTGetApiTeamResult.md)
- [RESTGetApiUserResult](../interfaces/discloud_app.RESTGetApiUserResult.md)
- [RESTOptions](../interfaces/discloud_app.RESTOptions.md)
- [RESTPostApiAppTeamResult](../interfaces/discloud_app.RESTPostApiAppTeamResult.md)
- [RESTPostApiUploadErrorResult](../interfaces/discloud_app.RESTPostApiUploadErrorResult.md)
- [RESTPostApiUploadOkResult](../interfaces/discloud_app.RESTPostApiUploadOkResult.md)
- [RESTPutApiAppAllRestartResult](../interfaces/discloud_app.RESTPutApiAppAllRestartResult.md)
- [RESTPutApiAppAllStartResult](../interfaces/discloud_app.RESTPutApiAppAllStartResult.md)
- [RESTPutApiAppAllStopResult](../interfaces/discloud_app.RESTPutApiAppAllStopResult.md)
- [RESTPutApiAppAptResult](../interfaces/discloud_app.RESTPutApiAppAptResult.md)
- [RESTPutApiAppCommitResult](../interfaces/discloud_app.RESTPutApiAppCommitResult.md)
- [RESTPutApiAppConsoleResult](../interfaces/discloud_app.RESTPutApiAppConsoleResult.md)
- [RESTPutApiAppRamResult](../interfaces/discloud_app.RESTPutApiAppRamResult.md)
- [RESTPutApiAppTeamResult](../interfaces/discloud_app.RESTPutApiAppTeamResult.md)
- [RESTPutApiLocaleResult](../interfaces/discloud_app.RESTPutApiLocaleResult.md)
- [RateLimitData](../interfaces/discloud_app.RateLimitData.md)
- [RawFile](../interfaces/discloud_app.RawFile.md)
- [RequestData](../interfaces/discloud_app.RequestData.md)
- [RequestHeaders](../interfaces/discloud_app.RequestHeaders.md)
- [RestEvents](../interfaces/discloud_app.RestEvents-1.md)
- [UploadAppOptions](../interfaces/discloud_app.UploadAppOptions.md)

### Type Aliases

- [APTString](discloud_app.md#aptstring)
- [AppLanguages](discloud_app.md#applanguages)
- [AppTypes](discloud_app.md#apptypes)
- [AppVersion](discloud_app.md#appversion)
- [BitFieldConstructor](discloud_app.md#bitfieldconstructor)
- [BitFieldResolvable](discloud_app.md#bitfieldresolvable)
- [Constructable](discloud_app.md#constructable)
- [CreateAppOptions](discloud_app.md#createappoptions)
- [DiscloudConfigType](discloud_app.md#discloudconfigtype)
- [FileResolvable](discloud_app.md#fileresolvable)
- [If](discloud_app.md#if)
- [LocaleString](discloud_app.md#localestring)
- [ModPermissionsFlags](discloud_app.md#modpermissionsflags)
- [ModPermissionsResolvable](discloud_app.md#modpermissionsresolvable)
- [ModPermissionsString](discloud_app.md#modpermissionsstring)
- [ProfileOptions](discloud_app.md#profileoptions)
- [RESTApiStatusResponse](discloud_app.md#restapistatusresponse)
- [RESTDeleteApiAppDeleteResult](discloud_app.md#restdeleteapiappdeleteresult)
- [RESTDeleteApiAppTeamResult](discloud_app.md#restdeleteapiappteamresult)
- [RESTPostApiUploadResult](discloud_app.md#restpostapiuploadresult)
- [RESTPutApiAppRestartResult](discloud_app.md#restputapiapprestartresult)
- [RESTPutApiAppStartResult](discloud_app.md#restputapiappstartresult)
- [RESTPutApiAppStopResult](discloud_app.md#restputapiappstopresult)
- [RequestOptions](discloud_app.md#requestoptions)
- [RouteLike](discloud_app.md#routelike)
- [UpdateAppOptions](discloud_app.md#updateappoptions)

### Variables

- [APIVersion](discloud_app.md#apiversion)
- [APT](discloud_app.md#apt)
- [APTPackages](discloud_app.md#aptpackages)
- [DefaultDiscloudAppOptions](discloud_app.md#defaultdiscloudappoptions)
- [DefaultRestOptions](discloud_app.md#defaultrestoptions)
- [DefaultUserAgent](discloud_app.md#defaultuseragent)
- [ModPermissionsFlags](discloud_app.md#modpermissionsflags-1)
- [ProfileOptions](discloud_app.md#profileoptions-1)
- [RouteBases](discloud_app.md#routebases)
- [allBlockedFiles](discloud_app.md#allblockedfiles)
- [allBlockedFilesRegex](discloud_app.md#allblockedfilesregex)
- [blockedFiles](discloud_app.md#blockedfiles)
- [cpu\_arch](discloud_app.md#cpu_arch)
- [discloud](discloud_app.md#discloud)
- [discloudConfigRequiredScopes](discloud_app.md#discloudconfigrequiredscopes)
- [discloudConfigScopes](discloud_app.md#discloudconfigscopes)
- [fileNamePattern](discloud_app.md#filenamepattern)
- [os\_name](discloud_app.md#os_name)
- [os\_platform](discloud_app.md#os_platform)
- [os\_release](discloud_app.md#os_release)
- [version](discloud_app.md#version)

### Functions

- [bindFunctions](discloud_app.md#bindfunctions)
- [calculatePercentage](discloud_app.md#calculatepercentage)
- [mergeDefaults](discloud_app.md#mergedefaults)
- [resolveFile](discloud_app.md#resolvefile)
- [streamToBlob](discloud_app.md#streamtoblob)
- [streamToFile](discloud_app.md#streamtofile)

## Type Aliases

### APTString

Ƭ **APTString**: keyof typeof [`APT`](discloud_app.md#apt)

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:41](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L41)

___

### AppLanguages

Ƭ **AppLanguages**: ``"go"`` \| ``"java"`` \| ``"js"`` \| ``"php"`` \| ``"py"`` \| ``"rb"`` \| ``"rs"``

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:119](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L119)

___

### AppTypes

Ƭ **AppTypes**: ``"bot"`` \| ``"site"``

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:115](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L115)

___

### AppVersion

Ƭ **AppVersion**\<`T`\>: `T` extends ``"go"`` ? `VersionGo` : `T` extends ``"java"`` ? `VersionJava` : `T` extends ``"js"`` ? `VersionJs` : `T` extends ``"php"`` ? `VersionPhp` : `T` extends ``"py"`` ? `VersionPy` : `T` extends ``"rb"`` ? `VersionRb` : `T` extends ``"rs"`` ? `VersionRs` : `BaseVersion`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AppLanguages`](discloud_app.md#applanguages) = [`AppLanguages`](discloud_app.md#applanguages) |

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:128](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L128)

___

### BitFieldConstructor

Ƭ **BitFieldConstructor**\<`S`, `N`\>: typeof [`BitField`](../classes/discloud_app.BitField.md) & \{ `DefaultBit`: `N` ; `Flags`: `EnumLike`\<`S`, `N`\> ; `resolve`: (`bit`: [`BitFieldResolvable`](discloud_app.md#bitfieldresolvable)\<`S`, `N`\>) => `N`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `bigint` \| `number` |

#### Defined in

packages/util/out/BitField.d.ts:4

___

### BitFieldResolvable

Ƭ **BitFieldResolvable**\<`S`, `N`\>: \`$\{bigint}\` \| `number` \| `N` \| `S` \| [`BitField`](../classes/discloud_app.BitField.md)\<`S`, `N`\> \| [`BitFieldResolvable`](discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[]

Data that can be resolved to give a bitfield. This can be:
* A bit number (this can be a number literal or a value taken from [BitField.Flags](../classes/discloud_app.BitField.md#flags))
* A string bit number
* An instance of BitField
* An Array of BitFieldResolvable

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `bigint` \| `number` |

#### Defined in

packages/util/out/BitField.d.ts:94

___

### Constructable

Ƭ **Constructable**\<`T`\>: (...`args`: `any`) => `InstanceType`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `InstanceType`\<`T`\> = `any` |

#### Type declaration

• (`...args`): `InstanceType`\<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`InstanceType`\<`T`\>

#### Defined in

[packages/discloud.app/src/@types/index.ts:5](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L5)

___

### CreateAppOptions

Ƭ **CreateAppOptions**: [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md)

#### Defined in

[packages/discloud.app/src/@types/index.ts:24](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L24)

___

### DiscloudConfigType

Ƭ **DiscloudConfigType**\<`T`, `V`\>: `T` extends ``"bot"`` ? `DiscloudConfigBot`\<`V`\> : `T` extends ``"site"`` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AppTypes`](discloud_app.md#apptypes) = [`AppTypes`](discloud_app.md#apptypes) |
| `V` | extends [`AppLanguages`](discloud_app.md#applanguages) = [`AppLanguages`](discloud_app.md#applanguages) |

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:55](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L55)

___

### FileResolvable

Ƭ **FileResolvable**: `Blob` \| `File` \| `PathLike` \| [`RawFile`](../interfaces/discloud_app.RawFile.md) \| `Readable` \| `Writable`

This parameter could be Blob, Buffer, File, PathLike, [RawFile](../interfaces/discloud_app.RawFile.md), Readable, String, URL or Writable

#### Defined in

packages/util/out/FileResolver.d.ts:31

___

### If

Ƭ **If**\<`T`, `A`, `B`\>: `T` extends ``true`` ? `A` : `T` extends ``false`` ? `B` : `A` \| `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |
| `A` | `A` |
| `B` | `undefined` |

#### Defined in

[packages/discloud.app/src/@types/index.ts:11](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L11)

___

### LocaleString

Ƭ **LocaleString**: ``"en-US"`` \| ``"pt-BR"``

#### Defined in

[packages/discloud.app/src/@types/index.ts:32](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L32)

___

### ModPermissionsFlags

Ƭ **ModPermissionsFlags**: typeof [`ModPermissionsFlags`](discloud_app.md#modpermissionsflags-1)

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:2

packages/util/out/ModPermissionsBF.d.ts:12

___

### ModPermissionsResolvable

Ƭ **ModPermissionsResolvable**: [`BitFieldResolvable`](discloud_app.md#bitfieldresolvable)\<[`ModPermissionsString`](discloud_app.md#modpermissionsstring), `number`\>

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:14

___

### ModPermissionsString

Ƭ **ModPermissionsString**: keyof [`ModPermissionsFlags`](discloud_app.md#modpermissionsflags-1)

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:13

___

### ProfileOptions

Ƭ **ProfileOptions**: `z.infer`\<typeof [`ProfileOptions`](discloud_app.md#profileoptions-1)\>

#### Defined in

[packages/discloud.app/src/@types/index.ts:17](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L17)

[packages/discloud.app/src/@types/index.ts:22](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L22)

___

### RESTApiStatusResponse

Ƭ **RESTApiStatusResponse**: ``"ok"`` \| ``"error"``

- `ok`
- `error`

#### Defined in

[packages/api-types/rest/v2/base.ts:17](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/base.ts#L17)

___

### RESTDeleteApiAppDeleteResult

Ƭ **RESTDeleteApiAppDeleteResult**: [`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:273](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L273)

___

### RESTDeleteApiAppTeamResult

Ƭ **RESTDeleteApiAppTeamResult**: [`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:332](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L332)

___

### RESTPostApiUploadResult

Ƭ **RESTPostApiUploadResult**: [`RESTPostApiUploadOkResult`](../interfaces/discloud_app.RESTPostApiUploadOkResult.md) \| [`RESTPostApiUploadErrorResult`](../interfaces/discloud_app.RESTPostApiUploadErrorResult.md)

#### Defined in

[packages/api-types/rest/v2/upload.ts:3](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/upload.ts#L3)

___

### RESTPutApiAppRestartResult

Ƭ **RESTPutApiAppRestartResult**: [`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:275](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L275)

___

### RESTPutApiAppStartResult

Ƭ **RESTPutApiAppStartResult**: [`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:277](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L277)

___

### RESTPutApiAppStopResult

Ƭ **RESTPutApiAppStopResult**: [`RESTApiBaseResult`](../interfaces/discloud_app.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:279](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L279)

___

### RequestOptions

Ƭ **RequestOptions**: `Parameters`\<typeof `request`\>[``1``]

#### Defined in

packages/rest/out/@types/index.d.ts:6

___

### RouteLike

Ƭ **RouteLike**: \`/$\{string}\`

#### Defined in

packages/rest/out/@types/index.d.ts:5

___

### UpdateAppOptions

Ƭ **UpdateAppOptions**: [`UploadAppOptions`](../interfaces/discloud_app.UploadAppOptions.md)

#### Defined in

[packages/discloud.app/src/@types/index.ts:26](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L26)

## Variables

### APIVersion

• `Const` **APIVersion**: ``"2"``

API version

**`Default Value`**

```ts
"2"
```

#### Defined in

[packages/api-types/rest/v2/index.ts:14](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/index.ts#L14)

___

### APT

• `Const` **APT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canvas` | `string`[] |
| `ffmpeg` | `string`[] |
| `java` | `string`[] |
| `libgl` | `string`[] |
| `openssl` | `string`[] |
| `puppeteer` | `string`[] |
| `tools` | `string`[] |

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:1](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L1)

___

### APTPackages

• `Const` **APTPackages**: (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[]

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:39](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L39)

___

### DefaultDiscloudAppOptions

• `Const` **DefaultDiscloudAppOptions**: [`DiscloudAppOptions`](../interfaces/discloud_app.DiscloudAppOptions.md) & \{ `token?`: `string`  }

Library default options

#### Defined in

[packages/discloud.app/src/util/constants.ts:12](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/util/constants.ts#L12)

___

### DefaultRestOptions

• `Const` **DefaultRestOptions**: `Required`\<[`RESTOptions`](../interfaces/discloud_app.RESTOptions.md)\>

#### Defined in

packages/rest/out/utils/contants.d.ts:8

___

### DefaultUserAgent

• `Const` **DefaultUserAgent**: `string`

#### Defined in

packages/rest/out/utils/contants.d.ts:7

___

### ModPermissionsFlags

• `Const` **ModPermissionsFlags**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backup_app` | `number` |
| `commit_app` | `number` |
| `edit_ram` | `number` |
| `logs_app` | `number` |
| `restart_app` | `number` |
| `start_app` | `number` |
| `status_app` | `number` |
| `stop_app` | `number` |

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:2

packages/util/out/ModPermissionsBF.d.ts:12

___

### ProfileOptions

• `Const` **ProfileOptions**: `ZodObject`\<\{ `avatarURL`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodOptional`\<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, \{ `avatarURL?`: `string` ; `name?`: `string`  }, \{ `avatarURL?`: `string` ; `name?`: `string`  }\>

#### Defined in

[packages/discloud.app/src/@types/index.ts:17](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L17)

[packages/discloud.app/src/@types/index.ts:22](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/@types/index.ts#L22)

___

### RouteBases

• `Const` **RouteBases**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api` | ``"https://api.discloud.app/v2"`` |

#### Defined in

[packages/api-types/rest/v2/index.ts:16](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/index.ts#L16)

___

### allBlockedFiles

• `Const` **allBlockedFiles**: `string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:10

___

### allBlockedFilesRegex

• `Const` **allBlockedFilesRegex**: `RegExp`

#### Defined in

packages/util/out/IgnoreFiles.d.ts:11

___

### blockedFiles

• `Const` **blockedFiles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `common` | `string`[] |
| `go` | `never`[] |
| `js` | `string`[] |
| `py` | `string`[] |
| `rb` | `string`[] |
| `rs` | `string`[] |
| `ts` | `string`[] |

#### Defined in

packages/util/out/IgnoreFiles.d.ts:1

___

### cpu\_arch

• `Const` **cpu\_arch**: `string`

#### Defined in

packages/rest/out/utils/contants.d.ts:6

___

### discloud

• `Const` **discloud**: [`DiscloudApp`](../classes/discloud_app.DiscloudApp.md)

This is an instance of [DiscloudApp](../classes/discloud_app.DiscloudApp.md)

Use this instead of instantiating the [DiscloudApp](../classes/discloud_app.DiscloudApp.md) class to use the library.

**`Example`**

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

#### Defined in

[packages/discloud.app/src/index.ts:79](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/index.ts#L79)

___

### discloudConfigRequiredScopes

• `Const` **discloudConfigRequiredScopes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bot` | `string`[] |
| `common` | `string`[] |
| `site` | `string`[] |

#### Defined in

packages/util/out/DiscloudConfig.d.ts:2

___

### discloudConfigScopes

• `Const` **discloudConfigScopes**: readonly [``"APT"``, ``"AUTORESTART"``, ``"AVATAR"``, ``"ID"``, ``"MAIN"``, ``"NAME"``, ``"RAM"``, ``"TYPE"``, ``"VERSION"``]

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:43](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/payload/v2/DiscloudConfig.ts#L43)

___

### fileNamePattern

• `Const` **fileNamePattern**: `RegExp`

#### Defined in

packages/util/out/FileResolver.d.ts:9

___

### os\_name

• `Const` **os\_name**: `string`

#### Defined in

packages/rest/out/utils/contants.d.ts:3

___

### os\_platform

• `Const` **os\_platform**: `NodeJS.Platform`

#### Defined in

packages/rest/out/utils/contants.d.ts:5

___

### os\_release

• `Const` **os\_release**: `string`

#### Defined in

packages/rest/out/utils/contants.d.ts:4

___

### version

• `Const` **version**: `string`

#### Defined in

[packages/discloud.app/src/util/constants.ts:7](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/discloud.app/src/util/constants.ts#L7)

## Functions

### bindFunctions

▸ **bindFunctions**\<`I`, `B`\>(`instance`, `bind?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Record`\<`any`, `any`\> |
| `B` | extends `Partial`\<`I`\> & `Record`\<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `I` |
| `bind?` | `B` |

#### Returns

`void`

#### Defined in

packages/util/out/utils.d.ts:1

___

### calculatePercentage

▸ **calculatePercentage**(`value`, `major`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |
| `major` | `string` \| `number` |

#### Returns

`number`

#### Defined in

packages/util/out/utils.d.ts:2

___

### mergeDefaults

▸ **mergeDefaults**\<`A`\>(`defaults`, `options`): `A`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `Record`\<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `A` |
| `options` | `Partial`\<`A`\> |

#### Returns

`A`

#### Defined in

packages/util/out/utils.d.ts:3

___

### resolveFile

▸ **resolveFile**(`file`, `fileName?`): `Promise`\<`File`\>

A function that converts [FileResolvable](discloud_app.md#fileresolvable) to File

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`FileResolvable`](discloud_app.md#fileresolvable) | The file as [FileResolvable](discloud_app.md#fileresolvable) to resolve |
| `fileName?` | `string` | The name of the file to upload |

#### Returns

`Promise`\<`File`\>

#### Defined in

packages/util/out/FileResolver.d.ts:38

___

### streamToBlob

▸ **streamToBlob**(`stream`, `mimeType?`): `Promise`\<`Blob`\>

A function that converts a like Stream parameter to Blob

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `Stream` | A parameter like Readable or Writable |
| `mimeType?` | `string` | A mimeType parameter |

#### Returns

`Promise`\<`Blob`\>

#### Defined in

packages/util/out/FileResolver.d.ts:53

___

### streamToFile

▸ **streamToFile**(`stream`, `fileName?`, `mimeType?`): `Promise`\<`File`\>

A function that converts a like Stream parameter to File

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `Stream` | A parameter like Readable or Writable |
| `fileName?` | ``null`` \| `string` | A file name, if you wish |
| `mimeType?` | `string` | A mimeType parameter |

#### Returns

`Promise`\<`File`\>

#### Defined in

packages/util/out/FileResolver.d.ts:46
