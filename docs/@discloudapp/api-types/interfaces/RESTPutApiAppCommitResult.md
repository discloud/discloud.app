[**@discloudapp/api-types**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTPutApiAppCommitResult

# Interface: RESTPutApiAppCommitResult

Defined in: [rest/v2/app.ts:299](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L299)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### logs?

> `optional` **logs**: `string`

Defined in: [rest/v2/app.ts:307](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L307)

API logs in case your app fails on launch

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: [`RESTApiStatusResponse`](../type-aliases/RESTApiStatusResponse.md)

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

***

### statusCode

> **statusCode**: `number`

Defined in: [rest/v2/app.ts:303](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/api-types/rest/v2/app.ts#L303)

Status code from API
