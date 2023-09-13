[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiAppStatusResult

# Interface: RESTGetApiAppStatusResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiAppStatusResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppStatusResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTGetApiAppStatusResult.md#apps)
- [message](discloudapp_api_types.RESTGetApiAppStatusResult.md#message)
- [status](discloudapp_api_types.RESTGetApiAppStatusResult.md#status)

## Properties

### apps

• **apps**: [`ApiStatusApp`](discloudapp_api_types.ApiStatusApp.md)

Status of your application

#### Defined in

[rest/v2/app.ts:240](https://github.com/discloud/discloud.app/blob/bf097cb/packages/api-types/rest/v2/app.ts#L240)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/bf097cb/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/bf097cb/packages/api-types/rest/v2/base.ts#L5)
