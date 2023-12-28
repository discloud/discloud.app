[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPostApiAppTeamResult

# Interface: RESTPostApiAppTeamResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPostApiAppTeamResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPostApiAppTeamResult`**

## Table of contents

### Properties

- [app](discloudapp_api_types.RESTPostApiAppTeamResult.md#app)
- [message](discloudapp_api_types.RESTPostApiAppTeamResult.md#message)
- [status](discloudapp_api_types.RESTPostApiAppTeamResult.md#status)

## Properties

### app

• **app**: [`ApiAppTeamManager`](discloudapp_api_types.ApiAppTeamManager.md)

#### Defined in

[rest/v2/app.ts:342](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L342)

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
