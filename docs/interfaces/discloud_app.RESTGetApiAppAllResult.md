[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiAppAllResult

# Interface: RESTGetApiAppAllResult

[discloud.app](../modules/discloud_app.md).RESTGetApiAppAllResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppAllResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTGetApiAppAllResult.md#apps)
- [message](discloud_app.RESTGetApiAppAllResult.md#message)
- [status](discloud_app.RESTGetApiAppAllResult.md#status)

## Properties

### apps

• **apps**: [`ApiApp`](discloud_app.ApiApp.md)[]

All of your applications

#### Defined in

[packages/api-types/rest/v2/app.ts:192](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/app.ts#L192)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/base.ts#L5)
