[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTApiBaseResult

# Interface: RESTApiBaseResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTApiBaseResult

## Hierarchy

- **`RESTApiBaseResult`**

  ↳ [`RESTGetApiAppAllResult`](discloudapp_api_types.RESTGetApiAppAllResult.md)

  ↳ [`RESTGetApiAppAllBackupResult`](discloudapp_api_types.RESTGetApiAppAllBackupResult.md)

  ↳ [`RESTGetApiAppAllLogResult`](discloudapp_api_types.RESTGetApiAppAllLogResult.md)

  ↳ [`RESTGetApiAppAllStatusResult`](discloudapp_api_types.RESTGetApiAppAllStatusResult.md)

  ↳ [`RESTGetApiAppResult`](discloudapp_api_types.RESTGetApiAppResult.md)

  ↳ [`RESTGetApiAppBackupResult`](discloudapp_api_types.RESTGetApiAppBackupResult.md)

  ↳ [`RESTGetApiAppLogResult`](discloudapp_api_types.RESTGetApiAppLogResult.md)

  ↳ [`RESTGetApiAppStatusResult`](discloudapp_api_types.RESTGetApiAppStatusResult.md)

  ↳ [`RESTApiAppManagerResult`](discloudapp_api_types.RESTApiAppManagerResult.md)

  ↳ [`RESTPutApiAppAptResult`](discloudapp_api_types.RESTPutApiAppAptResult.md)

  ↳ [`RESTDeleteApiAppAptResult`](discloudapp_api_types.RESTDeleteApiAppAptResult.md)

  ↳ [`RESTPutApiAppCommitResult`](discloudapp_api_types.RESTPutApiAppCommitResult.md)

  ↳ [`RESTPutApiAppRamResult`](discloudapp_api_types.RESTPutApiAppRamResult.md)

  ↳ [`RESTPostApiAppTeamResult`](discloudapp_api_types.RESTPostApiAppTeamResult.md)

  ↳ [`RESTPutApiAppTeamResult`](discloudapp_api_types.RESTPutApiAppTeamResult.md)

  ↳ [`RESTGetApiTeamResult`](discloudapp_api_types.RESTGetApiTeamResult.md)

  ↳ [`RESTPostApiUploadResult`](discloudapp_api_types.RESTPostApiUploadResult.md)

  ↳ [`RESTGetApiUserResult`](discloudapp_api_types.RESTGetApiUserResult.md)

## Table of contents

### Properties

- [message](discloudapp_api_types.RESTApiBaseResult.md#message)
- [status](discloudapp_api_types.RESTApiBaseResult.md#status)

## Properties

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/9c516a5/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/9c516a5/packages/api-types/rest/v2/base.ts#L5)
