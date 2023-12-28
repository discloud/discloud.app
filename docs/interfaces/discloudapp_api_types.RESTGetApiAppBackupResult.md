[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiAppBackupResult

# Interface: RESTGetApiAppBackupResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiAppBackupResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppBackupResult`**

## Table of contents

### Properties

- [backups](discloudapp_api_types.RESTGetApiAppBackupResult.md#backups)
- [message](discloudapp_api_types.RESTGetApiAppBackupResult.md#message)
- [status](discloudapp_api_types.RESTGetApiAppBackupResult.md#status)

## Properties

### backups

• **backups**: [`ApiAppBackup`](discloudapp_api_types.ApiAppBackup.md)

Backup of your application

#### Defined in

[rest/v2/app.ts:236](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L236)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L5)
