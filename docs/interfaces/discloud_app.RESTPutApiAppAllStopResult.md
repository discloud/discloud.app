[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPutApiAppAllStopResult

# Interface: RESTPutApiAppAllStopResult

[discloud.app](../modules/discloud_app.md).RESTPutApiAppAllStopResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloud_app.RESTApiAppManagerResult.md)

  ↳ **`RESTPutApiAppAllStopResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTPutApiAppAllStopResult.md#apps)
- [message](discloud_app.RESTPutApiAppAllStopResult.md#message)
- [status](discloud_app.RESTPutApiAppAllStopResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerStopedAll`](discloud_app.ApiAppManagerStopedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[apps](discloud_app.RESTApiAppManagerResult.md#apps)

#### Defined in

[packages/api-types/rest/v2/app.ts:260](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/app.ts#L260)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[message](discloud_app.RESTApiAppManagerResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[status](discloud_app.RESTApiAppManagerResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/c6f50ea/packages/api-types/rest/v2/base.ts#L5)
