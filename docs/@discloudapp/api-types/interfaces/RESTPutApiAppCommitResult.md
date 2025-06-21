[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / RESTPutApiAppCommitResult

# Interface: RESTPutApiAppCommitResult

Defined in: [rest/v2/app.ts:293](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L293)

## Extends

- [`RESTApiBaseResult`](RESTApiBaseResult.md)

## Properties

### logs?

> `optional` **logs**: `string`

Defined in: [rest/v2/app.ts:301](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L301)

API logs in case your app fails on launch

***

### message

> **message**: `string`

Defined in: [rest/v2/base.ts:10](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L10)

Message of the API
- It is useful to use as logs

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`message`](RESTApiBaseResult.md#message)

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

[`RESTApiBaseResult`](RESTApiBaseResult.md).[`status`](RESTApiBaseResult.md#status)

***

### statusCode

> **statusCode**: `number`

Defined in: [rest/v2/app.ts:297](https://github.com/discloud/discloud.app/blob/1e4ce40911bd2c25d95ae21441839a6f9ec7c445/packages/api-types/rest/v2/app.ts#L297)

Status code from API
