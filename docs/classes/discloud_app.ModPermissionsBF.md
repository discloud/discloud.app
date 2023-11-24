[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / ModPermissionsBF

# Class: ModPermissionsBF

[discloud.app](../modules/discloud_app.md).ModPermissionsBF

Data structure that makes it easy to interact with a bitfield.

## Hierarchy

- [`BitField`](discloud_app.BitField.md)\<[`ModPermissionsFlags`](../modules/discloud_app.md#modpermissionsflags), `number`\>

  ↳ **`ModPermissionsBF`**

## Table of contents

### Constructors

- [constructor](discloud_app.ModPermissionsBF.md#constructor)

### Properties

- [bitField](discloud_app.ModPermissionsBF.md#bitfield)
- [constructor](discloud_app.ModPermissionsBF.md#constructor-1)
- [All](discloud_app.ModPermissionsBF.md#all)
- [DefaultBit](discloud_app.ModPermissionsBF.md#defaultbit)
- [Flags](discloud_app.ModPermissionsBF.md#flags)

### Methods

- [[iterator]](discloud_app.ModPermissionsBF.md#[iterator])
- [add](discloud_app.ModPermissionsBF.md#add)
- [any](discloud_app.ModPermissionsBF.md#any)
- [equals](discloud_app.ModPermissionsBF.md#equals)
- [freeze](discloud_app.ModPermissionsBF.md#freeze)
- [has](discloud_app.ModPermissionsBF.md#has)
- [missing](discloud_app.ModPermissionsBF.md#missing)
- [remove](discloud_app.ModPermissionsBF.md#remove)
- [serialize](discloud_app.ModPermissionsBF.md#serialize)
- [set](discloud_app.ModPermissionsBF.md#set)
- [toArray](discloud_app.ModPermissionsBF.md#toarray)
- [toJSON](discloud_app.ModPermissionsBF.md#tojson)
- [valueOf](discloud_app.ModPermissionsBF.md#valueof)
- [resolve](discloud_app.ModPermissionsBF.md#resolve)

## Constructors

### constructor

• **new ModPermissionsBF**(`...bits`): [`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] |

#### Returns

[`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

#### Inherited from

[BitField](discloud_app.BitField.md).[constructor](discloud_app.BitField.md#constructor)

#### Defined in

packages/util/out/BitField.d.ts:26

## Properties

### bitField

• **bitField**: `number`

Bitfield of the packed bits

#### Inherited from

[BitField](discloud_app.BitField.md).[bitField](discloud_app.BitField.md#bitfield)

#### Defined in

packages/util/out/BitField.d.ts:14

___

### constructor

• **constructor**: [`BitFieldConstructor`](../modules/discloud_app.md#bitfieldconstructor)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>

#### Inherited from

BitField.constructor

#### Defined in

packages/util/out/BitField.d.ts:10

___

### All

▪ `Static` **All**: [`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:25

___

### DefaultBit

▪ `Static` **DefaultBit**: `number` \| `bigint`

#### Inherited from

[BitField](discloud_app.BitField.md).[DefaultBit](discloud_app.BitField.md#defaultbit)

#### Defined in

packages/util/out/BitField.d.ts:20

___

### Flags

▪ `Static` **Flags**: `Object`

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

[BitField](discloud_app.BitField.md).[Flags](discloud_app.BitField.md#flags)

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:15

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `void`, `undefined`\>

#### Returns

`Generator`\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `void`, `undefined`\>

#### Inherited from

[BitField](discloud_app.BitField.md).[[iterator]](discloud_app.BitField.md#[iterator])

#### Defined in

packages/util/out/BitField.d.ts:80

___

### add

▸ **add**(`...bits`): [`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

Adds bits to these ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bits to add |

#### Returns

[`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

These bits or new BitField if the instance is frozen.

#### Inherited from

[BitField](discloud_app.BitField.md).[add](discloud_app.BitField.md#add)

#### Defined in

packages/util/out/BitField.d.ts:32

___

### any

▸ **any**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Inherited from

[BitField](discloud_app.BitField.md).[any](discloud_app.BitField.md#any)

#### Defined in

packages/util/out/BitField.d.ts:37

___

### equals

▸ **equals**(`...bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Inherited from

[BitField](discloud_app.BitField.md).[equals](discloud_app.BitField.md#equals)

#### Defined in

packages/util/out/BitField.d.ts:42

___

### freeze

▸ **freeze**(): `Readonly`\<[`BitField`](discloud_app.BitField.md)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>\>

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`BitField`](discloud_app.BitField.md)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>\>

#### Inherited from

[BitField](discloud_app.BitField.md).[freeze](discloud_app.BitField.md#freeze)

#### Defined in

packages/util/out/BitField.d.ts:46

___

### has

▸ **has**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Inherited from

[BitField](discloud_app.BitField.md).[has](discloud_app.BitField.md#has)

#### Defined in

packages/util/out/BitField.d.ts:51

___

### missing

▸ **missing**(`...bits`): (``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

Gets all given bits that are missing from the bitfield.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bit(s) to check for |

#### Returns

(``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

#### Inherited from

[BitField](discloud_app.BitField.md).[missing](discloud_app.BitField.md#missing)

#### Defined in

packages/util/out/BitField.d.ts:56

___

### remove

▸ **remove**(`...bits`): [`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

Removes bits from these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | Bits to remove |

#### Returns

[`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

These bits or new BitField if the instance is frozen.

#### Inherited from

[BitField](discloud_app.BitField.md).[remove](discloud_app.BitField.md#remove)

#### Defined in

packages/util/out/BitField.d.ts:62

___

### serialize

▸ **serialize**(): `Record`\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `boolean`\>

#### Inherited from

[BitField](discloud_app.BitField.md).[serialize](discloud_app.BitField.md#serialize)

#### Defined in

packages/util/out/BitField.d.ts:67

___

### set

▸ **set**(`...bits`): [`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

Replace the bits with these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``, `number`\>[] | bits to set |

#### Returns

[`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

These bits or new BitField if the instance is frozen.

#### Inherited from

[BitField](discloud_app.BitField.md).[set](discloud_app.BitField.md#set)

#### Defined in

packages/util/out/BitField.d.ts:73

___

### toArray

▸ **toArray**(): (``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

Gets an Array of bitfield names based on the bits available.

#### Returns

(``"backup_app"`` \| ``"commit_app"`` \| ``"edit_ram"`` \| ``"logs_app"`` \| ``"restart_app"`` \| ``"start_app"`` \| ``"status_app"`` \| ``"stop_app"``)[]

#### Inherited from

[BitField](discloud_app.BitField.md).[toArray](discloud_app.BitField.md#toarray)

#### Defined in

packages/util/out/BitField.d.ts:77

___

### toJSON

▸ **toJSON**(): `string` \| `number`

#### Returns

`string` \| `number`

#### Inherited from

[BitField](discloud_app.BitField.md).[toJSON](discloud_app.BitField.md#tojson)

#### Defined in

packages/util/out/BitField.d.ts:78

___

### valueOf

▸ **valueOf**(): `number`

#### Returns

`number`

#### Inherited from

[BitField](discloud_app.BitField.md).[valueOf](discloud_app.BitField.md#valueof)

#### Defined in

packages/util/out/BitField.d.ts:79

___

### resolve

▸ **resolve**\<`N`\>(`bit`): `N`

Resolves bitfields to their numeric form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `number` \| `bigint` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bit` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`string`, `N`\> | bit(s) to resolve |

#### Returns

`N`

#### Inherited from

[BitField](discloud_app.BitField.md).[resolve](discloud_app.BitField.md#resolve)

#### Defined in

packages/util/out/BitField.d.ts:85
