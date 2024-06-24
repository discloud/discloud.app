[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / RequestData

# Interface: RequestData

Represents possible data to be given to an endpoint

## Extended by

- [`InternalRequest`](InternalRequest.md)

## Properties

### body?

> `optional` **body**: `unknown`

The body to send to this request.

#### Defined in

packages/rest/out/@types/index.d.ts:47

***

### file?

> `optional` **file**: `File` \| [`RawFile`](RawFile.md)

File to be attached to this request

#### Defined in

packages/rest/out/@types/index.d.ts:51

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Additional headers to add to this request

#### Defined in

packages/rest/out/@types/index.d.ts:55

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `Iterable`\<[`string`, `string`]\> \| readonly [`string`, `string`][]

Query string parameters to append to the called endpoint

#### Defined in

packages/rest/out/@types/index.d.ts:59
