[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPutApiAppAllStopResult

# Interface: RESTPutApiAppAllStopResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPutApiAppAllStopResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloudapp_api_types.RESTApiAppManagerResult.md)

  ↳ **`RESTPutApiAppAllStopResult`**

## Table of contents

### Properties

- [apps](discloudapp_api_types.RESTPutApiAppAllStopResult.md#apps)
- [message](discloudapp_api_types.RESTPutApiAppAllStopResult.md#message)
- [status](discloudapp_api_types.RESTPutApiAppAllStopResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerStopedAll`](discloudapp_api_types.ApiAppManagerStopedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[apps](discloudapp_api_types.RESTApiAppManagerResult.md#apps)

#### Defined in

[rest/v2/app.ts:260](https://github.com/discloud/discloud.app/blob/9141dfb/packages/api-types/rest/v2/app.ts#L260)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[message](discloudapp_api_types.RESTApiAppManagerResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/9141dfb/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloudapp_api_types.RESTApiAppManagerResult.md).[status](discloudapp_api_types.RESTApiAppManagerResult.md#status)

#### Defined in

[rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/9141dfb/packages/api-types/rest/v2/base.ts#L5)
