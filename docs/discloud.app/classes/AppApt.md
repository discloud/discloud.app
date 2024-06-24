[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / AppApt

# Class: AppApt

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new AppApt()

> **new AppApt**(`discloudApp`, `data`): [`AppApt`](AppApt.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

[`AppApt`](AppApt.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:8](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppApt.ts#L8)

## Properties

### appId

> `readonly` **appId**: `string`

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:6](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppApt.ts#L6)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`AppApt`](AppApt.md)\>

#### Inherited from

`Base.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L18)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

#### Parameters

• **data**: [`BaseApiApp`](../interfaces/BaseApiApp.md)

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:14](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppApt.ts#L14)

***

### \_update()

> `protected` **\_update**(`data`): `this`

#### Parameters

• **data**: `unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L26)

***

### install()

> **install**(`apt`): `Promise`\<[`RESTPutApiAppAptResult`](../interfaces/RESTPutApiAppAptResult.md)\>

#### Parameters

• **apt**: `"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"`)[]

#### Returns

`Promise`\<[`RESTPutApiAppAptResult`](../interfaces/RESTPutApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppApt.ts#L18)

***

### uninstall()

> **uninstall**(`apt`): `Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/RESTDeleteApiAppAptResult.md)\>

#### Parameters

• **apt**: `"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"` \| (`"ffmpeg"` \| `"canvas"` \| `"java"` \| `"libgl"` \| `"mysql"` \| `"openssl"` \| `"puppeteer"` \| `"tesseract"` \| `"tools"`)[]

#### Returns

`Promise`\<[`RESTDeleteApiAppAptResult`](../interfaces/RESTDeleteApiAppAptResult.md)\>

#### Defined in

[packages/discloud.app/src/structures/AppApt.ts:22](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/AppApt.ts#L22)
