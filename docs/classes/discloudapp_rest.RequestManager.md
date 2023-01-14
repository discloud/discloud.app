[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / RequestManager

# Class: RequestManager

[@discloudapp/rest](../modules/discloudapp_rest.md).RequestManager

## Table of contents

### Constructors

- [constructor](discloudapp_rest.RequestManager.md#constructor)

### Properties

- [#token](discloudapp_rest.RequestManager.md##token)
- [globalRemaining](discloudapp_rest.RequestManager.md#globalremaining)
- [globalReset](discloudapp_rest.RequestManager.md#globalreset)
- [options](discloudapp_rest.RequestManager.md#options)

### Accessors

- [globalLimited](discloudapp_rest.RequestManager.md#globallimited)
- [globalTimeToReset](discloudapp_rest.RequestManager.md#globaltimetoreset)

### Methods

- [request](discloudapp_rest.RequestManager.md#request)
- [resolveRequest](discloudapp_rest.RequestManager.md#resolverequest)
- [setToken](discloudapp_rest.RequestManager.md#settoken)

## Constructors

### constructor

• **new RequestManager**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`RESTOptions`](../interfaces/discloudapp_rest.RESTOptions.md)\> |

#### Defined in

[packages/rest/src/RequestManager.ts:34](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L34)

## Properties

### #token

• `Private` **#token**: `string`

#### Defined in

[packages/rest/src/RequestManager.ts:7](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L7)

___

### globalRemaining

• **globalRemaining**: `number`

The number of requests remaining in the global bucket

#### Defined in

[packages/rest/src/RequestManager.ts:20](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L20)

___

### globalReset

• **globalReset**: `number` = `0`

The timestamp at which the global bucket resets

#### Defined in

[packages/rest/src/RequestManager.ts:25](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L25)

___

### options

• **options**: [`RESTOptions`](../interfaces/discloudapp_rest.RESTOptions.md)

#### Defined in

[packages/rest/src/RequestManager.ts:8](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L8)

## Accessors

### globalLimited

• `get` **globalLimited**(): `boolean`

If the rate limit bucket is currently limited by its limit

#### Returns

`boolean`

#### Defined in

[packages/rest/src/RequestManager.ts:13](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L13)

___

### globalTimeToReset

• `get` **globalTimeToReset**(): `number`

The time until queued requests can continue

#### Returns

`number`

#### Defined in

[packages/rest/src/RequestManager.ts:30](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L30)

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

[packages/rest/src/RequestManager.ts:99](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L99)

___

### resolveRequest

▸ **resolveRequest**(`request`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`InternalRequest`](../interfaces/discloudapp_rest.InternalRequest.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fetchOptions` | { `dispatcher?`: `Dispatcher`  } & `Omit`<`RequestOptions`, ``"origin"`` \| ``"path"`` \| ``"method"``\> & `Partial`<`Pick`<`RequestOptions`, ``"method"``\>\> |
| `url` | `string` |

#### Defined in

[packages/rest/src/RequestManager.ts:49](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L49)

___

### setToken

▸ **setToken**(`token`): [`RequestManager`](discloudapp_rest.RequestManager.md)

Sets the authorization token that should be used for requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authorization token to use |

#### Returns

[`RequestManager`](discloudapp_rest.RequestManager.md)

#### Defined in

[packages/rest/src/RequestManager.ts:44](https://github.com/discloud/discloud.app/blob/482fdb3/packages/rest/src/RequestManager.ts#L44)
