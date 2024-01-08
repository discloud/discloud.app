[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPostApiUploadOkResult

# Interface: RESTPostApiUploadOkResult

[discloud.app](../modules/discloud_app.md).RESTPostApiUploadOkResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPostApiUploadOkResult`**

## Table of contents

### Properties

- [app](discloud_app.RESTPostApiUploadOkResult.md#app)
- [logs](discloud_app.RESTPostApiUploadOkResult.md#logs)
- [message](discloud_app.RESTPostApiUploadOkResult.md#message)
- [status](discloud_app.RESTPostApiUploadOkResult.md#status)
- [statusCode](discloud_app.RESTPostApiUploadOkResult.md#statuscode)

## Properties

### app

• **app**: [`ApiUploadApp`](discloud_app.ApiUploadApp.md)

Your uploaded app

#### Defined in

[packages/api-types/rest/v2/upload.ts:14](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/upload.ts#L14)

___

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[packages/api-types/rest/v2/upload.ts:18](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/upload.ts#L18)

___

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

• **status**: ``"ok"``

The status of API response

#### Overrides

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/upload.ts:6](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/upload.ts#L6)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[packages/api-types/rest/v2/upload.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/api-types/rest/v2/upload.ts#L10)
