[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / AppAptManager

# Class: AppAptManager

[discloud.app](../modules/discloud_app.md).AppAptManager

Manager for APT on your application on Discloud

## Hierarchy

- [`BaseManager`](discloud_app.BaseManager.md)

  ↳ **`AppAptManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.AppAptManager.md#constructor)

### Properties

- [discloudApp](discloud_app.AppAptManager.md#discloudapp)

### Methods

- [install](discloud_app.AppAptManager.md#install)
- [uninstall](discloud_app.AppAptManager.md#uninstall)

## Constructors

### constructor

• **new AppAptManager**(`discloudApp`): [`AppAptManager`](discloud_app.AppAptManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |

#### Returns

[`AppAptManager`](discloud_app.AppAptManager.md)

#### Overrides

[BaseManager](discloud_app.BaseManager.md).[constructor](discloud_app.BaseManager.md#constructor)

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:10](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/managers/AppAptManager.ts#L10)

## Properties

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[BaseManager](discloud_app.BaseManager.md).[discloudApp](discloud_app.BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

### install

▸ **install**(`appID`, `apt`): `Promise`\<[`RESTPutApiAppAptResult`](../interfaces/discloud_app.RESTPutApiAppAptResult.md)\>

Install APTs for your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `apt` | ``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"`` \| (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[] | One or more APTs to install. See AptString. |

#### Returns

`Promise`\<[`RESTPutApiAppAptResult`](../interfaces/discloud_app.RESTPutApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:20](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/managers/AppAptManager.ts#L20)

___

### uninstall

▸ **uninstall**(`appID`, `apt`): `Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)\>

Uninstall APTs for your application on Discloud

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id |
| `apt` | ``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"`` \| (``"ffmpeg"`` \| ``"canvas"`` \| ``"java"`` \| ``"libgl"`` \| ``"openssl"`` \| ``"puppeteer"`` \| ``"tools"``)[] | One or more APTs to uninstall. See AptString. |

#### Returns

`Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/discloud_app.RESTDeleteApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:40](https://github.com/discloud/discloud.app/blob/824e86a/packages/discloud.app/src/managers/AppAptManager.ts#L40)
