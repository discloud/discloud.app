[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / User

# Class: User

Defined in: [packages/discloud.app/src/structures/User.ts:7](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L7)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new User**(`discloudApp`, `data`): `User`

Defined in: [packages/discloud.app/src/structures/User.ts:54](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L54)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiUser`](../interfaces/ApiUser.md)

#### Returns

`User`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### appIDs

> `readonly` **appIDs**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:11](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L11)

Your applications ID

***

### avatar

> **avatar**: `string` \| `null`

Defined in: [packages/discloud.app/src/structures/User.ts:51](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L51)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<`User`\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### customdomains

> `readonly` **customdomains**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:15](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L15)

Your custom domains on Discloud

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

***

### id

> **id**: `string`

Defined in: [packages/discloud.app/src/structures/User.ts:19](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L19)

Your id

***

### locale

> **locale**: `string`

Defined in: [packages/discloud.app/src/structures/User.ts:23](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L23)

Your locale

***

### plan

> **plan**: `string`

Defined in: [packages/discloud.app/src/structures/User.ts:27](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L27)

Your plan

***

### planDataEnd

> **planDataEnd**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [packages/discloud.app/src/structures/User.ts:31](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L31)

Date of when will your plan end

***

### planDataEndTimestamp

> **planDataEndTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:35](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L35)

Timestamp of when will your plan end

***

### ramUsage

> **ramUsage**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:49](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L49)

***

### ramUsedMb

> **ramUsedMb**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:39](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L39)

Quantity of RAM was used for your applications

***

### subdomains

> `readonly` **subdomains**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:43](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L43)

Your subdomains on Discloud

***

### totalRamMb

> **totalRamMb**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:47](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L47)

Your total RAM quantity

***

### username

> **username**: `string` \| `null`

Defined in: [packages/discloud.app/src/structures/User.ts:52](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L52)

## Accessors

### apps

#### Get Signature

> **get** **apps**(): [`AppManager`](AppManager.md)

Defined in: [packages/discloud.app/src/structures/User.ts:120](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L120)

##### Returns

[`AppManager`](AppManager.md)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/User.ts:60](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L60)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ApiUser`](../interfaces/ApiUser.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`User`\>

Defined in: [packages/discloud.app/src/structures/User.ts:142](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L142)

Fetch a user from Discloud API

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`User`\>

***

### setLocale()

> **setLocale**\<`L`\>(`locale`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/discloud.app/src/structures/User.ts:130](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L130)

Set your locale on Discloud

#### Type Parameters

##### L

`L` *extends* [`LocaleString`](../type-aliases/LocaleString.md)

#### Parameters

##### locale

`L`

Your locale like "en-US".

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### See

[LocaleString](../type-aliases/LocaleString.md)

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/User.ts:148](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/discloud.app/src/structures/User.ts#L148)

Returns a string representation of an object.

#### Returns

`string`
