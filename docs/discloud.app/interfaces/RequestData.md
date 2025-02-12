[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RequestData

# Interface: RequestData

Defined in: packages/rest/out/@types/index.d.ts:41

Represents possible data to be given to an endpoint

## Extended by

- [`InternalRequest`](InternalRequest.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: packages/rest/out/@types/index.d.ts:45

The body to send to this request.

***

### file?

> `optional` **file**: `File` \| [`RawFile`](RawFile.md)

Defined in: packages/rest/out/@types/index.d.ts:49

File to be attached to this request

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: packages/rest/out/@types/index.d.ts:53

Additional headers to add to this request

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `Iterable`\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: packages/rest/out/@types/index.d.ts:57

Query string parameters to append to the called endpoint
