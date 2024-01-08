[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RequestData

# Interface: RequestData

[discloud.app](../modules/discloud_app.md).RequestData

Represents possible data to be given to an endpoint

## Hierarchy

- **`RequestData`**

  ↳ [`InternalRequest`](discloud_app.InternalRequest.md)

## Table of contents

### Properties

- [body](discloud_app.RequestData.md#body)
- [dispatcher](discloud_app.RequestData.md#dispatcher)
- [file](discloud_app.RequestData.md#file)
- [headers](discloud_app.RequestData.md#headers)
- [query](discloud_app.RequestData.md#query)

## Properties

### body

• `Optional` **body**: `unknown`

The body to send to this request.

#### Defined in

packages/rest/out/@types/index.d.ts:51

___

### dispatcher

• `Optional` **dispatcher**: `Dispatcher`

The [Agent](https://undici.nodejs.org/#/docs/api/Agent) to use for the request.

#### Defined in

packages/rest/out/@types/index.d.ts:55

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloud_app.RawFile.md)

File to be attached to this request

#### Defined in

packages/rest/out/@types/index.d.ts:59

___

### headers

• `Optional` **headers**: `Record`\<`string`, `string`\>

Additional headers to add to this request

#### Defined in

packages/rest/out/@types/index.d.ts:63

___

### query

• `Optional` **query**: `string` \| `URLSearchParams` \| `Record`\<`string`, `string` \| readonly `string`[]\> \| `Iterable`\<[`string`, `string`]\> \| readonly [`string`, `string`][]

Query string parameters to append to the called endpoint

#### Defined in

packages/rest/out/@types/index.d.ts:67
