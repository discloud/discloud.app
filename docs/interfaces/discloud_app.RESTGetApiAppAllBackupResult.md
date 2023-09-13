[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiAppAllBackupResult

# Interface: RESTGetApiAppAllBackupResult

[discloud.app](../modules/discloud_app.md).RESTGetApiAppAllBackupResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppAllBackupResult`**

## Table of contents

### Properties

- [backups](discloud_app.RESTGetApiAppAllBackupResult.md#backups)
- [message](discloud_app.RESTGetApiAppAllBackupResult.md#message)
- [status](discloud_app.RESTGetApiAppAllBackupResult.md#status)

## Properties

### backups

• **backups**: [`ApiAppBackupAll`](discloud_app.ApiAppBackupAll.md)[]

Backup of all of your applications

#### Defined in

[packages/api-types/rest/v2/app.ts:198](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/app.ts#L198)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/base.ts#L5)
