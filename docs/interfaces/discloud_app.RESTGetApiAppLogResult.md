[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiAppLogResult

# Interface: RESTGetApiAppLogResult

[discloud.app](../modules/discloud_app.md).RESTGetApiAppLogResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppLogResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTGetApiAppLogResult.md#apps)
- [message](discloud_app.RESTGetApiAppLogResult.md#message)
- [status](discloud_app.RESTGetApiAppLogResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppLog`](discloud_app.ApiAppLog.md)

Log of your application

#### Defined in

[packages/api-types/rest/v2/app.ts:229](https://github.com/discloud/discloud.app/blob/a142e7d/packages/api-types/rest/v2/app.ts#L229)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/a142e7d/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/a142e7d/packages/api-types/rest/v2/base.ts#L5)
