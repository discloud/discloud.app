[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPostApiUploadResult

# Interface: RESTPostApiUploadResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPostApiUploadResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPostApiUploadResult`**

## Table of contents

### Properties

- [app](discloudapp_api_types.RESTPostApiUploadResult.md#app)
- [logs](discloudapp_api_types.RESTPostApiUploadResult.md#logs)
- [message](discloudapp_api_types.RESTPostApiUploadResult.md#message)
- [status](discloudapp_api_types.RESTPostApiUploadResult.md#status)
- [statusCode](discloudapp_api_types.RESTPostApiUploadResult.md#statuscode)

## Properties

### app

• **app**: [`ApiUploadApp`](discloudapp_api_types.ApiUploadApp.md)

Your uploaded app

#### Defined in

[packages/api-types/rest/v2/upload.ts:11](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/upload.ts#L11)

___

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[packages/api-types/rest/v2/upload.ts:15](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/upload.ts#L15)

___

### message

• **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[message](discloudapp_api_types.RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L10)

___

### status

• **status**: [`RESTApiStatusResponse`](../modules/discloudapp_api_types.md#restapistatusresponse)

The status of API response

#### Inherited from

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/base.ts#L5)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[packages/api-types/rest/v2/upload.ts:7](https://github.com/discloud/discloud.app/blob/482fdb3/packages/api-types/rest/v2/upload.ts#L7)