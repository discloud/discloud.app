[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / REST

# Class: REST

[discloud.app](../modules/discloud_app.md).REST

## Table of contents

### Constructors

- [constructor](discloud_app.REST.md#constructor)

### Properties

- [requestManager](discloud_app.REST.md#requestmanager)

### Methods

- [delete](discloud_app.REST.md#delete)
- [get](discloud_app.REST.md#get)
- [post](discloud_app.REST.md#post)
- [put](discloud_app.REST.md#put)
- [raw](discloud_app.REST.md#raw)
- [request](discloud_app.REST.md#request)
- [setToken](discloud_app.REST.md#settoken)

## Constructors

### constructor

• **new REST**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`RESTOptions`](../interfaces/discloud_app.RESTOptions.md)\> |

#### Defined in

packages/rest/dist/REST.d.ts:5

## Properties

### requestManager

• `Readonly` **requestManager**: [`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

packages/rest/dist/REST.d.ts:4

## Methods

### delete

▸ **delete**<`T`\>(`fullRoute`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Runs a delete request from the api

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullRoute` | \`/${string}\` | The full route to query |
| `options?` | [`RequestData`](../interfaces/discloud_app.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

packages/rest/dist/REST.d.ts:25

___

### get

▸ **get**<`T`\>(`fullRoute`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Runs a get request from the api

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullRoute` | \`/${string}\` | The full route to query |
| `options?` | [`RequestData`](../interfaces/discloud_app.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

packages/rest/dist/REST.d.ts:18

___

### post

▸ **post**<`T`\>(`fullRoute`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Runs a post request from the api

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullRoute` | \`/${string}\` | The full route to query |
| `options?` | [`RequestData`](../interfaces/discloud_app.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

packages/rest/dist/REST.d.ts:32

___

### put

▸ **put**<`T`\>(`fullRoute`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Runs a put request from the api

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullRoute` | \`/${string}\` | The full route to query |
| `options?` | [`RequestData`](../interfaces/discloud_app.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

packages/rest/dist/REST.d.ts:39

___

### raw

▸ **raw**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

Runs a request from the API, yielding the raw Response object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`InternalRequest`](../interfaces/discloud_app.InternalRequest.md) | Request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Defined in

packages/rest/dist/REST.d.ts:51

___

### request

▸ **request**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Runs a request from the api

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`InternalRequest`](../interfaces/discloud_app.InternalRequest.md) | Request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

packages/rest/dist/REST.d.ts:45

___

### setToken

▸ **setToken**(`token`): [`REST`](discloud_app.REST.md)

Sets the authorization token that should be used for requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authorization token to use |

#### Returns

[`REST`](discloud_app.REST.md)

#### Defined in

packages/rest/dist/REST.d.ts:11
