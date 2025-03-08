[**@discloudapp/rest**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / RequestData

# Interface: RequestData

Defined in: [packages/rest/src/@types/index.ts:46](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/rest/src/@types/index.ts#L46)

Represents possible data to be given to an endpoint

## Extended by

- [`InternalRequest`](InternalRequest.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [packages/rest/src/@types/index.ts:50](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/rest/src/@types/index.ts#L50)

The body to send to this request.

***

### file?

> `optional` **file**: `File` \| [`RawFile`](../../../discloud.app/interfaces/RawFile.md)

Defined in: [packages/rest/src/@types/index.ts:54](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/rest/src/@types/index.ts#L54)

File to be attached to this request

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: [packages/rest/src/@types/index.ts:58](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/rest/src/@types/index.ts#L58)

Additional headers to add to this request

***

### query?

> `optional` **query**: `string` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `URLSearchParams` \| `Iterable`\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: [packages/rest/src/@types/index.ts:62](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/rest/src/@types/index.ts#L62)

Query string parameters to append to the called endpoint
