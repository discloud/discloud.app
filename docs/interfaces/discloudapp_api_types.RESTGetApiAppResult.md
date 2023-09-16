[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTGetApiAppResult

# Interface: RESTGetApiAppResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTGetApiAppResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTGetApiAppResult.md#apps)
- [message](discloudapp_api_types.RESTGetApiAppResult.md#message)
- [status](discloudapp_api_types.RESTGetApiAppResult.md#status)

## Properties

### apps

• **apps**: [`ApiApp`](discloudapp_api_types.ApiApp.md)

Your application

#### Defined in

[rest/v2/app.ts:219](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/app.ts#L219)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/base.ts#L5)
