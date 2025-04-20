[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RequestData

# Interface: RequestData

Defined in: packages/rest/dist/@types/index.d.ts:43

Represents possible data to be given to an endpoint

## Extended by

- [`InternalRequest`](InternalRequest.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: packages/rest/dist/@types/index.d.ts:47

The body to send to this request.

***

### file?

> `optional` **file**: `File` \| [`RawFile`](RawFile.md)

Defined in: packages/rest/dist/@types/index.d.ts:51

File to be attached to this request

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: packages/rest/dist/@types/index.d.ts:55

Additional headers to add to this request

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| readonly `string`[]\> \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: packages/rest/dist/@types/index.d.ts:59

Query string parameters to append to the called endpoint
