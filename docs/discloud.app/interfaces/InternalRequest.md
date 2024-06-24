[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / InternalRequest

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

packages/rest/out/@types/index.d.ts:47

***

### file?

> `optional` **file**: `File` \| [`RawFile`](RawFile.md)

File to be attached to this request

#### Inherited from

[`RequestData`](RequestData.md).[`file`](RequestData.md#file)

#### Defined in

packages/rest/out/@types/index.d.ts:51

***

### fullRoute

> **fullRoute**: \`/$\{string\}\`

#### Defined in

packages/rest/out/@types/index.d.ts:67

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Additional headers to add to this request

#### Inherited from

[`RequestData`](RequestData.md).[`headers`](RequestData.md#headers)

#### Defined in

packages/rest/out/@types/index.d.ts:55

***

### method

> **method**: [`RequestMethod`](../enumerations/RequestMethod.md)

#### Defined in

packages/rest/out/@types/index.d.ts:68

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `Iterable`\<[`string`, `string`]\> \| readonly [`string`, `string`][]

Query string parameters to append to the called endpoint

#### Inherited from

[`RequestData`](RequestData.md).[`query`](RequestData.md#query)

#### Defined in

packages/rest/out/@types/index.d.ts:59
