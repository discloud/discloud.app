[**@discloudapp/api-types**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTApiBaseResult

# Interface: RESTApiBaseResult

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

Message of the API
- It is useful to use as logs

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/base.ts#L10)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

The status of API response

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/base.ts#L5)
