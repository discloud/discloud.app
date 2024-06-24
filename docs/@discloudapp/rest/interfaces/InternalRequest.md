[**@discloudapp/rest**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / InternalRequest

# Interface: InternalRequest

**`Internal`**

Internal request options

## Extends

- [`RequestData`](RequestData.md)

## Properties

### body?

> `optional` **body**: `unknown`

The body to send to this request.

#### Inherited from

[`RequestData`](RequestData.md).[`body`](RequestData.md#body)

#### Defined in

[packages/rest/src/@types/index.ts:50](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L50)

***

### file?

> `optional` **file**: `File` \| [`RawFile`](../../../discloud.app/interfaces/RawFile.md)

File to be attached to this request

#### Inherited from

[`RequestData`](RequestData.md).[`file`](RequestData.md#file)

#### Defined in

[packages/rest/src/@types/index.ts:54](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L54)

***

### fullRoute

> **fullRoute**: \`/$\{string\}\`

#### Defined in

[packages/rest/src/@types/index.ts:71](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L71)

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Additional headers to add to this request

#### Inherited from

[`RequestData`](RequestData.md).[`headers`](RequestData.md#headers)

#### Defined in

[packages/rest/src/@types/index.ts:58](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L58)

***

### method

> **method**: [`RequestMethod`](../enumerations/RequestMethod.md)

#### Defined in

[packages/rest/src/@types/index.ts:72](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L72)

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `Iterable`\<[`string`, `string`]\> \| readonly [`string`, `string`][]

Query string parameters to append to the called endpoint

#### Inherited from

[`RequestData`](RequestData.md).[`query`](RequestData.md#query)

#### Defined in

[packages/rest/src/@types/index.ts:62](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/rest/src/@types/index.ts#L62)
