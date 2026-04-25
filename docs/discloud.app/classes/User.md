[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / User

# Class: User

Defined in: [packages/discloud.app/src/structures/User.ts:14](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L14)

Base for all structures

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new User**(`discloudApp`): `User`

Defined in: [packages/discloud.app/src/structures/User.ts:125](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L125)

#### Parameters

##### discloudApp

[`DiscloudApp`](DiscloudApp.md)

#### Returns

`User`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### discloudApp

> `readonly` **discloudApp**: [`DiscloudApp`](DiscloudApp.md)

Defined in: [packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L12)

#### Inherited from

[`Base`](Base.md).[`discloudApp`](Base.md#discloudapp)

## Accessors

### appIDs

#### Get Signature

> **get** **appIDs**(): [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:34](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L34)

Your applications ID

##### Returns

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

***

### apps

#### Get Signature

> **get** **apps**(): [`AppManager`](AppManager.md)

Defined in: [packages/discloud.app/src/structures/User.ts:197](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L197)

##### Returns

[`AppManager`](AppManager.md)

***

### avatar

#### Get Signature

> **get** **avatar**(): `string` \| `null`

Defined in: [packages/discloud.app/src/structures/User.ts:113](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L113)

##### Returns

`string` \| `null`

***

### customdomains

#### Get Signature

> **get** **customdomains**(): [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:42](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L42)

Your custom domains on Discloud

##### Returns

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/discloud.app/src/structures/User.ts:50](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L50)

Your id

##### Returns

`string`

***

### loaded

#### Get Signature

> **get** **loaded**(): `boolean`

Defined in: [packages/discloud.app/src/structures/User.ts:129](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L129)

##### Returns

`boolean`

***

### locale

#### Get Signature

> **get** **locale**(): `string`

Defined in: [packages/discloud.app/src/structures/User.ts:58](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L58)

Your locale

##### Returns

`string`

***

### plan

#### Get Signature

> **get** **plan**(): `string`

Defined in: [packages/discloud.app/src/structures/User.ts:66](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L66)

Your plan

##### Returns

`string`

***

### planDataEnd

#### Get Signature

> **get** **planDataEnd**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

Defined in: [packages/discloud.app/src/structures/User.ts:74](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L74)

Date of when will your plan end

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

***

### planDataEndTimestamp

#### Get Signature

> **get** **planDataEndTimestamp**(): `number` \| `null`

Defined in: [packages/discloud.app/src/structures/User.ts:82](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L82)

Timestamp of when will your plan end

##### Returns

`number` \| `null`

***

### ramUsedMb

#### Get Signature

> **get** **ramUsedMb**(): `number`

Defined in: [packages/discloud.app/src/structures/User.ts:90](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L90)

Quantity of RAM was used for your applications

##### Returns

`number`

***

### subdomains

#### Get Signature

> **get** **subdomains**(): [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: [packages/discloud.app/src/structures/User.ts:98](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L98)

Your subdomains on Discloud

##### Returns

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

***

### totalRamMb

#### Get Signature

> **get** **totalRamMb**(): `number`

Defined in: [packages/discloud.app/src/structures/User.ts:106](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L106)

Your total RAM quantity

##### Returns

`number`

***

### username

#### Get Signature

> **get** **username**(): `string` \| `null`

Defined in: [packages/discloud.app/src/structures/User.ts:120](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L120)

##### Returns

`string` \| `null`

## Methods

### \_clone()

> `protected` **\_clone**(): `this`

Defined in: [packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L18)

#### Returns

`this`

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_patch()

> `protected` **\_patch**(`data`): `this`

Defined in: [packages/discloud.app/src/structures/User.ts:131](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L131)

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

Defined in: [packages/discloud.app/src/structures/Base.ts:26](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/Base.ts#L26)

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

Defined in: [packages/discloud.app/src/structures/User.ts:219](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L219)

Fetch a user from Discloud API

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`User`\>

***

### setLocale()

> **setLocale**\<`L`\>(`locale`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/discloud.app/src/structures/User.ts:207](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L207)

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

Defined in: [packages/discloud.app/src/structures/User.ts:225](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/discloud.app/src/structures/User.ts#L225)

Returns a string representation of an object.

#### Returns

`string`
