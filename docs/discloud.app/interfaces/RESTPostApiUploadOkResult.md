[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTPostApiUploadOkResult

# Interface: RESTPostApiUploadOkResult

Defined in: [packages/api-types/rest/v2/upload.ts:5](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/upload.ts#L5)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### app

> **app**: [`ApiUploadApp`](ApiUploadApp.md)

Defined in: [packages/api-types/rest/v2/upload.ts:14](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/upload.ts#L14)

Your uploaded app

***

### logs?

> `optional` **logs**: `string`

Defined in: [packages/api-types/rest/v2/upload.ts:18](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/upload.ts#L18)

API logs in case your app fails on launch

***

### message

> **message**: `string`

Defined in: [packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"ok"`

Defined in: [packages/api-types/rest/v2/upload.ts:6](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/upload.ts#L6)

The status of API response

#### Overrides

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

***

### statusCode

> **statusCode**: `number`

Defined in: [packages/api-types/rest/v2/upload.ts:10](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/rest/v2/upload.ts#L10)

Status code from API
