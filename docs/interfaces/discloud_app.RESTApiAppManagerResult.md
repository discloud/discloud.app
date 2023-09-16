[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTApiAppManagerResult

# Interface: RESTApiAppManagerResult

[discloud.app](../modules/discloud_app.md).RESTApiAppManagerResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTApiAppManagerResult`**

  ↳↳ [`RESTDeleteApiAppAllDeleteResult`](discloud_app.RESTDeleteApiAppAllDeleteResult.md)

  ↳↳ [`RESTPutApiAppAllRestartResult`](discloud_app.RESTPutApiAppAllRestartResult.md)

  ↳↳ [`RESTPutApiAppAllStartResult`](discloud_app.RESTPutApiAppAllStartResult.md)

  ↳↳ [`RESTPutApiAppAllStopResult`](discloud_app.RESTPutApiAppAllStopResult.md)

## Table of contents

### Properties

- [apps](discloud_app.RESTApiAppManagerResult.md#apps)
- [message](discloud_app.RESTApiAppManagerResult.md#message)
- [status](discloud_app.RESTApiAppManagerResult.md#status)

## Properties

### apps

• **apps**: `Partial`<[`ApiAppManager`](discloud_app.ApiAppManager.md)\>

#### Defined in

[packages/api-types/rest/v2/app.ts:244](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/app.ts#L244)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/a945852/packages/api-types/rest/v2/base.ts#L5)
