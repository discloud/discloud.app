[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiAppBackupResult

# Interface: RESTGetApiAppBackupResult

[discloud.app](../modules/discloud_app.md).RESTGetApiAppBackupResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppBackupResult`**

## Table of contents

### Properties

- [backups](discloud_app.RESTGetApiAppBackupResult.md#backups)
- [message](discloud_app.RESTGetApiAppBackupResult.md#message)
- [status](discloud_app.RESTGetApiAppBackupResult.md#status)

## Properties

### backups

• **backups**: [`ApiAppBackup`](discloud_app.ApiAppBackup.md)

Backup of your application

#### Defined in

[packages/api-types/rest/v2/app.ts:236](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/app.ts#L236)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L5)
