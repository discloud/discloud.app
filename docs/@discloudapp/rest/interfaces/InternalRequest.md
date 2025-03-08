[**@discloudapp/rest**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/rest](../README.md) / InternalRequest

# Interface: InternalRequest

Defined in: [packages/rest/src/@types/index.ts:70](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L70)

**`Internal`**

Internal request options

## Extends

- [`RequestData`](RequestData.md)

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [packages/rest/src/@types/index.ts:50](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L50)

The body to send to this request.

#### Inherited from

[`RequestData`](RequestData.md).[`body`](RequestData.md#body)

***

### file?

> `optional` **file**: `File` \| [`RawFile`](../../../discloud.app/interfaces/RawFile.md)

Defined in: [packages/rest/src/@types/index.ts:54](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L54)

File to be attached to this request

#### Inherited from

[`RequestData`](RequestData.md).[`file`](RequestData.md#file)

***

### fullRoute

> **fullRoute**: `` `/${string}` ``

Defined in: [packages/rest/src/@types/index.ts:71](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L71)

***

### headers?

> `optional` **headers**: `HeadersInit`

Defined in: [packages/rest/src/@types/index.ts:58](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L58)

Additional headers to add to this request

#### Inherited from

[`RequestData`](RequestData.md).[`headers`](RequestData.md#headers)

***

### method

> **method**: [`RequestMethod`](../enumerations/RequestMethod.md)

Defined in: [packages/rest/src/@types/index.ts:72](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L72)

***

### query?

> `optional` **query**: `string` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `URLSearchParams` \| `Iterable`\<\[`string`, `string`\], `any`, `any`\> \| readonly \[`string`, `string`\][]

Defined in: [packages/rest/src/@types/index.ts:62](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/rest/src/@types/index.ts#L62)

Query string parameters to append to the called endpoint

#### Inherited from

[`RequestData`](RequestData.md).[`query`](RequestData.md#query)
