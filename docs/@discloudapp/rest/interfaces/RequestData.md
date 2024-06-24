[**@discloudapp/rest**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / RequestData

# Interface: RequestData

Represents possible data to be given to an endpoint

## Extended by

- [`InternalRequest`](InternalRequest.md)

## Properties

### body?

> `optional` **body**: `unknown`

The body to send to this request.

#### Defined in

[packages/rest/src/@types/index.ts:50](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L50)

***

### file?

> `optional` **file**: `File` \| [`RawFile`](../../../discloud.app/interfaces/RawFile.md)

File to be attached to this request

#### Defined in

[packages/rest/src/@types/index.ts:54](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L54)

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Additional headers to add to this request

#### Defined in

[packages/rest/src/@types/index.ts:58](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L58)

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `Iterable`\<[`string`, `string`]\> \| readonly [`string`, `string`][]

Query string parameters to append to the called endpoint

#### Defined in

[packages/rest/src/@types/index.ts:62](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L62)
