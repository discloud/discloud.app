[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTPostApiUploadOkResult

# Interface: RESTPostApiUploadOkResult

Defined in: [rest/v2/upload.ts:5](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/upload.ts#L5)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### app

> **app**: [`ApiUploadApp`](ApiUploadApp.md)

Defined in: [rest/v2/upload.ts:14](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/upload.ts#L14)

Your uploaded app

***

### logs?

> `optional` **logs**: `string`

Defined in: [rest/v2/upload.ts:18](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/upload.ts#L18)

API logs in case your app fails on launch

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"ok"`

Defined in: [rest/v2/upload.ts:6](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/upload.ts#L6)

The status of API response

#### Overrides

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

***

### statusCode

> **statusCode**: `number`

Defined in: [rest/v2/upload.ts:10](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/rest/v2/upload.ts#L10)

Status code from API
