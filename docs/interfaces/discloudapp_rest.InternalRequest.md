[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / InternalRequest

# Interface: InternalRequest

[@discloudapp/rest](../modules/discloudapp_rest.md).InternalRequest

Internal request options

## Hierarchy

- [`RequestData`](discloudapp_rest.RequestData.md)

  ↳ **`InternalRequest`**

## Table of contents

### Properties

- [body](discloudapp_rest.InternalRequest.md#body)
- [dispatcher](discloudapp_rest.InternalRequest.md#dispatcher)
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

[packages/rest/src/@types/index.ts:55](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/rest/src/@types/index.ts#L55)

___

### dispatcher

• `Optional` **dispatcher**: `Dispatcher`

The [Agent](https://undici.nodejs.org/#/docs/api/Agent) to use for the request.

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[dispatcher](discloudapp_rest.RequestData.md#dispatcher)

#### Defined in

[packages/rest/src/@types/index.ts:59](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/rest/src/@types/index.ts#L59)

___

### file

• `Optional` **file**: `File` \| [`RawFile`](discloud_app.RawFile.md)

File to be attached to this request

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[file](discloudapp_rest.RequestData.md#file)

#### Defined in

[packages/rest/src/@types/index.ts:63](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/rest/src/@types/index.ts#L63)

___

### fullRoute

• **fullRoute**: \`/$\{string}\`

#### Defined in

[packages/rest/src/@types/index.ts:80](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/rest/src/@types/index.ts#L80)

___

### headers

• `Optional` **headers**: `Record`\<`string`, `string`\>

Additional headers to add to this request

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[headers](discloudapp_rest.RequestData.md#headers)

#### Defined in

[packages/rest/src/@types/index.ts:67](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/rest/src/@types/index.ts#L67)

___

### method

• **method**: [`RequestMethod`](../enums/discloudapp_rest.RequestMethod.md)

#### Defined in

[packages/rest/src/@types/index.ts:81](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/rest/src/@types/index.ts#L81)

___

### query

• `Optional` **query**: `URLSearchParams`

Query string parameters to append to the called endpoint

#### Inherited from

[RequestData](discloudapp_rest.RequestData.md).[query](discloudapp_rest.RequestData.md#query)

#### Defined in

[packages/rest/src/@types/index.ts:71](https://github.com/discloud/discloud.app/blob/ee3bbd2/packages/rest/src/@types/index.ts#L71)
