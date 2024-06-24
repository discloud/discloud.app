[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTPostApiUploadOkResult

# Interface: RESTPostApiUploadOkResult

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### app

> **app**: [`ApiUploadApp`](ApiUploadApp.md)

Your uploaded app

#### Defined in

[packages/api-types/rest/v2/upload.ts:14](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/upload.ts#L14)

***

### logs?

> `optional` **logs**: `string`

API logs in case your app fails on launch

#### Defined in

[packages/api-types/rest/v2/upload.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/upload.ts#L18)

***

### message

> **message**: `string`

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

#### Defined in

[packages/api-types/rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/base.ts#L10)

***

### status

> **status**: `"ok"`

The status of API response

#### Overrides

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

#### Defined in

[packages/api-types/rest/v2/upload.ts:6](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/upload.ts#L6)

***

### statusCode

> **statusCode**: `number`

Status code from API

#### Defined in

[packages/api-types/rest/v2/upload.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/upload.ts#L10)
