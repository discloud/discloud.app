[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPostApiUploadSuccessResult

# Interface: RESTPostApiUploadSuccessResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPostApiUploadSuccessResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPostApiUploadSuccessResult`**

## Table of contents

### Properties

- [app](discloudapp_api_types.RESTPostApiUploadSuccessResult.md#app)
- [logs](discloudapp_api_types.RESTPostApiUploadSuccessResult.md#logs)
- [message](discloudapp_api_types.RESTPostApiUploadSuccessResult.md#message)
- [status](discloudapp_api_types.RESTPostApiUploadSuccessResult.md#status)
- [statusCode](discloudapp_api_types.RESTPostApiUploadSuccessResult.md#statuscode)

## Properties

### app

• **app**: [`ApiUploadApp`](discloudapp_api_types.ApiUploadApp.md)

Your uploaded app

#### Defined in

[rest/v2/upload.ts:14](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/upload.ts#L14)

___

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[rest/v2/upload.ts:18](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/upload.ts#L18)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: ``"ok"``

The status of API response

#### Overrides

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/upload.ts:6](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/upload.ts#L6)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[rest/v2/upload.ts:10](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/upload.ts#L10)
