[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RESTPutApiLocaleResult

# Interface: RESTPutApiLocaleResult

Defined in: [packages/api-types/rest/v2/locale.ts:3](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/locale.ts#L3)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`RESTApiBaseResult`](RESTApiBaseResult.md), `"message"`\>

## Properties

### locale

> **locale**: `string`

Defined in: [packages/api-types/rest/v2/locale.ts:7](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/locale.ts#L7)

Your locale

***

### localeList?

> `optional` **localeList**: `string`[]

Defined in: [packages/api-types/rest/v2/locale.ts:15](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/locale.ts#L15)

List of locales in case you choose a wrong locale

***

### message?

> `optional` **message**: `string`

Defined in: [packages/api-types/rest/v2/locale.ts:11](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/locale.ts#L11)

API message response

***

### status

> **status**: `"ok"` \| `"error"`

Defined in: [packages/api-types/rest/v2/base.ts:5](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/rest/v2/base.ts#L5)

The status of API response

#### Inherited from

`Omit.status`
