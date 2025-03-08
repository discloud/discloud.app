[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / InternalRequest

# Interface: InternalRequest

Defined in: packages/rest/out/@types/index.d.ts:64

**`Internal`**

Internal request options

## Extends

- [`RequestData`](RequestData.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: packages/rest/out/@types/index.d.ts:45

The body to send to this request.

#### Inherited from

[`RequestData`](RequestData.md).[`body`](RequestData.md#body)

***

### file?

> `optional` **file**: `File` \| [`RawFile`](RawFile.md)

Defined in: packages/rest/out/@types/index.d.ts:49

File to be attached to this request

#### Inherited from

[`RequestData`](RequestData.md).[`file`](RequestData.md#file)

***

### fullRoute

> **fullRoute**: `` `/${string}` ``

Defined in: packages/rest/out/@types/index.d.ts:65

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: packages/rest/out/@types/index.d.ts:53

Additional headers to add to this request

#### Inherited from

[`RequestData`](RequestData.md).[`headers`](RequestData.md#headers)

***

### method

> **method**: [`RequestMethod`](../enumerations/RequestMethod.md)

Defined in: packages/rest/out/@types/index.d.ts:66

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `Iterable`\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: packages/rest/out/@types/index.d.ts:57

Query string parameters to append to the called endpoint

#### Inherited from

[`RequestData`](RequestData.md).[`query`](RequestData.md#query)
