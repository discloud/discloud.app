[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPutApiAppAllStartResult

# Interface: RESTPutApiAppAllStartResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPutApiAppAllStartResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloudapp_api_types.RESTApiAppManagerResult.md)

  ↳ **`RESTPutApiAppAllStartResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTPutApiAppAllStartResult.md#apps)
- [message](discloudapp_api_types.RESTPutApiAppAllStartResult.md#message)
- [status](discloudapp_api_types.RESTPutApiAppAllStartResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerStartedAll`](discloudapp_api_types.ApiAppManagerStartedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[apps](discloudapp_api_types.RESTApiAppManagerResult.md#apps)

#### Defined in

[rest/v2/app.ts:266](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L266)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[message](discloudapp_api_types.RESTApiAppManagerResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[status](discloudapp_api_types.RESTApiAppManagerResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L5)
