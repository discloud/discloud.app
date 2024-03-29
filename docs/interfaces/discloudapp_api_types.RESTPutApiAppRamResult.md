[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPutApiAppRamResult

# Interface: RESTPutApiAppRamResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPutApiAppRamResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppRamResult`**

## Table of contents

### Properties

- [message](discloudapp_api_types.RESTPutApiAppRamResult.md#message)
- [status](discloudapp_api_types.RESTPutApiAppRamResult.md#status)
- [statusCode](discloudapp_api_types.RESTPutApiAppRamResult.md#statuscode)

## Properties

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L5)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[rest/v2/app.ts:314](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/app.ts#L314)
