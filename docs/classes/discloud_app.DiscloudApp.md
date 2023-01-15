[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / DiscloudApp

# Class: DiscloudApp

[discloud.app](../modules/discloud_app.md).DiscloudApp

Client for Discloud API

## Table of contents

### Constructors

- [constructor](discloud_app.DiscloudApp.md#constructor)

### Properties

- [#token](discloud_app.DiscloudApp.md##token)
- [apps](discloud_app.DiscloudApp.md#apps)
- [options](discloud_app.DiscloudApp.md#options)
- [rest](discloud_app.DiscloudApp.md#rest)
- [team](discloud_app.DiscloudApp.md#team)
- [user](discloud_app.DiscloudApp.md#user)

### Accessors

- [token](discloud_app.DiscloudApp.md#token)

### Methods

- [#setToken](discloud_app.DiscloudApp.md##settoken)
- [login](discloud_app.DiscloudApp.md#login)

## Constructors

### constructor

• **new DiscloudApp**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DiscloudAppOptions`](../interfaces/discloud_app.DiscloudAppOptions.md) |

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:21](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L21)

## Properties

### #token

• `Private` `Optional` **#token**: `string`

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:14](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L14)

___

### apps

• `Readonly` **apps**: [`AppManager`](discloud_app.AppManager.md)

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:16](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L16)

___

### options

• **options**: `Omit`<[`DiscloudAppOptions`](../interfaces/discloud_app.DiscloudAppOptions.md), ``"token"``\>

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:15](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L15)

___

### rest

• `Readonly` **rest**: [`REST`](discloud_app.REST.md)

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:19](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L19)

___

### team

• `Readonly` **team**: [`TeamManager`](discloud_app.TeamManager.md)

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:17](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L17)

___

### user

• `Readonly` **user**: [`User`](discloud_app.User.md)

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:18](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L18)

## Accessors

### token

• `get` **token**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:38](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L38)

## Methods

### #setToken

▸ `Private` **#setToken**(`token`): [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:32](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L32)

___

### login

▸ **login**(`token?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Login on Discloud API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `undefined` \| `string` | Your Discloud token |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/discloud.app/src/discloudApp/DiscloudApp.ts:47](https://github.com/discloud/discloud.app/blob/86003e6/packages/discloud.app/src/discloudApp/DiscloudApp.ts#L47)
