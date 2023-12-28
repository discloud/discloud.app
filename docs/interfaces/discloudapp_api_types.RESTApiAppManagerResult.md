[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTApiAppManagerResult

# Interface: RESTApiAppManagerResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTApiAppManagerResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTApiAppManagerResult`**

  ↳↳ [`RESTDeleteApiAppAllDeleteResult`](discloudapp_api_types.RESTDeleteApiAppAllDeleteResult.md)

  ↳↳ [`RESTPutApiAppAllRestartResult`](discloudapp_api_types.RESTPutApiAppAllRestartResult.md)

  ↳↳ [`RESTPutApiAppAllStartResult`](discloudapp_api_types.RESTPutApiAppAllStartResult.md)

  ↳↳ [`RESTPutApiAppAllStopResult`](discloudapp_api_types.RESTPutApiAppAllStopResult.md)

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTApiAppManagerResult.md#apps)
- [message](discloudapp_api_types.RESTApiAppManagerResult.md#message)
- [status](discloudapp_api_types.RESTApiAppManagerResult.md#status)

## Properties

### apps

• **apps**: `Partial`\<[`ApiAppManager`](discloudapp_api_types.ApiAppManager.md)\>

#### Defined in

[rest/v2/app.ts:254](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L254)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/base.ts#L5)
