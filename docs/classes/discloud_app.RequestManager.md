[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RequestManager

# Class: RequestManager

[discloud.app](../modules/discloud_app.md).RequestManager

## Table of contents

### Constructors

- [constructor](discloud_app.RequestManager.md#constructor)

### Properties

- [#private](discloud_app.RequestManager.md##private)
- [globalRemaining](discloud_app.RequestManager.md#globalremaining)
- [globalReset](discloud_app.RequestManager.md#globalreset)
- [options](discloud_app.RequestManager.md#options)

### Accessors

- [globalLimited](discloud_app.RequestManager.md#globallimited)
- [globalTimeToReset](discloud_app.RequestManager.md#globaltimetoreset)

### Methods

- [request](discloud_app.RequestManager.md#request)
- [resolveRequest](discloud_app.RequestManager.md#resolverequest)
- [setToken](discloud_app.RequestManager.md#settoken)

## Constructors

### constructor

• **new RequestManager**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`RESTOptions`](../interfaces/discloud_app.RESTOptions.md)\> |

#### Defined in

packages/rest/dist/RequestManager.d.ts:22

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/rest/dist/RequestManager.d.ts:4

___

### globalRemaining

• **globalRemaining**: `number`

The number of requests remaining in the global bucket

#### Defined in

packages/rest/dist/RequestManager.d.ts:13

___

### globalReset

• **globalReset**: `number`

The timestamp at which the global bucket resets

#### Defined in

packages/rest/dist/RequestManager.d.ts:17

___

### options

• **options**: [`RESTOptions`](../interfaces/discloud_app.RESTOptions.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:5

## Accessors

### globalLimited

• `get` **globalLimited**(): `boolean`

If the rate limit bucket is currently limited by its limit

#### Returns

`boolean`

#### Defined in

packages/rest/dist/RequestManager.d.ts:9

___

### globalTimeToReset

• `get` **globalTimeToReset**(): `number`

The time until queued requests can continue

#### Returns

`number`

#### Defined in

packages/rest/dist/RequestManager.d.ts:21

## Methods

### request

▸ **request**(`url`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | { `dispatcher?`: `Dispatcher`  } & `Omit`<`RequestOptions`, ``"origin"`` \| ``"path"`` \| ``"method"``\> & `Partial`<`Pick`<`RequestOptions`, ``"method"``\>\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Defined in

packages/rest/dist/RequestManager.d.ts:35

___

### resolveRequest

▸ **resolveRequest**(`request`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`InternalRequest`](../interfaces/discloud_app.InternalRequest.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fetchOptions` | { `dispatcher?`: `Dispatcher`  } & `Omit`<`RequestOptions`, ``"origin"`` \| ``"path"`` \| ``"method"``\> & `Partial`<`Pick`<`RequestOptions`, ``"method"``\>\> |
| `url` | `string` |

#### Defined in

packages/rest/dist/RequestManager.d.ts:29

___

### setToken

▸ **setToken**(`token`): [`RequestManager`](discloud_app.RequestManager.md)

Sets the authorization token that should be used for requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authorization token to use |

#### Returns

[`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:28
