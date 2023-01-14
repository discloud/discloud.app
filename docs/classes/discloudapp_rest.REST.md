[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / REST

# Class: REST

[@discloudapp/rest](../modules/discloudapp_rest.md).REST

## Table of contents

### Constructors

- [constructor](discloudapp_rest.REST.md#constructor)

### Properties

- [requestManager](discloudapp_rest.REST.md#requestmanager)

### Methods

- [delete](discloudapp_rest.REST.md#delete)
- [get](discloudapp_rest.REST.md#get)
- [post](discloudapp_rest.REST.md#post)
- [put](discloudapp_rest.REST.md#put)
- [raw](discloudapp_rest.REST.md#raw)
- [request](discloudapp_rest.REST.md#request)
- [setToken](discloudapp_rest.REST.md#settoken)

## Constructors

### constructor

• **new REST**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`RESTOptions`](../interfaces/discloudapp_rest.RESTOptions.md)\> |

#### Defined in

[packages/rest/src/REST.ts:8](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L8)

## Properties

### requestManager

• `Readonly` **requestManager**: [`RequestManager`](discloudapp_rest.RequestManager.md)

#### Defined in

[packages/rest/src/REST.ts:6](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L6)

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
| `options` | [`RequestData`](../interfaces/discloudapp_rest.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

[packages/rest/src/REST.ts:38](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L38)

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
| `options` | [`RequestData`](../interfaces/discloudapp_rest.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

[packages/rest/src/REST.ts:28](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L28)

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
| `options` | [`RequestData`](../interfaces/discloudapp_rest.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

[packages/rest/src/REST.ts:48](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L48)

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
| `options` | [`RequestData`](../interfaces/discloudapp_rest.RequestData.md) | Optional request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

#### Defined in

[packages/rest/src/REST.ts:58](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L58)

___

### raw

▸ **raw**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

Runs a request from the API, yielding the raw Response object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`InternalRequest`](../interfaces/discloudapp_rest.InternalRequest.md) | Request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Defined in

[packages/rest/src/REST.ts:81](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L81)

___

### request

▸ **request**(`options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Runs a request from the api

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`InternalRequest`](../interfaces/discloudapp_rest.InternalRequest.md) | Request options |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/rest/src/REST.ts:67](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L67)

___

### setToken

▸ **setToken**(`token`): [`REST`](discloudapp_rest.REST.md)

Sets the authorization token that should be used for requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authorization token to use |

#### Returns

[`REST`](discloudapp_rest.REST.md)

#### Defined in

[packages/rest/src/REST.ts:17](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/REST.ts#L17)
