[discloudapp](../README.md) / [Exports](../modules.md) / @discloudapp/api-types

# Module: @discloudapp/api-types

## Table of contents

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
- [ApiAppStatus](../interfaces/discloudapp_api_types.ApiAppStatus.md)
- [ApiAppTeam](../interfaces/discloudapp_api_types.ApiAppTeam.md)
- [ApiAppTeamManager](../interfaces/discloudapp_api_types.ApiAppTeamManager.md)
- [ApiNetIO](../interfaces/discloudapp_api_types.ApiNetIO.md)
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
- [RESTPostApiUploadResult](../interfaces/discloudapp_api_types.RESTPostApiUploadResult.md)
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
- [DiscloudConfig](discloudapp_api_types.md#discloudconfig)
- [RESTApiStatusResponse](discloudapp_api_types.md#restapistatusresponse)
- [RESTDeleteApiAppDeleteResult](discloudapp_api_types.md#restdeleteapiappdeleteresult)
- [RESTDeleteApiAppTeamResult](discloudapp_api_types.md#restdeleteapiappteamresult)
- [RESTPutApiAppRestartResult](discloudapp_api_types.md#restputapiapprestartresult)
- [RESTPutApiAppStartResult](discloudapp_api_types.md#restputapiappstartresult)
- [RESTPutApiAppStopResult](discloudapp_api_types.md#restputapiappstopresult)

### Variables

- [APIVersion](discloudapp_api_types.md#apiversion)
- [APT](discloudapp_api_types.md#apt)
- [APTPackages](discloudapp_api_types.md#aptpackages)
- [RouteBases](discloudapp_api_types.md#routebases)
- [Routes](discloudapp_api_types.md#routes)

## Type Aliases

### APTString

Ƭ **APTString**: keyof typeof [`APT`](discloudapp_api_types.md#apt)

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:30](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/payload/v2/DiscloudConfig.ts#L30)

___

### AppLanguages

Ƭ **AppLanguages**: ``"go"`` \| ``"java"`` \| ``"js"`` \| ``"php"`` \| ``"py"`` \| ``"rb"`` \| ``"rs"``

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:96](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/payload/v2/DiscloudConfig.ts#L96)

___

### AppTypes

Ƭ **AppTypes**: ``"bot"`` \| ``"site"``

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:92](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/payload/v2/DiscloudConfig.ts#L92)

___

### AppVersion

Ƭ **AppVersion**<`T`\>: `T` extends ``"go"`` ? `VersionGo` : `T` extends ``"java"`` ? `VersionJava` : `T` extends ``"js"`` ? `VersionJs` : `T` extends ``"php"`` ? `VersionPhp` : `T` extends ``"py"`` ? `VersionPy` : `T` extends ``"rb"`` ? `VersionRb` : `T` extends ``"rs"`` ? `VersionRs` : `BaseVersion`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AppLanguages`](discloudapp_api_types.md#applanguages) = [`AppLanguages`](discloudapp_api_types.md#applanguages) |

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:105](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/payload/v2/DiscloudConfig.ts#L105)

___

### DiscloudConfig

Ƭ **DiscloudConfig**<`T`, `V`\>: `T` extends ``"bot"`` ? `DiscloudConfigBot`<`V`\> : `T` extends ``"site"`` ? `DiscloudConfigSite`<`V`\> : `BaseDiscloudConfig`<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AppTypes`](discloudapp_api_types.md#apptypes) = [`AppTypes`](discloudapp_api_types.md#apptypes) |
| `V` | extends [`AppLanguages`](discloudapp_api_types.md#applanguages) = [`AppLanguages`](discloudapp_api_types.md#applanguages) |

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:32](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/payload/v2/DiscloudConfig.ts#L32)

___

### RESTApiStatusResponse

Ƭ **RESTApiStatusResponse**: ``"ok"`` \| ``"error"``

- `ok`
- `error`

#### Defined in

[packages/api-types/rest/v2/base.ts:17](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L17)

___

### RESTDeleteApiAppDeleteResult

Ƭ **RESTDeleteApiAppDeleteResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:264](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L264)

___

### RESTDeleteApiAppTeamResult

Ƭ **RESTDeleteApiAppTeamResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:319](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L319)

___

### RESTPutApiAppRestartResult

Ƭ **RESTPutApiAppRestartResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:266](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L266)

___

### RESTPutApiAppStartResult

Ƭ **RESTPutApiAppStartResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:268](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L268)

___

### RESTPutApiAppStopResult

Ƭ **RESTPutApiAppStopResult**: [`RESTApiBaseResult`](../interfaces/discloudapp_api_types.RESTApiBaseResult.md)

#### Defined in

[packages/api-types/rest/v2/app.ts:270](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L270)

## Variables

### APIVersion

• `Const` **APIVersion**: ``"2"``

API version

**`Default Value`**

"2"

#### Defined in

[packages/api-types/rest/v2/index.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/index.ts#L14)

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

[packages/api-types/payload/v2/DiscloudConfig.ts:1](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/payload/v2/DiscloudConfig.ts#L1)

___

### APTPackages

• `Const` **APTPackages**: (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[]

#### Defined in

[packages/api-types/payload/v2/DiscloudConfig.ts:28](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/payload/v2/DiscloudConfig.ts#L28)

___

### RouteBases

• `Const` **RouteBases**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api` | ``"https://api.discloud.app/v2"`` |

#### Defined in

[packages/api-types/rest/v2/index.ts:16](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/index.ts#L16)

___

### Routes

• `Const` **Routes**: [`Routes`](discloudapp_api_types.md#routes)

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:7](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/routes/index.ts#L7)