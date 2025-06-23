[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / InternalRequest

# Interface: InternalRequest

Defined in: [packages/rest/src/@types/index.ts:73](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L73)

**`Internal`**

Internal request options

## Extends

- [`RequestData`](RequestData.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [packages/rest/src/@types/index.ts:53](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L53)

The body to send to this request.

#### Inherited from

[`RequestData`](RequestData.md).[`body`](RequestData.md#body)

***

### file?

> `optional` **file**: `File` \| [`RawFile`](../../../discloud.app/interfaces/RawFile.md)

Defined in: [packages/rest/src/@types/index.ts:57](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L57)

File to be attached to this request

#### Inherited from

[`RequestData`](RequestData.md).[`file`](RequestData.md#file)

***

### fullRoute

> **fullRoute**: `` `/${string}` ``

Defined in: [packages/rest/src/@types/index.ts:74](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L74)

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: [packages/rest/src/@types/index.ts:61](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L61)

Additional headers to add to this request

#### Inherited from

[`RequestData`](RequestData.md).[`headers`](RequestData.md#headers)

***

### method

> **method**: [`RequestMethod`](../enumerations/RequestMethod.md)

Defined in: [packages/rest/src/@types/index.ts:75](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L75)

***

### query?

> `optional` **query**: `string` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| readonly `string`[]\> \| `URLSearchParams` \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: [packages/rest/src/@types/index.ts:65](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L65)

Query string parameters to append to the called endpoint

#### Inherited from

[`RequestData`](RequestData.md).[`query`](RequestData.md#query)
