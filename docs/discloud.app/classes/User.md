[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / User

# Class: User

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new User()

> **new User**(`discloudApp`, `data`): [`User`](User.md)

#### Parameters

• **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

• **data**: [`ApiUser`](../interfaces/ApiUser.md)

#### Returns

[`User`](User.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Defined in

[packages/discloud.app/src/structures/User.ts:51](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L51)

## Properties

### appIDs

> `readonly` **appIDs**: `Set`\<`string`\>

Your applications ID

#### Defined in

[packages/discloud.app/src/structures/User.ts:11](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L11)

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`User`](User.md)\>

#### Inherited from

`Base.constructor`

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L5)

***

### customdomains

> `readonly` **customdomains**: `Set`\<`string`\>

Your custom domains on Discloud

#### Defined in

[packages/discloud.app/src/structures/User.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L15)

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/Base.ts#L12)

***

### id

> **id**: `string`

Your id

#### Defined in

[packages/discloud.app/src/structures/User.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L19)

***

### locale

> **locale**: `string`

Your locale

#### Defined in

[packages/discloud.app/src/structures/User.ts:23](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L23)

***

### plan

> **plan**: `string`

Your plan

#### Defined in

[packages/discloud.app/src/structures/User.ts:27](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L27)

***

### planDataEnd

> **planDataEnd**: `Date`

Date of when will your plan end

#### Defined in

[packages/discloud.app/src/structures/User.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L31)

***

### planDataEndTimestamp

> **planDataEndTimestamp**: `number`

Timestamp of when will your plan end

#### Defined in

[packages/discloud.app/src/structures/User.ts:35](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L35)

***

### ramUsage

> **ramUsage**: `number`

#### Defined in

[packages/discloud.app/src/structures/User.ts:49](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L49)

***

### ramUsedMb

> **ramUsedMb**: `number`

Quantity of RAM was used for your applications

#### Defined in

[packages/discloud.app/src/structures/User.ts:39](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L39)

***

### subdomains

> `readonly` **subdomains**: `Set`\<`string`\>

Your subdomains on Discloud

#### Defined in

[packages/discloud.app/src/structures/User.ts:43](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L43)

***

### totalRamMb

> **totalRamMb**: `number`

Your total RAM quantity

#### Defined in

[packages/discloud.app/src/structures/User.ts:47](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L47)

## Accessors

### apps

> `get` **apps**(): [`AppManager`](AppManager.md)

#### Returns

[`AppManager`](AppManager.md)

#### Defined in

[packages/discloud.app/src/structures/User.ts:111](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L111)

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

• **data**: `Partial`\<[`ApiUser`](../interfaces/ApiUser.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/User.ts:57](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L57)

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

### fetch()

> **fetch**(): `Promise`\<[`User`](User.md)\>

Fetch a user from Discloud API

#### Returns

`Promise`\<[`User`](User.md)\>

#### Defined in

[packages/discloud.app/src/structures/User.ts:133](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L133)

***

### setLocale()

> **setLocale**\<`L`\>(`locale`): `Promise`\<`boolean`\>

Set your locale on Discloud

#### Type Parameters

• **L** *extends* [`LocaleString`](../type-aliases/LocaleString.md)

#### Parameters

• **locale**: `L`

Your locale like "en-US".

#### Returns

`Promise`\<`boolean`\>

#### See

[LocaleString](../type-aliases/LocaleString.md)

#### Defined in

[packages/discloud.app/src/structures/User.ts:121](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L121)

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

[packages/discloud.app/src/structures/User.ts:139](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/discloud.app/src/structures/User.ts#L139)
