[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BaseAppsModeratorsManager

# Abstract Class: BaseAppsModeratorsManager

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:11](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L11)

Apps cache manager

## Extends

- [`BaseManager`](BaseManager.md)

## Extended by

- [`AppsModeratorsManager`](AppsModeratorsManager.md)

## Constructors

### Constructor

> **new BaseAppsModeratorsManager**(`discloudApp`): `BaseAppsModeratorsManager`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L12)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`BaseAppsModeratorsManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:16](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L16)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:17](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L17)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>\>

## Methods

### \_add()

> `protected` **\_add**(`appId`, `data`): [`AppModerator`](AppModerator.md)

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:19](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L19)

#### Parameters

##### appId

`string`

##### data

`PartialApiAppModerator`

#### Returns

[`AppModerator`](AppModerator.md)

***

### \_addMany()

> `protected` **\_addMany**(`appId`, `data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:35](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L35)

#### Parameters

##### appId

`string`

##### data

`PartialApiAppModerator`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`AppModerator`](AppModerator.md)\>

***

### \_clear()

> `protected` **\_clear**(`appId`, `data?`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:46](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L46)

#### Parameters

##### appId

`string`

##### data?

(`string` \| `PartialApiAppModerator`)[]

#### Returns

`void`

***

### \_delete()

> `protected` **\_delete**(`appId`, `modId`): `boolean`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:62](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L62)

#### Parameters

##### appId

`string`

##### modId

`string`

#### Returns

`boolean`

***

### \_deleteMany()

> `protected` **\_deleteMany**(`appId`, `modIds`): `void`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:72](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L72)

#### Parameters

##### appId

`string`

##### modIds

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

#### Returns

`void`

***

### \_patch()

> `protected` **\_patch**(`appId`, `modId`, `data`): [`AppModerator`](AppModerator.md) \| `undefined`

Defined in: [packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts:80](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/managers/BaseAppsModeratorsManager.ts#L80)

#### Parameters

##### appId

`string`

##### modId

`string`

##### data

`PartialApiAppModerator`

#### Returns

[`AppModerator`](AppModerator.md) \| `undefined`
