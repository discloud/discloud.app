[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DataManager

# Class: `abstract` DataManager\<T\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:8](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L8)

Manager for data

## Extends

- [`BaseManager`](BaseManager.md)

## Extended by

- [`CachedManager`](CachedManager.md)

## Type Parameters

### T

`T` *extends* [`Constructable`](../type-aliases/Constructable.md)\<`T`\>

## Constructors

### Constructor

> **new DataManager**\<`T`\>(`discloudApp`, `holds`): `DataManager`\<`T`\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:12](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L12)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### holds

`T`

#### Returns

`DataManager`\<`T`\>

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L9)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseManager`](BaseManager.md).[`discloudApp`](BaseManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: `T`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:10](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L10)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:25](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L25)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

## Methods

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

***

### resolveId()

> **resolveId**(`idOrInstance`): `any`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:39](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L39)

#### Parameters

##### idOrInstance

`string` | [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>

#### Returns

`any`

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:46](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/discloud.app/src/managers/DataManager.ts#L46)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`T`\>\>
