[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPutApiAppAllRestartResult

# Interface: RESTPutApiAppAllRestartResult

[discloud.app](../modules/discloud_app.md).RESTPutApiAppAllRestartResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloud_app.RESTApiAppManagerResult.md)

  ↳ **`RESTPutApiAppAllRestartResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTPutApiAppAllRestartResult.md#apps)
- [message](discloud_app.RESTPutApiAppAllRestartResult.md#message)
- [status](discloud_app.RESTPutApiAppAllRestartResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerRestartedAll`](discloud_app.ApiAppManagerRestartedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[apps](discloud_app.RESTApiAppManagerResult.md#apps)

#### Defined in

[packages/api-types/rest/v2/app.ts:252](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/app.ts#L252)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[message](discloud_app.RESTApiAppManagerResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[status](discloud_app.RESTApiAppManagerResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/base.ts#L5)
