[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPostApiUploadResult

# Interface: RESTPostApiUploadResult

[discloud.app](../modules/discloud_app.md).RESTPostApiUploadResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPostApiUploadResult`**

## Table of contents

### Properties

- [app](discloud_app.RESTPostApiUploadResult.md#app)
- [logs](discloud_app.RESTPostApiUploadResult.md#logs)
- [message](discloud_app.RESTPostApiUploadResult.md#message)
- [status](discloud_app.RESTPostApiUploadResult.md#status)
- [statusCode](discloud_app.RESTPostApiUploadResult.md#statuscode)

## Properties

### app

• **app**: [`ApiUploadApp`](discloud_app.ApiUploadApp.md)

Your uploaded app

#### Defined in

[packages/api-types/rest/v2/upload.ts:11](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/upload.ts#L11)

___

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[packages/api-types/rest/v2/upload.ts:15](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/upload.ts#L15)

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

[packages/api-types/rest/v2/upload.ts:7](https://github.com/discloud/discloud.app/blob/86003e6/packages/api-types/rest/v2/upload.ts#L7)
