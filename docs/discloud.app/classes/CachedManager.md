[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / CachedManager

# Class: `abstract` CachedManager\<T\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:8](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/CachedManager.ts#L8)

Manager of cache

## Extends

- [`DataManager`](DataManager.md)\<`T`\>

## Extended by

- [`AppManager`](AppManager.md)
- [`TeamAppManager`](TeamAppManager.md)

## Type Parameters

### T

`T` *extends* [`Constructable`](../type-aliases/Constructable.md)\<`T`\>

## Constructors

### Constructor

> **new CachedManager**\<`T`\>(`discloudApp`, `holds`, `iterable?`): `CachedManager`\<`T`\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:9](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/CachedManager.ts#L9)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### holds

`T`

##### iterable?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>, `any`, `any`\>

#### Returns

`CachedManager`\<`T`\>

#### Overrides

[`DataManager`](DataManager.md).[`constructor`](DataManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`DataManager`](DataManager.md).[`_cache`](DataManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`DataManager`](DataManager.md).[`discloudApp`](DataManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: `T`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L10)

#### Inherited from

[`DataManager`](DataManager.md).[`holds`](DataManager.md#holds)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`cache`](DataManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:19](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/CachedManager.ts#L19)

#### Parameters

##### data

`any`

#### Returns

[`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:33](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/CachedManager.ts#L33)

#### Parameters

##### data

`any`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:45](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/CachedManager.ts#L45)

#### Parameters

##### data?

(`string` \| \{ `id`: `string`; \})[]

#### Returns

`void`

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:58](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/CachedManager.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `boolean`

Defined in: [packages/discloud.app/src/managers/CachedManager.ts:64](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/CachedManager.ts#L64)

#### Parameters

##### ids

`string`[]

#### Returns

`boolean`

***

### resolve()

> **resolve**(`idOrInstance`): `null` \| [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:33](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L33)

Resolves a data entry to a data Object.

#### Parameters

##### idOrInstance

The id or instance of something in this Manager

`string` | [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

#### Returns

`null` \| [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

#### Inherited from

[`DataManager`](DataManager.md).[`resolve`](DataManager.md#resolve)

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L39)

#### Parameters

##### idOrInstance

`string` | [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

#### Returns

`any`

#### Inherited from

[`DataManager`](DataManager.md).[`resolveId`](DataManager.md#resolveid)

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

#### Inherited from

[`DataManager`](DataManager.md).[`valueOf`](DataManager.md#valueof)
