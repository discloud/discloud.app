[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTApiBaseResult

# Interface: RESTApiBaseResult

[discloud.app](../modules/discloud_app.md).RESTApiBaseResult

## Hierarchy

- **`RESTApiBaseResult`**

  ↳ [`RESTGetApiAppAllResult`](discloud_app.RESTGetApiAppAllResult.md)

  ↳ [`RESTGetApiAppAllBackupResult`](discloud_app.RESTGetApiAppAllBackupResult.md)

  ↳ [`RESTGetApiAppAllLogResult`](discloud_app.RESTGetApiAppAllLogResult.md)

  ↳ [`RESTGetApiAppAllStatusResult`](discloud_app.RESTGetApiAppAllStatusResult.md)

  ↳ [`RESTGetApiAppResult`](discloud_app.RESTGetApiAppResult.md)

  ↳ [`RESTGetApiAppBackupResult`](discloud_app.RESTGetApiAppBackupResult.md)

  ↳ [`RESTGetApiAppLogResult`](discloud_app.RESTGetApiAppLogResult.md)

  ↳ [`RESTGetApiAppStatusResult`](discloud_app.RESTGetApiAppStatusResult.md)

  ↳ [`RESTApiAppManagerResult`](discloud_app.RESTApiAppManagerResult.md)

  ↳ [`RESTPutApiAppAptResult`](discloud_app.RESTPutApiAppAptResult.md)

  ↳ [`RESTDeleteApiAppAptResult`](discloud_app.RESTDeleteApiAppAptResult.md)

  ↳ [`RESTPutApiAppCommitResult`](discloud_app.RESTPutApiAppCommitResult.md)

  ↳ [`RESTPutApiAppConsoleResult`](discloud_app.RESTPutApiAppConsoleResult.md)

  ↳ [`RESTPutApiAppRamResult`](discloud_app.RESTPutApiAppRamResult.md)

  ↳ [`RESTPostApiAppTeamResult`](discloud_app.RESTPostApiAppTeamResult.md)

  ↳ [`RESTPutApiAppTeamResult`](discloud_app.RESTPutApiAppTeamResult.md)

  ↳ [`RESTGetApiTeamResult`](discloud_app.RESTGetApiTeamResult.md)

  ↳ [`RESTPostApiUploadOkResult`](discloud_app.RESTPostApiUploadOkResult.md)

  ↳ [`RESTPostApiUploadErrorResult`](discloud_app.RESTPostApiUploadErrorResult.md)

  ↳ [`RESTGetApiUserResult`](discloud_app.RESTGetApiUserResult.md)

## Table of contents

### Properties

- [message](discloud_app.RESTApiBaseResult.md#message)
- [status](discloud_app.RESTApiBaseResult.md#status)

## Properties

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L5)
