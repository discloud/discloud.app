[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppAptManager

# Class: AppAptManager

Manager for APT on your application on Discloud

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### new AppAptManager()

> **new AppAptManager**(`discloudApp`): [`AppAptManager`](AppAptManager.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Returns

[`AppAptManager`](AppAptManager.md)

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructors)

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppAptManager.ts#L10)

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

#### Defined in

[packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/BaseManager.ts#L7)

## Methods

### install()

> **install**(`appID`, `apt`): `Promise`\<[`RESTPutApiAppAptResult`](../interfaces/RESTPutApiAppAptResult.md)\>

Install APTs for your application on Discloud

#### Parameters

• **appID**: `string`

The app id

• **apt**: `"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"`)[]

One or more APTs to install. See AptString.

#### Returns

`Promise`\<[`RESTPutApiAppAptResult`](../interfaces/RESTPutApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:20](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppAptManager.ts#L20)

***

### uninstall()

> **uninstall**(`appID`, `apt`): `Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/RESTDeleteApiAppAptResult.md)\>

Uninstall APTs for your application on Discloud

#### Parameters

• **appID**: `string`

The app id

• **apt**: `"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"`)[]

One or more APTs to uninstall. See AptString.

#### Returns

`Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/RESTDeleteApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/managers/AppAptManager.ts:40](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/managers/AppAptManager.ts#L40)
