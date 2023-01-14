[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / InternalRequest

# Interface: InternalRequest

[discloud.app](../modules/discloud_app.md).InternalRequest

Internal request options

## Hierarchy

- [`RequestData`](discloud_app.RequestData.md)

  ↳ **`InternalRequest`**

## Table of contents

### Properties

- [body](discloud_app.InternalRequest.md#body)
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

packages/rest/dist/@types/index.d.ts:40

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloud_app.RawFile.md)

File to be attached to this request

#### Inherited from

[RequestData](discloud_app.RequestData.md).[file](discloud_app.RequestData.md#file)

#### Defined in

packages/rest/dist/@types/index.d.ts:44

___

### fullRoute

• **fullRoute**: \`/${string}\`

#### Defined in

packages/rest/dist/@types/index.d.ts:60

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

Additional headers to add to this request

#### Inherited from

[RequestData](discloud_app.RequestData.md).[headers](discloud_app.RequestData.md#headers)

#### Defined in

packages/rest/dist/@types/index.d.ts:48

___

### method

• **method**: [`RequestMethod`](../enums/discloud_app.RequestMethod.md)

#### Defined in

packages/rest/dist/@types/index.d.ts:61

___

### query

• `Optional` **query**: `URLSearchParams`

Query string parameters to append to the called endpoint

#### Inherited from

[RequestData](discloud_app.RequestData.md).[query](discloud_app.RequestData.md#query)

#### Defined in

packages/rest/dist/@types/index.d.ts:52
