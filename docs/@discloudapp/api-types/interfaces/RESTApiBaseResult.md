[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTApiBaseResult

# Interface: RESTApiBaseResult

Defined in: [rest/v2/base.ts:1](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L1)

## Extended by

- [`RESTGetApiAppAllResult`](RESTGetApiAppAllResult.md)
- [`RESTGetApiAppAllBackupResult`](RESTGetApiAppAllBackupResult.md)
- [`RESTGetApiAppAllLogResult`](RESTGetApiAppAllLogResult.md)
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

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L5)

The status of API response
