[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / InternalRequest

# Interface: InternalRequest

[@discloudapp/rest](../modules/discloudapp_rest.md).InternalRequest

Internal request options

## Hierarchy

- [`RequestData`](discloudapp_rest.RequestData.md)

  ↳ **`InternalRequest`**

## Table of contents

### Properties

- [body](discloudapp_rest.InternalRequest.md#body)
- [file](discloudapp_rest.InternalRequest.md#file)
- [fullRoute](discloudapp_rest.InternalRequest.md#fullroute)
- [headers](discloudapp_rest.InternalRequest.md#headers)
- [method](discloudapp_rest.InternalRequest.md#method)
- [query](discloudapp_rest.InternalRequest.md#query)

## Properties

### body

• `Optional` **body**: `unknown`

The body to send to this request.

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[body](discloudapp_rest.RequestData.md#body)

#### Defined in

[packages/rest/src/@types/index.ts:44](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L44)

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloudapp_util.RawFile.md)

File to be attached to this request

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[file](discloudapp_rest.RequestData.md#file)

#### Defined in

[packages/rest/src/@types/index.ts:48](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L48)

___

### fullRoute

• **fullRoute**: \`/${string}\`

#### Defined in

[packages/rest/src/@types/index.ts:65](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L65)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

Additional headers to add to this request

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[headers](discloudapp_rest.RequestData.md#headers)

#### Defined in

[packages/rest/src/@types/index.ts:52](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L52)

___

### method

• **method**: [`RequestMethod`](../enums/discloudapp_rest.RequestMethod.md)

#### Defined in

[packages/rest/src/@types/index.ts:66](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L66)

___

### query

• `Optional` **query**: `URLSearchParams`

Query string parameters to append to the called endpoint

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[query](discloudapp_rest.RequestData.md#query)

#### Defined in

[packages/rest/src/@types/index.ts:56](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/@types/index.ts#L56)
