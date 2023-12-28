[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTGetApiAppAllLogResult

# Interface: RESTGetApiAppAllLogResult

[discloud.app](../modules/discloud_app.md).RESTGetApiAppAllLogResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTGetApiAppAllLogResult`**

## Table of contents

### Properties

- [apps](discloud_app.RESTGetApiAppAllLogResult.md#apps)
- [message](discloud_app.RESTGetApiAppAllLogResult.md#message)
- [status](discloud_app.RESTGetApiAppAllLogResult.md#status)

## Properties

### apps

• **apps**: [`ApiAppLog`](discloud_app.ApiAppLog.md)[]

Logs of all of your applications

#### Defined in

[packages/api-types/rest/v2/app.ts:215](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/app.ts#L215)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/base.ts#L5)
