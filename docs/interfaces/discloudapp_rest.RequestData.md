[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / RequestData

# Interface: RequestData

[@discloudapp/rest](../modules/discloudapp_rest.md).RequestData

Represents possible data to be given to an endpoint

## Hierarchy

- **`RequestData`**

  ↳ [`InternalRequest`](discloudapp_rest.InternalRequest.md)

## Table of contents

### Properties

- [body](discloudapp_rest.RequestData.md#body)
- [dispatcher](discloudapp_rest.RequestData.md#dispatcher)
- [file](discloudapp_rest.RequestData.md#file)
- [headers](discloudapp_rest.RequestData.md#headers)
- [query](discloudapp_rest.RequestData.md#query)

## Properties

### body

• `Optional` **body**: `unknown`

The body to send to this request.

#### Defined in

[packages/rest/src/@types/index.ts:55](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/rest/src/@types/index.ts#L55)

___

### dispatcher

• `Optional` **dispatcher**: `Agent`

The [Agent](https://undici.nodejs.org/#/docs/api/Agent) to use for the request.

#### Defined in

[packages/rest/src/@types/index.ts:59](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/rest/src/@types/index.ts#L59)

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloud_app.RawFile.md)

File to be attached to this request

#### Defined in

[packages/rest/src/@types/index.ts:63](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/rest/src/@types/index.ts#L63)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

Additional headers to add to this request

#### Defined in

[packages/rest/src/@types/index.ts:67](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/rest/src/@types/index.ts#L67)

___

### query

• `Optional` **query**: `URLSearchParams`

Query string parameters to append to the called endpoint

#### Defined in

[packages/rest/src/@types/index.ts:71](https://github.com/discloud/discloud.app/blob/4f75b2e/packages/rest/src/@types/index.ts#L71)
