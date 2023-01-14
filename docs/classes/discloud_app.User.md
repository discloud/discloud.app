[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / User

# Class: User

[discloud.app](../modules/discloud_app.md).User

Base for all structures

## Hierarchy

- [`Base`](discloud_app.Base.md)

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](discloud_app.User.md#constructor)

### Properties

- [appIDs](discloud_app.User.md#appids)
- [constructor](discloud_app.User.md#constructor-1)
- [customdomains](discloud_app.User.md#customdomains)
- [discloudApp](discloud_app.User.md#discloudapp)
- [id](discloud_app.User.md#id)
- [locale](discloud_app.User.md#locale)
- [plan](discloud_app.User.md#plan)
- [planDataEnd](discloud_app.User.md#plandataend)
- [planDataEndTimestamp](discloud_app.User.md#plandataendtimestamp)
- [ramUsedMb](discloud_app.User.md#ramusedmb)
- [subdomains](discloud_app.User.md#subdomains)
- [totalRamMb](discloud_app.User.md#totalrammb)

### Accessors

- [apps](discloud_app.User.md#apps)

### Methods

- [\_clone](discloud_app.User.md#_clone)
- [\_patch](discloud_app.User.md#_patch)
- [\_update](discloud_app.User.md#_update)
- [fetch](discloud_app.User.md#fetch)
- [setLocale](discloud_app.User.md#setlocale)
- [toString](discloud_app.User.md#tostring)

## Constructors

### constructor

• **new User**(`discloudApp`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `discloudApp` | [`DiscloudApp`](discloud_app.DiscloudApp.md) |
| `data` | [`ApiUser`](../interfaces/discloud_app.ApiUser.md) |

#### Overrides

[Base](discloud_app.Base.md).[constructor](discloud_app.Base.md#constructor)

#### Defined in

[packages/discloud.app/src/structures/User.ts:48](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L48)

## Properties

### appIDs

• **appIDs**: `string`[]

Your applications ID

#### Defined in

[packages/discloud.app/src/structures/User.ts:10](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L10)

___

### constructor

• **constructor**: [`Constructor`](../interfaces/discloud_app.Constructor.md)<[`User`](discloud_app.User.md)\>

#### Inherited from

Base.constructor

#### Defined in

[packages/discloud.app/src/structures/Base.ts:5](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L5)

___

### customdomains

• **customdomains**: `string`[]

Your custom domains on Discloud

#### Defined in

[packages/discloud.app/src/structures/User.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L14)

___

### discloudApp

• `Readonly` **discloudApp**: [`DiscloudApp`](discloud_app.DiscloudApp.md)

#### Inherited from

[Base](discloud_app.Base.md).[discloudApp](discloud_app.Base.md#discloudapp)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:12](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L12)

___

### id

• **id**: `string`

Your id

#### Defined in

[packages/discloud.app/src/structures/User.ts:18](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L18)

___

### locale

• **locale**: `string`

Your locale

#### Defined in

[packages/discloud.app/src/structures/User.ts:22](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L22)

___

### plan

• **plan**: `string`

Your plan

#### Defined in

[packages/discloud.app/src/structures/User.ts:26](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L26)

___

### planDataEnd

• `Optional` **planDataEnd**: [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

Date of when will your plan end

#### Defined in

[packages/discloud.app/src/structures/User.ts:30](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L30)

___

### planDataEndTimestamp

• `Optional` **planDataEndTimestamp**: `number`

Timestamp of when will your plan end

#### Defined in

[packages/discloud.app/src/structures/User.ts:34](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L34)

___

### ramUsedMb

• **ramUsedMb**: `number`

Quantity of RAM was used for your applications

#### Defined in

[packages/discloud.app/src/structures/User.ts:38](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L38)

___

### subdomains

• **subdomains**: `string`[]

Your subdomains on Discloud

#### Defined in

[packages/discloud.app/src/structures/User.ts:42](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L42)

___

### totalRamMb

• **totalRamMb**: `number`

Your total RAM quantity

#### Defined in

[packages/discloud.app/src/structures/User.ts:46](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L46)

## Accessors

### apps

• `get` **apps**(): [`AppManager`](discloud_app.AppManager.md)

#### Returns

[`AppManager`](discloud_app.AppManager.md)

#### Defined in

[packages/discloud.app/src/structures/User.ts:68](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L68)

## Methods

### \_clone

▸ `Protected` **_clone**(): [`User`](discloud_app.User.md)

#### Returns

[`User`](discloud_app.User.md)

#### Inherited from

[Base](discloud_app.Base.md).[_clone](discloud_app.Base.md#_clone)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:14](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L14)

___

### \_patch

▸ `Protected` **_patch**(`data`): [`User`](discloud_app.User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`User`](discloud_app.User.md)

#### Inherited from

[Base](discloud_app.Base.md).[_patch](discloud_app.Base.md#_patch)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:18](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L18)

___

### \_update

▸ `Protected` **_update**(`data`): [`User`](discloud_app.User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`User`](discloud_app.User.md)

#### Inherited from

[Base](discloud_app.Base.md).[_update](discloud_app.Base.md#_update)

#### Defined in

[packages/discloud.app/src/structures/Base.ts:23](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/Base.ts#L23)

___

### fetch

▸ **fetch**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](discloud_app.User.md)\>

Fetch a user from Discloud API

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`User`](discloud_app.User.md)\>

Promise [User](discloud_app.User.md)

#### Defined in

[packages/discloud.app/src/structures/User.ts:93](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L93)

___

### setLocale

▸ **setLocale**<`L`\>(`locale`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Set your locale on Discloud

**`See`**

[LocaleString](../modules/discloud_app.md#localestring)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`LocaleString`](../modules/discloud_app.md#localestring) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `L` | Your locale like "en-US". |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Promise Boolean

#### Defined in

[packages/discloud.app/src/structures/User.ts:79](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L79)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

user id

#### Defined in

[packages/discloud.app/src/structures/User.ts:102](https://github.com/discloud/discloud.app/blob/482fdb3/packages/discloud.app/src/structures/User.ts#L102)
