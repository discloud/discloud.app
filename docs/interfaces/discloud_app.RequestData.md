[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RequestData

# Interface: RequestData

[discloud.app](../modules/discloud_app.md).RequestData

Represents possible data to be given to an endpoint

## Hierarchy

- **`RequestData`**

  ↳ [`InternalRequest`](discloud_app.InternalRequest.md)

## Table of contents

### Properties

- [body](discloud_app.RequestData.md#body)
- [file](discloud_app.RequestData.md#file)
- [headers](discloud_app.RequestData.md#headers)
- [query](discloud_app.RequestData.md#query)

## Properties

### body

• `Optional` **body**: `unknown`

The body to send to this request.

#### Defined in

packages/rest/dist/@types/index.d.ts:40

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloud_app.RawFile.md)

File to be attached to this request

#### Defined in

packages/rest/dist/@types/index.d.ts:44

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

Additional headers to add to this request

#### Defined in

packages/rest/dist/@types/index.d.ts:48

___

### query

• `Optional` **query**: `URLSearchParams`

Query string parameters to append to the called endpoint

#### Defined in

packages/rest/dist/@types/index.d.ts:52
