[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTPostApiUploadErrorResult

# Interface: RESTPostApiUploadErrorResult

Defined in: [rest/v2/upload.ts:21](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/upload.ts#L21)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### logs?

> `optional` **logs**: `string`

Defined in: [rest/v2/upload.ts:30](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/upload.ts#L30)

API logs in case your app fails on launch

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"error"`

Defined in: [rest/v2/upload.ts:22](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/upload.ts#L22)

The status of API response

#### Overrides

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

***

### statusCode

> **statusCode**: `number`

Defined in: [rest/v2/upload.ts:26](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/api-types/rest/v2/upload.ts#L26)

Status code from API
