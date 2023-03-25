[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPutApiAppAllRestartResult

# Interface: RESTPutApiAppAllRestartResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPutApiAppAllRestartResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloudapp_api_types.RESTApiAppManagerResult.md)

  ↳ **`RESTPutApiAppAllRestartResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTPutApiAppAllRestartResult.md#apps)
- [message](discloudapp_api_types.RESTPutApiAppAllRestartResult.md#message)
- [status](discloudapp_api_types.RESTPutApiAppAllRestartResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerRestartedAll`](discloudapp_api_types.ApiAppManagerRestartedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[apps](discloudapp_api_types.RESTApiAppManagerResult.md#apps)

#### Defined in

[packages/api-types/rest/v2/app.ts:253](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/app.ts#L253)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[message](discloudapp_api_types.RESTApiAppManagerResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[status](discloudapp_api_types.RESTApiAppManagerResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/0fe6620/packages/api-types/rest/v2/base.ts#L5)
