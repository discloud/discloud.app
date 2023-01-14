[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / RequestData

# Interface: RequestData

[@discloudapp/rest](../modules/discloudapp_rest.md).RequestData

Represents possible data to be given to an endpoint

## Hierarchy

- **`RequestData`**

  ↳ [`InternalRequest`](discloudapp_rest.InternalRequest.md)

## Table of contents

### Properties

- [body](discloudapp_rest.RequestData.md#body)
- [file](discloudapp_rest.RequestData.md#file)
- [headers](discloudapp_rest.RequestData.md#headers)
- [query](discloudapp_rest.RequestData.md#query)

## Properties

### body

• `Optional` **body**: `unknown`

The body to send to this request.

#### Defined in

[packages/rest/src/@types/index.ts:44](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L44)

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloudapp_util.RawFile.md)

File to be attached to this request

#### Defined in

[packages/rest/src/@types/index.ts:48](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L48)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

Additional headers to add to this request

#### Defined in

[packages/rest/src/@types/index.ts:52](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L52)

___

### query

• `Optional` **query**: `URLSearchParams`

Query string parameters to append to the called endpoint

#### Defined in

[packages/rest/src/@types/index.ts:56](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L56)
