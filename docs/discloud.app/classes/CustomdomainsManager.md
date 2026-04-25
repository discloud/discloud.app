[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / CustomdomainsManager

# Class: CustomdomainsManager

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:12](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L12)

Manager for customdomains on Discloud

## Extends

- [`BaseCustomdomainsManager`](BaseCustomdomainsManager.md)\<*typeof* [`Customdomain`](Customdomain.md)\>

## Constructors

### Constructor

> **new CustomdomainsManager**(`discloudApp`): `CustomdomainsManager`

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:13](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L13)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`CustomdomainsManager`

#### Overrides

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`constructor`](BaseCustomdomainsManager.md#constructor)

## Properties

### \_cache

> `protected` `readonly` **\_cache**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Customdomain`](Customdomain.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:13](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L13)

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`_cache`](BaseCustomdomainsManager.md#_cache)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/managers/BaseManager.ts:7](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseManager.ts#L7)

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`discloudApp`](BaseCustomdomainsManager.md#discloudapp)

***

### holds

> `protected` `readonly` **holds**: *typeof* [`Customdomain`](Customdomain.md)

Defined in: [packages/discloud.app/src/managers/DataManager.ts:9](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L9)

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`holds`](BaseCustomdomainsManager.md#holds)

## Accessors

### cache

#### Get Signature

> **get** **cache**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:15](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L15)

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, [`InstanceType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype)\<`V`\>\>

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`cache`](BaseCustomdomainsManager.md#cache)

## Methods

### \_add()

> `protected` **\_add**(`data`): [`Customdomain`](Customdomain.md)

Defined in: [packages/discloud.app/src/managers/BaseCustomdomainsManager.ts:18](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseCustomdomainsManager.ts#L18)

#### Parameters

##### data

`PartialApiCustomdomain`

#### Returns

[`Customdomain`](Customdomain.md)

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`_add`](BaseCustomdomainsManager.md#_add)

***

### \_addMany()

> `protected` **\_addMany**(`data`): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Customdomain`](Customdomain.md)\>

Defined in: [packages/discloud.app/src/managers/BaseCustomdomainsManager.ts:29](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseCustomdomainsManager.ts#L29)

#### Parameters

##### data

`PartialApiCustomdomain`[]

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Customdomain`](Customdomain.md)\>

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`_addMany`](BaseCustomdomainsManager.md#_addmany)

***

### \_clear()

> `protected` **\_clear**(`data?`): `void`

Defined in: [packages/discloud.app/src/managers/BaseCustomdomainsManager.ts:40](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseCustomdomainsManager.ts#L40)

#### Parameters

##### data?

(`string` \| `PartialApiCustomdomain`)[]

#### Returns

`void`

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`_clear`](BaseCustomdomainsManager.md#_clear)

***

### \_delete()

> `protected` **\_delete**(`id`): `boolean`

Defined in: [packages/discloud.app/src/managers/BaseCustomdomainsManager.ts:55](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseCustomdomainsManager.ts#L55)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`_delete`](BaseCustomdomainsManager.md#_delete)

***

### \_deleteMany()

> `protected` **\_deleteMany**(`ids`): `void`

Defined in: [packages/discloud.app/src/managers/BaseCustomdomainsManager.ts:60](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseCustomdomainsManager.ts#L60)

#### Parameters

##### ids

`string`[]

#### Returns

`void`

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`_deleteMany`](BaseCustomdomainsManager.md#_deletemany)

***

### \_patch()

> `protected` **\_patch**(`id`, `data`): [`Customdomain`](Customdomain.md) \| `undefined`

Defined in: [packages/discloud.app/src/managers/BaseCustomdomainsManager.ts:65](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/BaseCustomdomainsManager.ts#L65)

#### Parameters

##### id

`string`

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiDomain`](../interfaces/ApiDomain.md)\>

#### Returns

[`Customdomain`](Customdomain.md) \| `undefined`

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`_patch`](BaseCustomdomainsManager.md#_patch)

***

### create()

> **create**(`appId`, `domain`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Customdomain`](Customdomain.md)\>

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:25](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L25)

#### Parameters

##### appId

`string`

##### domain

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Customdomain`](Customdomain.md)\>

#### Throws

`400`

#### Throws

`403`

#### Throws

`404` not found

#### Throws

`409` duplicate

***

### delete()

> **delete**(`domain`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:43](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L43)

#### Parameters

##### domain

`string`

You domain id.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Throws

`400`

#### Throws

`403`

#### Throws

`404` not found

***

### edit()

> **edit**(`domain`, `appId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:55](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L55)

#### Parameters

##### domain

`string`

You domain id.

##### appId

`string`

You app id.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Throws

`400`

#### Throws

`403`

#### Throws

`404` not found

***

### fetch()

#### Call Signature

> **fetch**(`id`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Customdomain`](Customdomain.md)\>

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:88](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L88)

Get information of your customdomain on Discloud.

##### Parameters

###### id

`string`

You customdomain id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Customdomain`](Customdomain.md)\>

#### Call Signature

> **fetch**(`id?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Customdomain`](Customdomain.md)\>\>

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:89](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L89)

Get information of your customdomain on Discloud.

##### Parameters

###### id?

`"all"`

You customdomain id.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Customdomain`](Customdomain.md)\>\>

***

### resolve()

> **resolve**(`keyOrInstance`): [`Customdomain`](Customdomain.md) \| `null`

Defined in: [packages/discloud.app/src/managers/DataManager.ts:23](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L23)

Resolves a data entry to a data Object.

#### Parameters

##### keyOrInstance

`string` \| [`Customdomain`](Customdomain.md)

The id or instance of something in this Manager

#### Returns

[`Customdomain`](Customdomain.md) \| `null`

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`resolve`](BaseCustomdomainsManager.md#resolve)

***

### valueOf()

> **valueOf**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Customdomain`](Customdomain.md)\>

Defined in: [packages/discloud.app/src/managers/DataManager.ts:31](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/DataManager.ts#L31)

Returns the primitive value of the specified object.

#### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Customdomain`](Customdomain.md)\>

#### Inherited from

[`BaseCustomdomainsManager`](BaseCustomdomainsManager.md).[`valueOf`](BaseCustomdomainsManager.md#valueof)

***

### verify()

> **verify**(`domain`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Customdomain`](Customdomain.md)\>

Defined in: [packages/discloud.app/src/managers/CustomdomainsManager.ts:77](https://github.com/discloud/discloud.app/blob/c4016c90540db229b9170cffe6882c41b0b114cb/packages/discloud.app/src/managers/CustomdomainsManager.ts#L77)

#### Parameters

##### domain

`string`

You domain id.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Customdomain`](Customdomain.md)\>

#### Throws

`400`

#### Throws

`403`

#### Throws

`404` not found

#### Throws

`500` external error
