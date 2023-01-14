[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiAppAllStatusResult

# Interface: RESTGetApiAppAllStatusResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiAppAllStatusResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppAllStatusResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTGetApiAppAllStatusResult.md#apps)
- [message](discloudapp_api_types.RESTGetApiAppAllStatusResult.md#message)
- [status](discloudapp_api_types.RESTGetApiAppAllStatusResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppStatus`](discloudapp_api_types.ApiAppStatus.md)[]

Status of all of your applications

#### Defined in

[packages/api-types/rest/v2/app.ts:213](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L213)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L5)
