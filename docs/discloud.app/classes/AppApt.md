[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppApt

# Class: AppApt

Defined in: [packages/discloud.app/src/structures/AppApt.ts:5](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppApt.ts#L5)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new AppApt**(`discloudApp`, `appId`): `AppApt`

Defined in: [packages/discloud.app/src/structures/AppApt.ts:6](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppApt.ts#L6)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### appId

`string`

#### Returns

`AppApt`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### appId

> `readonly` **appId**: `string`

Defined in: [packages/discloud.app/src/structures/AppApt.ts:6](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppApt.ts#L6)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`_`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:22](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L22)

#### Parameters

##### \_

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### install()

> **install**(`apt`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/AppApt.ts:10](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppApt.ts#L10)

#### Parameters

##### apt

`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"`)[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### uninstall()

> **uninstall**(`apt`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/structures/AppApt.ts:14](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/structures/AppApt.ts#L14)

#### Parameters

##### apt

`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"openssl"` \| `"puppeteer"` \| `"tools"`)[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
