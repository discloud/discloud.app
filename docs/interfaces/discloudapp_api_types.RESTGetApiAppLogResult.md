[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiAppLogResult

# Interface: RESTGetApiAppLogResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiAppLogResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppLogResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTGetApiAppLogResult.md#apps)
- [message](discloudapp_api_types.RESTGetApiAppLogResult.md#message)
- [status](discloudapp_api_types.RESTGetApiAppLogResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppLog`](discloudapp_api_types.ApiAppLog.md)

Log of your application

#### Defined in

[rest/v2/app.ts:243](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/app.ts#L243)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/base.ts#L5)
