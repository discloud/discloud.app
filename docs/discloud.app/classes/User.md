[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / User

# Class: User

Defined in: [packages/discloud.app/src/structures/User.ts:7](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L7)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### new User()

> **new User**(`discloudApp`, `data`): [`User`](User.md)

Defined in: [packages/discloud.app/src/structures/User.ts:51](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L51)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

##### data

[`ApiUser`](../interfaces/ApiUser.md)

#### Returns

[`User`](User.md)

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

## Properties

### appIDs

> `readonly` **appIDs**: `Set`\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:11](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L11)

Your applications ID

***

### constructor

> **constructor**: [`Constructor`](../interfaces/Constructor.md)\<[`User`](User.md)\>

Defined in: [packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L5)

#### Inherited from

`Base.constructor`

***

### customdomains

> `readonly` **customdomains**: `Set`\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:15](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L15)

Your custom domains on Discloud

***

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp-1)

***

### id

> **id**: `string`

Defined in: [packages/discloud.app/src/structures/User.ts:19](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L19)

Your id

***

### locale

> **locale**: `string`

Defined in: [packages/discloud.app/src/structures/User.ts:23](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L23)

Your locale

***

### plan

> **plan**: `string`

Defined in: [packages/discloud.app/src/structures/User.ts:27](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L27)

Your plan

***

### planDataEnd

> **planDataEnd**: `Date`

Defined in: [packages/discloud.app/src/structures/User.ts:31](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L31)

Date of when will your plan end

***

### planDataEndTimestamp

> **planDataEndTimestamp**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:35](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L35)

Timestamp of when will your plan end

***

### ramUsage

> **ramUsage**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:49](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L49)

***

### ramUsedMb

> **ramUsedMb**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:39](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L39)

Quantity of RAM was used for your applications

***

### subdomains

> `readonly` **subdomains**: `Set`\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:43](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L43)

Your subdomains on Discloud

***

### totalRamMb

> **totalRamMb**: `number`

Defined in: [packages/discloud.app/src/structures/User.ts:47](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L47)

Your total RAM quantity

## Accessors

### apps

#### Get Signature

> **get** **apps**(): [`AppManager`](AppManager.md)

Defined in: [packages/discloud.app/src/structures/User.ts:111](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L111)

##### Returns

[`AppManager`](AppManager.md)

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/User.ts:57](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L57)

#### Parameters

##### data

`Partial`\<[`ApiUser`](../interfaces/ApiUser.md)\>

#### Returns

`this`

#### Overrides

[`Base`](Base.md).[`_patch`](Base.md#_patch)

***

### \_update()

> `protected` **\_update**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/Base.ts#L26)

#### Parameters

##### data

`unknown`

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### fetch()

> **fetch**(): `Promise`\<[`User`](User.md)\>

Defined in: [packages/discloud.app/src/structures/User.ts:133](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L133)

Fetch a user from Discloud API

#### Returns

`Promise`\<[`User`](User.md)\>

***

### setLocale()

> **setLocale**\<`L`\>(`locale`): `Promise`\<`boolean`\>

Defined in: [packages/discloud.app/src/structures/User.ts:121](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L121)

Set your locale on Discloud

#### Type Parameters

• **L** *extends* [`LocaleString`](../type-aliases/LocaleString.md)

#### Parameters

##### locale

`L`

Your locale like "en-US".

#### Returns

`Promise`\<`boolean`\>

#### See

[LocaleString](../type-aliases/LocaleString.md)

***

### toString()

> **toString**(): `string`

Defined in: [packages/discloud.app/src/structures/User.ts:139](https://github.com/discloud/discloud.app/blob/bfcb626f6315ac03eb36b36e57f162cd101e1996/packages/discloud.app/src/structures/User.ts#L139)

Returns a string representation of an object.

#### Returns

`string`
