[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / InternalRequest

# Interface: InternalRequest

[discloud.app](../modules/discloud_app.md).InternalRequest

Internal request options

## Hierarchy

- [`RequestData`](discloud_app.RequestData.md)

  ↳ **`InternalRequest`**

## Table of contents

### Properties

- [body](discloud_app.InternalRequest.md#body)
- [dispatcher](discloud_app.InternalRequest.md#dispatcher)
- [file](discloud_app.InternalRequest.md#file)
- [fullRoute](discloud_app.InternalRequest.md#fullroute)
- [headers](discloud_app.InternalRequest.md#headers)
- [method](discloud_app.InternalRequest.md#method)
- [query](discloud_app.InternalRequest.md#query)

## Properties

### body

• `Optional` **body**: `unknown`

The body to send to this request.

#### Inherited from

[RequestData](discloud_app.RequestData.md).[body](discloud_app.RequestData.md#body)

#### Defined in

packages/rest/dist/@types/index.d.ts:51

___

### dispatcher

• `Optional` **dispatcher**: `Agent`

The [Agent](https://undici.nodejs.org/#/docs/api/Agent) to use for the request.

#### Inherited from

[RequestData](discloud_app.RequestData.md).[dispatcher](discloud_app.RequestData.md#dispatcher)

#### Defined in

packages/rest/dist/@types/index.d.ts:55

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloud_app.RawFile.md)

File to be attached to this request

#### Inherited from

[RequestData](discloud_app.RequestData.md).[file](discloud_app.RequestData.md#file)

#### Defined in

packages/rest/dist/@types/index.d.ts:59

___

### fullRoute

• **fullRoute**: \`/${string}\`

#### Defined in

packages/rest/dist/@types/index.d.ts:75

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

Additional headers to add to this request

#### Inherited from

[RequestData](discloud_app.RequestData.md).[headers](discloud_app.RequestData.md#headers)

#### Defined in

packages/rest/dist/@types/index.d.ts:63

___

### method

• **method**: [`RequestMethod`](../enums/discloud_app.RequestMethod.md)

#### Defined in

packages/rest/dist/@types/index.d.ts:76

___

### query

• `Optional` **query**: `URLSearchParams`

Query string parameters to append to the called endpoint

#### Inherited from

[RequestData](discloud_app.RequestData.md).[query](discloud_app.RequestData.md#query)

#### Defined in

packages/rest/dist/@types/index.d.ts:67
