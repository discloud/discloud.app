[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTApiBaseResult

# Interface: RESTApiBaseResult

Defined in: [packages/api-types/rest/v2/base.ts:1](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/base.ts#L1)

## Extended by

- [`RESTGetApiAppAllResult`](RESTGetApiAppAllResult.md)
- [`RESTGetApiAppAllBackupResult`](RESTGetApiAppAllBackupResult.md)
- [`RESTGetApiAppAllLogResult`](RESTGetApiAppAllLogResult.md)
- [`RESTGetApiAppAllStatusResult`](RESTGetApiAppAllStatusResult.md)
- [`RESTGetApiAppResult`](RESTGetApiAppResult.md)
- [`RESTGetApiAppBackupResult`](RESTGetApiAppBackupResult.md)
- [`RESTGetApiAppLogResult`](RESTGetApiAppLogResult.md)
- [`RESTGetApiAppStatusResult`](RESTGetApiAppStatusResult.md)
- [`RESTApiAppManagerResult`](RESTApiAppManagerResult.md)
- [`RESTPutApiAppAptResult`](RESTPutApiAppAptResult.md)
- [`RESTDeleteApiAppAptResult`](RESTDeleteApiAppAptResult.md)
- [`RESTPutApiAppCommitResult`](RESTPutApiAppCommitResult.md)
- [`RESTPutApiAppConsoleResult`](RESTPutApiAppConsoleResult.md)
- [`RESTPutApiAppRamResult`](RESTPutApiAppRamResult.md)
- [`RESTPostApiAppTeamResult`](RESTPostApiAppTeamResult.md)
- [`RESTPutApiAppTeamResult`](RESTPutApiAppTeamResult.md)
- [`RESTGetApiTeamResult`](RESTGetApiTeamResult.md)
- [`RESTPostApiUploadOkResult`](RESTPostApiUploadOkResult.md)
- [`RESTPostApiUploadErrorResult`](RESTPostApiUploadErrorResult.md)
- [`RESTGetApiUserResult`](RESTGetApiUserResult.md)

## Properties

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/base.ts#L5)

The status of API response
