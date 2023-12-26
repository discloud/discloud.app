[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/api-types](../modules/discloudapp_api_types.md) / RESTPostApiUploadErrorResult

# Interface: RESTPostApiUploadErrorResult

[@discloudapp/api-types](../modules/discloudapp_api_types.md).RESTPostApiUploadErrorResult

## Hierarchy

- [`RESTApiBaseResult`](discloudapp_api_types.RESTApiBaseResult.md)

  ↳ **`RESTPostApiUploadErrorResult`**

## Table of contents

### Properties

- [logs](discloudapp_api_types.RESTPostApiUploadErrorResult.md#logs)
- [message](discloudapp_api_types.RESTPostApiUploadErrorResult.md#message)
- [status](discloudapp_api_types.RESTPostApiUploadErrorResult.md#status)
- [statusCode](discloudapp_api_types.RESTPostApiUploadErrorResult.md#statuscode)

## Properties

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[rest/v2/upload.ts:30](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/upload.ts#L30)

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

• **status**: ``"error"``

The status of API response

#### Overrides

[RESTApiBaseResult](discloudapp_api_types.RESTApiBaseResult.md).[status](discloudapp_api_types.RESTApiBaseResult.md#status)

#### Defined in

[rest/v2/upload.ts:22](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/upload.ts#L22)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[rest/v2/upload.ts:26](https://github.com/discloud/discloud.app/blob/62751fe/packages/api-types/rest/v2/upload.ts#L26)
