[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPutApiAppCommitResult

# Interface: RESTPutApiAppCommitResult

[discloud.app](../modules/discloud_app.md).RESTPutApiAppCommitResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPutApiAppCommitResult`**

## Table of contents

### Properties

- [logs](discloud_app.RESTPutApiAppCommitResult.md#logs)
- [message](discloud_app.RESTPutApiAppCommitResult.md#message)
- [status](discloud_app.RESTPutApiAppCommitResult.md#status)
- [statusCode](discloud_app.RESTPutApiAppCommitResult.md#statuscode)

## Properties

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[packages/api-types/rest/v2/app.ts:294](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/app.ts#L294)

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

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[packages/api-types/rest/v2/app.ts:290](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/app.ts#L290)
