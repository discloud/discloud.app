[Documentation](../README.md) / [Exports](../modules.md) / @discloudapp/api-types

# Module: @discloudapp/api-types

## Table of contents

### Classes

- [Routes](../classes/discloudapp_api_types.Routes.md)

### Interfaces

- [ApiApp](../interfaces/discloudapp_api_types.ApiApp.md)
- [ApiAppBackup](../interfaces/discloudapp_api_types.ApiAppBackup.md)
- [ApiAppBackupAll](../interfaces/discloudapp_api_types.ApiAppBackupAll.md)
- [ApiAppLog](../interfaces/discloudapp_api_types.ApiAppLog.md)
- [ApiAppManager](../interfaces/discloudapp_api_types.ApiAppManager.md)
- [ApiAppManagerRemovedAll](../interfaces/discloudapp_api_types.ApiAppManagerRemovedAll.md)
- [ApiAppManagerRestartedAll](../interfaces/discloudapp_api_types.ApiAppManagerRestartedAll.md)
- [ApiAppManagerStartedAll](../interfaces/discloudapp_api_types.ApiAppManagerStartedAll.md)
- [ApiAppManagerStopedAll](../interfaces/discloudapp_api_types.ApiAppManagerStopedAll.md)
- [ApiAppTeam](../interfaces/discloudapp_api_types.ApiAppTeam.md)
- [ApiAppTeamManager](../interfaces/discloudapp_api_types.ApiAppTeamManager.md)
- [ApiNetIO](../interfaces/discloudapp_api_types.ApiNetIO.md)
- [ApiStatusApp](../interfaces/discloudapp_api_types.ApiStatusApp.md)
- [ApiTeamApps](../interfaces/discloudapp_api_types.ApiTeamApps.md)
- [ApiTerminal](../interfaces/discloudapp_api_types.ApiTerminal.md)
- [ApiUploadApp](../interfaces/discloudapp_api_types.ApiUploadApp.md)
- [ApiUser](../interfaces/discloudapp_api_types.ApiUser.md)
- [ApiUserAppStatus](../interfaces/discloudapp_api_types.ApiUserAppStatus.md)
- [BaseApiApp](../interfaces/discloudapp_api_types.BaseApiApp.md)
- [LastDataLeft](../interfaces/discloudapp_api_types.LastDataLeft.md)
- [RESTApiAppManagerResult](../interfaces/discloudapp_api_types.RESTApiAppManagerResult.md)
- [RESTApiBaseResult](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)
- [RESTDeleteApiAppAllDeleteResult](../interfaces/discloudapp_api_types.RESTDeleteApiAppAllDeleteResult.md)
- [RESTDeleteApiAppAptResult](../interfaces/discloudapp_api_types.RESTDeleteApiAppAptResult.md)
- [RESTGetApiAppAllBackupResult](../interfaces/discloudapp_api_types.RESTGetApiAppAllBackupResult.md)
- [RESTGetApiAppAllLogResult](../interfaces/discloudapp_api_types.RESTGetApiAppAllLogResult.md)
- [RESTGetApiAppAllResult](../interfaces/discloudapp_api_types.RESTGetApiAppAllResult.md)
- [RESTGetApiAppAllStatusResult](../interfaces/discloudapp_api_types.RESTGetApiAppAllStatusResult.md)
- [RESTGetApiAppBackupResult](../interfaces/discloudapp_api_types.RESTGetApiAppBackupResult.md)
- [RESTGetApiAppLogResult](../interfaces/discloudapp_api_types.RESTGetApiAppLogResult.md)
- [RESTGetApiAppResult](../interfaces/discloudapp_api_types.RESTGetApiAppResult.md)
- [RESTGetApiAppStatusResult](../interfaces/discloudapp_api_types.RESTGetApiAppStatusResult.md)
- [RESTGetApiAppTeamResult](../interfaces/discloudapp_api_types.RESTGetApiAppTeamResult.md)
- [RESTGetApiTeamResult](../interfaces/discloudapp_api_types.RESTGetApiTeamResult.md)
- [RESTGetApiUserResult](../interfaces/discloudapp_api_types.RESTGetApiUserResult.md)
- [RESTPostApiAppTeamResult](../interfaces/discloudapp_api_types.RESTPostApiAppTeamResult.md)
- [RESTPostApiUploadErrorResult](../interfaces/discloudapp_api_types.RESTPostApiUploadErrorResult.md)
- [RESTPostApiUploadSuccessResult](../interfaces/discloudapp_api_types.RESTPostApiUploadSuccessResult.md)
- [RESTPutApiAppAllRestartResult](../interfaces/discloudapp_api_types.RESTPutApiAppAllRestartResult.md)
- [RESTPutApiAppAllStartResult](../interfaces/discloudapp_api_types.RESTPutApiAppAllStartResult.md)
- [RESTPutApiAppAllStopResult](../interfaces/discloudapp_api_types.RESTPutApiAppAllStopResult.md)
- [RESTPutApiAppAptResult](../interfaces/discloudapp_api_types.RESTPutApiAppAptResult.md)
- [RESTPutApiAppCommitResult](../interfaces/discloudapp_api_types.RESTPutApiAppCommitResult.md)
- [RESTPutApiAppRamResult](../interfaces/discloudapp_api_types.RESTPutApiAppRamResult.md)
- [RESTPutApiAppTeamResult](../interfaces/discloudapp_api_types.RESTPutApiAppTeamResult.md)
- [RESTPutApiLocaleResult](../interfaces/discloudapp_api_types.RESTPutApiLocaleResult.md)

### Type Aliases

- [APTString](discloudapp_api_types.md#aptstring)
- [AppLanguages](discloudapp_api_types.md#applanguages)
- [AppTypes](discloudapp_api_types.md#apptypes)
- [AppVersion](discloudapp_api_types.md#appversion)
- [DiscloudConfigType](discloudapp_api_types.md#discloudconfigtype)
- [RESTApiStatusResponse](discloudapp_api_types.md#restapistatusresponse)
- [RESTDeleteApiAppDeleteResult](discloudapp_api_types.md#restdeleteapiappdeleteresult)
- [RESTDeleteApiAppTeamResult](discloudapp_api_types.md#restdeleteapiappteamresult)
- [RESTPostApiUploadResult](discloudapp_api_types.md#restpostapiuploadresult)
- [RESTPutApiAppRestartResult](discloudapp_api_types.md#restputapiapprestartresult)
- [RESTPutApiAppStartResult](discloudapp_api_types.md#restputapiappstartresult)
- [RESTPutApiAppStopResult](discloudapp_api_types.md#restputapiappstopresult)

### Variables

- [APIVersion](discloudapp_api_types.md#apiversion)
- [APT](discloudapp_api_types.md#apt)
- [APTPackages](discloudapp_api_types.md#aptpackages)
- [RouteBases](discloudapp_api_types.md#routebases)
- [discloudConfigScopes](discloudapp_api_types.md#discloudconfigscopes)

## Type Aliases

### APTString

Ƭ **APTString**: keyof typeof [`APT`](discloudapp_api_types.md#apt)

#### Defined in

[payload/v2/DiscloudConfig.ts:41](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L41)

___

### AppLanguages

Ƭ **AppLanguages**: ``"go"`` \| ``"java"`` \| ``"js"`` \| ``"php"`` \| ``"py"`` \| ``"rb"`` \| ``"rs"``

#### Defined in

[payload/v2/DiscloudConfig.ts:119](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L119)

___

### AppTypes

Ƭ **AppTypes**: ``"bot"`` \| ``"site"``

#### Defined in

[payload/v2/DiscloudConfig.ts:115](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L115)

___

### AppVersion

Ƭ **AppVersion**\<`T`\>: `T` extends ``"go"`` ? `VersionGo` : `T` extends ``"java"`` ? `VersionJava` : `T` extends ``"js"`` ? `VersionJs` : `T` extends ``"php"`` ? `VersionPhp` : `T` extends ``"py"`` ? `VersionPy` : `T` extends ``"rb"`` ? `VersionRb` : `T` extends ``"rs"`` ? `VersionRs` : `BaseVersion`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AppLanguages`](discloudapp_api_types.md#applanguages) = [`AppLanguages`](discloudapp_api_types.md#applanguages) |

#### Defined in

[payload/v2/DiscloudConfig.ts:128](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L128)

___

### DiscloudConfigType

Ƭ **DiscloudConfigType**\<`T`, `V`\>: `T` extends ``"bot"`` ? `DiscloudConfigBot`\<`V`\> : `T` extends ``"site"`` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AppTypes`](discloudapp_api_types.md#apptypes) = [`AppTypes`](discloudapp_api_types.md#apptypes) |
| `V` | extends [`AppLanguages`](discloudapp_api_types.md#applanguages) = [`AppLanguages`](discloudapp_api_types.md#applanguages) |

#### Defined in

[payload/v2/DiscloudConfig.ts:55](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L55)

___

### RESTApiStatusResponse

Ƭ **RESTApiStatusResponse**: ``"ok"`` \| ``"error"``

- `ok`
- `error`

#### Defined in

[rest/v2/base.ts:17](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/base.ts#L17)

___

### RESTDeleteApiAppDeleteResult

Ƭ **RESTDeleteApiAppDeleteResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[rest/v2/app.ts:263](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L263)

___

### RESTDeleteApiAppTeamResult

Ƭ **RESTDeleteApiAppTeamResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[rest/v2/app.ts:318](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L318)

___

### RESTPostApiUploadResult

Ƭ **RESTPostApiUploadResult**: [`RESTPostApiUploadSuccessResult`](../interfaces/discloudapp_api_types.RESTPostApiUploadSuccessResult.md) \| [`RESTPostApiUploadErrorResult`](../interfaces/discloudapp_api_types.RESTPostApiUploadErrorResult.md)

#### Defined in

[rest/v2/upload.ts:3](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/upload.ts#L3)

___

### RESTPutApiAppRestartResult

Ƭ **RESTPutApiAppRestartResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[rest/v2/app.ts:265](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L265)

___

### RESTPutApiAppStartResult

Ƭ **RESTPutApiAppStartResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[rest/v2/app.ts:267](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L267)

___

### RESTPutApiAppStopResult

Ƭ **RESTPutApiAppStopResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[rest/v2/app.ts:269](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L269)

## Variables

### APIVersion

• `Const` **APIVersion**: ``"2"``

API version

**`Default Value`**

```ts
"2"
```

#### Defined in

[rest/v2/index.ts:14](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/index.ts#L14)

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

[payload/v2/DiscloudConfig.ts:1](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L1)

___

### APTPackages

• `Const` **APTPackages**: (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[]

#### Defined in

[payload/v2/DiscloudConfig.ts:39](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L39)

___

### RouteBases

• `Const` **RouteBases**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api` | ``"https://api.discloud.app/v2"`` |

#### Defined in

[rest/v2/index.ts:16](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/index.ts#L16)

___

### discloudConfigScopes

• `Const` **discloudConfigScopes**: readonly [``"APT"``, ``"AUTORESTART"``, ``"AVATAR"``, ``"ID"``, ``"MAIN"``, ``"NAME"``, ``"RAM"``, ``"TYPE"``, ``"VERSION"``]

#### Defined in

[payload/v2/DiscloudConfig.ts:43](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/payload/v2/DiscloudConfig.ts#L43)
