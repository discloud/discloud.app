[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppApt

# Class: AppApt

[discloud.app](../modules/discloud_app.md).AppApt

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`AppApt`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppApt.md#constructor)

### Properties

- [appId](discloud_app.AppApt.md#appid)
- [constructor](discloud_app.AppApt.md#constructor-1)
- [discloudApp](discloud_app.AppApt.md#discloudapp)

### Methods

- [\_clone](discloud_app.AppApt.md#_clone)
- [\_patch](discloud_app.AppApt.md#_patch)
- [\_update](discloud_app.AppApt.md#_update)
- [install](discloud_app.AppApt.md#install)
- [uninstall](discloud_app.AppApt.md#uninstall)

## Constructors

### constructor

• **new AppApt**(`discloudApp`, `data`): [`AppApt`](discloud_app.AppApt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

[`AppApt`](discloud_app.AppApt.md)

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:8](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppApt.ts#L8)

## Properties

### appId

• `Readonly` **appId**: `string`

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:6](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppApt.ts#L6)

___

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)\<[`AppApt`](discloud_app.AppApt.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L5)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L12)

## Methods

### \_clone

▸ **_clone**(): `this`

#### Returns

`this`

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_patch

▸ **_patch**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BaseApiApp`](../interfaces/discloud_app.BaseApiApp.md) |

#### Returns

`this`

#### Overrides

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:14](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppApt.ts#L14)

___

### \_update

▸ **_update**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`this`

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/Base.ts#L26)

___

### install

▸ **install**(`apt`): `Promise`\<[`RESTPutApiAppAptResult`](../interfaces/discloud_app.RESTPutApiAppAptResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `apt` | ``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"`` \| (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[] |

#### Returns

`Promise`\<[`RESTPutApiAppAptResult`](../interfaces/discloud_app.RESTPutApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:18](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppApt.ts#L18)

___

### uninstall

▸ **uninstall**(`apt`): `Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `apt` | ``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"`` \| (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[] |

#### Returns

`Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:22](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/structures/AppApt.ts#L22)
