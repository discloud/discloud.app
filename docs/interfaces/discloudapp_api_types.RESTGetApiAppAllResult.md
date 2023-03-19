[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiAppAllResult

# Interface: RESTGetApiAppAllResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiAppAllResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppAllResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTGetApiAppAllResult.md#apps)
- [message](discloudapp_api_types.RESTGetApiAppAllResult.md#message)
- [status](discloudapp_api_types.RESTGetApiAppAllResult.md#status)

## Properties

### apps

• **apps**: [`ApiApp`](discloudapp_api_types.ApiApp.md)[]

All of your applications

#### Defined in

[packages/api-types/rest/v2/app.ts:192](https://github.com/discloud/discloud.app/blob/9c516a5/packages/api-types/rest/v2/app.ts#L192)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/9c516a5/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/9c516a5/packages/api-types/rest/v2/base.ts#L5)
