[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / ModPermissionsBF

# Class: ModPermissionsBF

[@discloudapp/util](../modules/discloudapp_util.md).ModPermissionsBF

Data structure that makes it easy to interact with a bitfield.

## Hierarchy

- [`BitField`](discloudapp_util.BitField.md)<[`ModPermissionsFlags`](../modules/discloudapp_util.md#modpermissionsflags), `number`\>

  ↳ **`ModPermissionsBF`**

## Table of contents

### Constructors

- [constructor](discloudapp_util.ModPermissionsBF.md#constructor)

### Properties

- [bitField](discloudapp_util.ModPermissionsBF.md#bitfield)
- [constructor](discloudapp_util.ModPermissionsBF.md#constructor-1)
- [All](discloudapp_util.ModPermissionsBF.md#all)
- [DefaultBit](discloudapp_util.ModPermissionsBF.md#defaultbit)
- [Flags](discloudapp_util.ModPermissionsBF.md#flags)

### Methods

- [[iterator]](discloudapp_util.ModPermissionsBF.md#[iterator])
- [add](discloudapp_util.ModPermissionsBF.md#add)
- [any](discloudapp_util.ModPermissionsBF.md#any)
- [equals](discloudapp_util.ModPermissionsBF.md#equals)
- [freeze](discloudapp_util.ModPermissionsBF.md#freeze)
- [has](discloudapp_util.ModPermissionsBF.md#has)
- [missing](discloudapp_util.ModPermissionsBF.md#missing)
- [remove](discloudapp_util.ModPermissionsBF.md#remove)
- [serialize](discloudapp_util.ModPermissionsBF.md#serialize)
- [set](discloudapp_util.ModPermissionsBF.md#set)
- [toArray](discloudapp_util.ModPermissionsBF.md#toarray)
- [toJSON](discloudapp_util.ModPermissionsBF.md#tojson)
- [valueOf](discloudapp_util.ModPermissionsBF.md#valueof)
- [resolve](discloudapp_util.ModPermissionsBF.md#resolve)

## Constructors

### constructor

• **new ModPermissionsBF**(`...bits`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] |

#### Inherited from

[BitField](discloudapp_util.BitField.md).[constructor](discloudapp_util.BitField.md#constructor)

#### Defined in

[BitField.ts:33](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L33)

## Properties

### bitField

• **bitField**: `number`

Bitfield of the packed bits

#### Inherited from

[BitField](discloudapp_util.BitField.md).[bitField](discloudapp_util.BitField.md#bitfield)

#### Defined in

[BitField.ts:18](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L18)

___

### constructor

• **constructor**: [`BitFieldConstructor`](../modules/discloudapp_util.md#bitfieldconstructor)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>

#### Inherited from

BitField.constructor

#### Defined in

[BitField.ts:14](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L14)

___

### All

▪ `Static` **All**: [`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

#### Defined in

[ModPermissionsBF.ts:20](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/ModPermissionsBF.ts#L20)

___

### DefaultBit

▪ `Static` **DefaultBit**: `number` \| `bigint` = `0`

#### Inherited from

[BitField](discloudapp_util.BitField.md).[DefaultBit](discloudapp_util.BitField.md#defaultbit)

#### Defined in

[BitField.ts:25](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L25)

___

### Flags

▪ `Static` **Flags**: `Object` = `ModPermissions`

Numeric bitfield flags.
<info>Defined in extension classes</info>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backup_app` | `number` |
| `commit_app` | `number` |
| `edit_ram` | `number` |
| `logs_app` | `number` |
| `restart_app` | `number` |
| `start_app` | `number` |
| `status_app` | `number` |
| `stop_app` | `number` |

#### Overrides

[BitField](discloudapp_util.BitField.md).[Flags](discloudapp_util.BitField.md#flags)

#### Defined in

[ModPermissionsBF.ts:19](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/ModPermissionsBF.ts#L19)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator )<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `void`, `undefined`\>

#### Returns

[`Generator`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator )<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `void`, `undefined`\>

#### Inherited from

[BitField](discloudapp_util.BitField.md).[[iterator]](discloudapp_util.BitField.md#[iterator])

#### Defined in

[BitField.ts:145](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L145)

___

### add

▸ **add**(`...bits`): [`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

Adds bits to these ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bits to add |

#### Returns

[`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

These bits or new BitField if the instance is frozen.

#### Inherited from

[BitField](discloudapp_util.BitField.md).[add](discloudapp_util.BitField.md#add)

#### Defined in

[BitField.ts:42](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L42)

___

### any

▸ **any**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Inherited from

[BitField](discloudapp_util.BitField.md).[any](discloudapp_util.BitField.md#any)

#### Defined in

[BitField.ts:56](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L56)

___

### equals

▸ **equals**(`...bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Inherited from

[BitField](discloudapp_util.BitField.md).[equals](discloudapp_util.BitField.md#equals)

#### Defined in

[BitField.ts:64](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L64)

___

### freeze

▸ **freeze**(): `Readonly`<[`BitField`](discloudapp_util.BitField.md)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>\>

Freezes these bits, making them immutable.

#### Returns

`Readonly`<[`BitField`](discloudapp_util.BitField.md)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>\>

#### Inherited from

[BitField](discloudapp_util.BitField.md).[freeze](discloudapp_util.BitField.md#freeze)

#### Defined in

[BitField.ts:71](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L71)

___

### has

▸ **has**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Inherited from

[BitField](discloudapp_util.BitField.md).[has](discloudapp_util.BitField.md#has)

#### Defined in

[BitField.ts:79](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L79)

___

### missing

▸ **missing**(`...bits`): (``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

Gets all given bits that are missing from the bitfield.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

(``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

#### Inherited from

[BitField](discloudapp_util.BitField.md).[missing](discloudapp_util.BitField.md#missing)

#### Defined in

[BitField.ts:88](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L88)

___

### remove

▸ **remove**(`...bits`): [`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

Removes bits from these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bits to remove |

#### Returns

[`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

These bits or new BitField if the instance is frozen.

#### Inherited from

[BitField](discloudapp_util.BitField.md).[remove](discloudapp_util.BitField.md#remove)

#### Defined in

[BitField.ts:97](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L97)

___

### serialize

▸ **serialize**(): `Record`<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `boolean`\>

#### Inherited from

[BitField](discloudapp_util.BitField.md).[serialize](discloudapp_util.BitField.md#serialize)

#### Defined in

[BitField.ts:111](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L111)

___

### set

▸ **set**(`...bits`): [`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

Replace the bits with these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | bits to set |

#### Returns

[`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

These bits or new BitField if the instance is frozen.

#### Inherited from

[BitField](discloudapp_util.BitField.md).[set](discloudapp_util.BitField.md#set)

#### Defined in

[BitField.ts:122](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L122)

___

### toArray

▸ **toArray**(): (``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

Gets an Array of bitfield names based on the bits available.

#### Returns

(``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

#### Inherited from

[BitField](discloudapp_util.BitField.md).[toArray](discloudapp_util.BitField.md#toarray)

#### Defined in

[BitField.ts:133](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L133)

___

### toJSON

▸ **toJSON**(): `string` \| `number`

#### Returns

`string` \| `number`

#### Inherited from

[BitField](discloudapp_util.BitField.md).[toJSON](discloudapp_util.BitField.md#tojson)

#### Defined in

[BitField.ts:137](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L137)

___

### valueOf

▸ **valueOf**(): `number`

#### Returns

`number`

#### Inherited from

[BitField](discloudapp_util.BitField.md).[valueOf](discloudapp_util.BitField.md#valueof)

#### Defined in

[BitField.ts:141](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L141)

___

### resolve

▸ `Static` **resolve**<`N`\>(`bit`): `N`

Resolves bitfields to their numeric form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `number` \| `bigint` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bit` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`string`, `N`\> | bit(s) to resolve |

#### Returns

`N`

#### Inherited from

[BitField](discloudapp_util.BitField.md).[resolve](discloudapp_util.BitField.md#resolve)

#### Defined in

[BitField.ts:153](https://github.com/discloud/discloud.app/blob/a945852/packages/util/src/BitField.ts#L153)
