[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / CachedManager

# Abstract Class: CachedManager\<K, T\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:8](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L8)

Manager of cache

## Extends

- [`DataManager`](DataManager.md)\<`K`, `T`\>

## Extended by

- [`BaseAppsManager`](BaseAppsManager.md)
- [`BaseAppsStatusManager`](BaseAppsStatusManager.md)
- [`BaseCustomdomainsManager`](BaseCustomdomainsManager.md)
- [`BaseSharedAppsManager`](BaseSharedAppsManager.md)
- [`BaseSharedAppsStatusManager`](BaseSharedAppsStatusManager.md)
- [`BaseSubdomainsManager`](BaseSubdomainsManager.md)

## Type Parameters

### K

`K`

### T

`T` *extends* [`Instanciable`](../type-aliases/Instanciable.md)\<`T`\>

## Constructors

### Constructor

> **new CachedManager**\<`K`, `T`\>(`discloudApp`, `holds`, `iterable?`): `CachedManager`\<`K`, `T`\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L9)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### holds

`T`

##### iterable?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>, `any`, `any`\>

#### Returns

`CachedManager`\<`K`, `T`\>

#### Overrides

[`DataManager`](DataManager.md).[`constructor`](DataManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:13](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L13)

#### Inherited from

[`DataManager`](DataManager.md).[`_cache`](DataManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`DataManager`](DataManager.md).[`discloudApp`](DataManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: `T`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`DataManager`](DataManager.md).[`holds`](DataManager.md#holds)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:15](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L15)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`cache`](DataManager.md#cache)

## Methods

### \_add()

> `abstract` `protected` **\_add**(`value`): [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L19)

#### Parameters

##### value

`unknown`

#### Returns

[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

***

### \_addMany()

> `abstract` `protected` **\_addMany**(`values`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:21](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L21)

#### Parameters

##### values

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`unknown`\>

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

***

### \_clear()

> `abstract` `protected` **\_clear**(`values?`): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:23](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L23)

#### Parameters

##### values?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`unknown`, `any`, `any`\>

#### Returns

`void`

***

### \_delete()

> `abstract` `protected` **\_delete**(`key`): `boolean`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:25](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L25)

#### Parameters

##### key

`unknown`

#### Returns

`boolean`

***

### \_deleteMany()

> `abstract` `protected` **\_deleteMany**(`keys`): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:27](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L27)

#### Parameters

##### keys

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`unknown`\>

#### Returns

`void`

***

### \_patch()

> `abstract` `protected` **\_patch**(`key`, `value`): [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `undefined`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:29](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CachedManager.ts#L29)

#### Parameters

##### key

`unknown`

##### value

`unknown`

#### Returns

[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `undefined`

***

### resolve()

> **resolve**(`keyOrInstance`): [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `null`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:23](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L23)

Resolves a data entry to a data Object.

#### Parameters

##### keyOrInstance

`K` \| [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

The id or instance of something in this Manager

#### Returns

[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\> \| `null`

#### Inherited from

[`DataManager`](DataManager.md).[`resolve`](DataManager.md#resolve)

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:31](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L31)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`valueOf`](DataManager.md#valueof)
