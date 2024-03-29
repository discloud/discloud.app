[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTDeleteApiAppAptResult

# Interface: RESTDeleteApiAppAptResult

[discloud.app](../modules/discloud_app.md).RESTDeleteApiAppAptResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTDeleteApiAppAptResult`**

## Table of contents

### Properties

- [message](discloud_app.RESTDeleteApiAppAptResult.md#message)
- [status](discloud_app.RESTDeleteApiAppAptResult.md#status)
- [statusCode](discloud_app.RESTDeleteApiAppAptResult.md#statuscode)

## Properties

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[message](discloud_app.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloud_app.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/base.ts#L5)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[packages/api-types/rest/v2/app.ts:292](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/app.ts#L292)
