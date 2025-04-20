[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / InternalRequest

# Interface: InternalRequest

Defined in: packages/rest/dist/@types/index.d.ts:66

**`Internal`**

Internal request options

## Extends

- [`RequestData`](RequestData.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: packages/rest/dist/@types/index.d.ts:47

The body to send to this request.

#### Inherited from

[`RequestData`](RequestData.md).[`body`](RequestData.md#body)

***

### file?

> `optional` **file**: `File` \| [`RawFile`](RawFile.md)

Defined in: packages/rest/dist/@types/index.d.ts:51

File to be attached to this request

#### Inherited from

[`RequestData`](RequestData.md).[`file`](RequestData.md#file)

***

### fullRoute

> **fullRoute**: `` `/${string}` ``

Defined in: packages/rest/dist/@types/index.d.ts:67

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: packages/rest/dist/@types/index.d.ts:55

Additional headers to add to this request

#### Inherited from

[`RequestData`](RequestData.md).[`headers`](RequestData.md#headers)

***

### method

> **method**: [`RequestMethod`](../enumerations/RequestMethod.md)

Defined in: packages/rest/dist/@types/index.d.ts:68

***

### query?

> `optional` **query**: `string` \| `URLSearchParams` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| readonly `string`[]\> \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: packages/rest/dist/@types/index.d.ts:59

Query string parameters to append to the called endpoint

#### Inherited from

[`RequestData`](RequestData.md).[`query`](RequestData.md#query)
