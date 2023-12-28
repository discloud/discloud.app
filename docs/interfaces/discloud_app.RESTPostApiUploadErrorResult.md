[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RESTPostApiUploadErrorResult

# Interface: RESTPostApiUploadErrorResult

[discloud.app](../modules/discloud_app.md).RESTPostApiUploadErrorResult

## Hierarchy

- [`RESTApiBaseResult`](discloud_app.RESTApiBaseResult.md)

  ↳ **`RESTPostApiUploadErrorResult`**

## Table of contents

### Properties

- [logs](discloud_app.RESTPostApiUploadErrorResult.md#logs)
- [message](discloud_app.RESTPostApiUploadErrorResult.md#message)
- [status](discloud_app.RESTPostApiUploadErrorResult.md#status)
- [statusCode](discloud_app.RESTPostApiUploadErrorResult.md#statuscode)

## Properties

### logs

• `Optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[packages/api-types/rest/v2/upload.ts:30](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/upload.ts#L30)

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

• **status**: ``"error"``

The status of API response

#### Overrides

[RESTApiBaseResult](discloud_app.RESTApiBaseResult.md).[status](discloud_app.RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/upload.ts:22](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/upload.ts#L22)

___

### statusCode

• **statusCode**: `number`

Status code from API

#### Defined in

[packages/api-types/rest/v2/upload.ts:26](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/api-types/rest/v2/upload.ts#L26)
