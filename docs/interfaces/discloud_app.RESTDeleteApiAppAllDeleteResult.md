[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTDeleteApiAppAllDeleteResult

# Interface: RESTDeleteApiAppAllDeleteResult

[discloud.app](../modules/discloud_app.md).RESTDeleteApiAppAllDeleteResult

## Hierarchy

- [`RESTApiAppManagerResult`](discloud_app.RESTApiAppManagerResult.md)

  ↳ **`RESTDeleteApiAppAllDeleteResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTDeleteApiAppAllDeleteResult.md#apps)
- [message](discloud_app.RESTDeleteApiAppAllDeleteResult.md#message)
- [status](discloud_app.RESTDeleteApiAppAllDeleteResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppManagerRemovedAll`](discloud_app.ApiAppManagerRemovedAll.md)

#### Overrides

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[apps](discloud_app.RESTApiAppManagerResult.md#apps)

#### Defined in

[packages/api-types/rest/v2/app.ts:258](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/app.ts#L258)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[message](discloud_app.RESTApiAppManagerResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiAppManagerResult](discloud_app.RESTApiAppManagerResult.md).[status](discloud_app.RESTApiAppManagerResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/99d4db4/packages/api-types/rest/v2/base.ts#L5)
