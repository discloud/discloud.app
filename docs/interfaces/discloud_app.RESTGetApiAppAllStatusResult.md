[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiAppAllStatusResult

# Interface: RESTGetApiAppAllStatusResult

[discloud.app](../modules/discloud_app.md).RESTGetApiAppAllStatusResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppAllStatusResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTGetApiAppAllStatusResult.md#apps)
- [message](discloud_app.RESTGetApiAppAllStatusResult.md#message)
- [status](discloud_app.RESTGetApiAppAllStatusResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppStatus`](discloud_app.ApiAppStatus.md)[]

Status of all of your applications

#### Defined in

[packages/api-types/rest/v2/app.ts:213](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/app.ts#L213)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L5)