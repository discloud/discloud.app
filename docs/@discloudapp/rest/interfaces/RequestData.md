[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / RequestData

# Interface: RequestData

Defined in: [packages/rest/src/@types/index.ts:49](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L49)

Represents possible data to be given to an endpoint

## Extended by

- [`InternalRequest`](InternalRequest.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [packages/rest/src/@types/index.ts:53](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L53)

The body to send to this request.

***

### file?

> `optional` **file**: `File` \| [`RawFile`](../../../discloud.app/interfaces/RawFile.md)

Defined in: [packages/rest/src/@types/index.ts:57](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L57)

File to be attached to this request

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: [packages/rest/src/@types/index.ts:61](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L61)

Additional headers to add to this request

***

### query?

> `optional` **query**: `string` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| readonly `string`[]\> \| `URLSearchParams` \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: [packages/rest/src/@types/index.ts:65](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/rest/src/@types/index.ts#L65)

Query string parameters to append to the called endpoint
