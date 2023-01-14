[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppAptManager

# Class: AppAptManager<T\>

[discloud.app](../modules/discloud_app.md).AppAptManager

Manager for APT on your application on Discloud

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseApp`](discloud_app.BaseApp.md) |

## Hierarchy

- [`BaseManager`](discloud_app.BaseManager.md)

  ↳ **`AppAptManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppAptManager.md#constructor)

### Properties

- [app](discloud_app.AppAptManager.md#app)
- [discloudApp](discloud_app.AppAptManager.md#discloudapp)

### Methods

- [install](discloud_app.AppAptManager.md#install)
- [uninstall](discloud_app.AppAptManager.md#uninstall)

## Constructors

### constructor

• **new AppAptManager**<`T`\>(`discloudApp`, `app`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseApp`](discloud_app.BaseApp.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `app` | `T` |

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/AppAptManager.ts#L10)

## Properties

### app

• `Readonly` **app**: `T`

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/AppAptManager.ts#L10)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

### install

▸ **install**(`apt`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppAptResult`](../interfaces/discloud_app.RESTPutApiAppAptResult.md)\>

Install APTs for your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apt` | ``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"`` \| (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[] | One or more APTs to install. See AptString. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTPutApiAppAptResult`](../interfaces/discloud_app.RESTPutApiAppAptResult.md)\>

Promise [RESTPutApiAppAptResult](../interfaces/discloud_app.RESTPutApiAppAptResult.md)

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:20](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/AppAptManager.ts#L20)

___

### uninstall

▸ **uninstall**(`apt`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTDeleteApiAppAptResult`](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)\>

Uninstall APTs for your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apt` | ``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"`` \| (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[] | One or more APTs to uninstall. See AptString. |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RESTDeleteApiAppAptResult`](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)\>

Promise [RESTDeleteApiAppAptResult](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:39](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/managers/AppAptManager.ts#L39)
