[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPutApiAppAllStartResult

# Interface: RESTPutApiAppAllStartResult

[discloud.app](../modules/discloud_app.md).RESTPutApiAppAllStartResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloud_app.RESTApiAppManagerResult.md)

  ↳ **`RESTPutApiAppAllStartResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTPutApiAppAllStartResult.md#apps)
- [message](discloud_app.RESTPutApiAppAllStartResult.md#message)
- [status](discloud_app.RESTPutApiAppAllStartResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerStartedAll`](discloud_app.ApiAppManagerStartedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[apps](discloud_app.RESTApiAppManagerResult.md#apps)

#### Defined in

[packages/api-types/rest/v2/app.ts:256](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/app.ts#L256)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[message](discloud_app.RESTApiAppManagerResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[status](discloud_app.RESTApiAppManagerResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/e5beb23/packages/api-types/rest/v2/base.ts#L5)
