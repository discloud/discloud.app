[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppAptManager

# Class: AppAptManager

Defined in: [packages/discloud.app/src/managers/AppsAptsManager.ts:9](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsAptsManager.ts#L9)

Manager for APT on your application on Discloud

## Extends

- [`BaseManager`](BaseManager.md)

## Constructors

### Constructor

> **new AppAptManager**(`discloudApp`): `AppsAptsManager`

Defined in: [packages/discloud.app/src/managers/AppsAptsManager.ts:10](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsAptsManager.ts#L10)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`AppsAptsManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

## Methods

### install()

> **install**(`appID`, `apt`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsAptsManager.ts:20](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsAptsManager.ts#L20)

Install APTs for your application on Discloud

#### Parameters

##### appID

`string`

The app id

##### apt

`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"`)[]

One or more APTs to install. See AptString.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### uninstall()

> **uninstall**(`appID`, `apt`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/AppsAptsManager.ts:34](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/AppsAptsManager.ts#L34)

Uninstall APTs for your application on Discloud

#### Parameters

##### appID

`string`

The app id

##### apt

`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"`)[]

One or more APTs to uninstall. See AptString.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
