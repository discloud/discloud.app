[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppAptManager

# Class: AppAptManager

Defined in: [packages/discloud.app/src/managers/AppAptManager.ts:9](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/managers/AppAptManager.ts#L9)

Manager for APT on your application on Discloud

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### Constructor

> **new AppAptManager**(`discloudApp`): `AppAptManager`

Defined in: [packages/discloud.app/src/managers/AppAptManager.ts:10](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/managers/AppAptManager.ts#L10)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`AppAptManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

## Methods

### install()

> **install**(`appID`, `apt`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppAptResult`](../interfaces/RESTPutApiAppAptResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppAptManager.ts:20](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/managers/AppAptManager.ts#L20)

Install APTs for your application on Discloud

#### Parameters

##### appID

`string`

The app id

##### apt

One or more APTs to install. See AptString.

`"ffmpeg"` | `"canvas"` | `"java"` | `"libgl"` | `"openssl"` | `"puppeteer"` | `"tools"` | (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"`)[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTPutApiAppAptResult`](../interfaces/RESTPutApiAppAptResult.md)\>

***

### uninstall()

> **uninstall**(`appID`, `apt`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTDeleteApiAppAptResult`](../interfaces/RESTDeleteApiAppAptResult.md)\>

Defined in: [packages/discloud.app/src/managers/AppAptManager.ts:40](https://github.com/discloud/discloud.app/blob/e06d08869d94db25520cbe5fdcc3cdbc242fb0cb/packages/discloud.app/src/managers/AppAptManager.ts#L40)

Uninstall APTs for your application on Discloud

#### Parameters

##### appID

`string`

The app id

##### apt

One or more APTs to uninstall. See AptString.

`"ffmpeg"` | `"canvas"` | `"java"` | `"libgl"` | `"openssl"` | `"puppeteer"` | `"tools"` | (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"`)[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RESTDeleteApiAppAptResult`](../interfaces/RESTDeleteApiAppAptResult.md)\>
