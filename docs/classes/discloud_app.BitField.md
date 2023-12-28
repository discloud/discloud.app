[Documentation](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / BitField

# Class: BitField\<S, N\>

[discloud.app](../modules/discloud_app.md).BitField

Data structure that makes it easy to interact with a bitfield.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `bigint` \| `number` |

## Hierarchy

- **`BitField`**

  ↳ [`ModPermissionsBF`](discloud_app.ModPermissionsBF.md)

## Table of contents

### Constructors

- [constructor](discloud_app.BitField.md#constructor)

### Properties

- [bitField](discloud_app.BitField.md#bitfield)
- [constructor](discloud_app.BitField.md#constructor-1)
- [DefaultBit](discloud_app.BitField.md#defaultbit)
- [Flags](discloud_app.BitField.md#flags)

### Methods

- [[iterator]](discloud_app.BitField.md#[iterator])
- [add](discloud_app.BitField.md#add)
- [any](discloud_app.BitField.md#any)
- [equals](discloud_app.BitField.md#equals)
- [freeze](discloud_app.BitField.md#freeze)
- [has](discloud_app.BitField.md#has)
- [missing](discloud_app.BitField.md#missing)
- [remove](discloud_app.BitField.md#remove)
- [serialize](discloud_app.BitField.md#serialize)
- [set](discloud_app.BitField.md#set)
- [toArray](discloud_app.BitField.md#toarray)
- [toJSON](discloud_app.BitField.md#tojson)
- [valueOf](discloud_app.BitField.md#valueof)
- [resolve](discloud_app.BitField.md#resolve)

## Constructors

### constructor

• **new BitField**\<`S`, `N`\>(`...bits`): [`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] |

#### Returns

[`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

#### Defined in

packages/util/out/BitField.d.ts:26

## Properties

### bitField

• **bitField**: `N`

Bitfield of the packed bits

#### Defined in

packages/util/out/BitField.d.ts:14

___

### constructor

• **constructor**: [`BitFieldConstructor`](../modules/discloud_app.md#bitfieldconstructor)\<`S`, `N`\>

#### Defined in

packages/util/out/BitField.d.ts:10

___

### DefaultBit

▪ `Static` **DefaultBit**: `number` \| `bigint`

#### Defined in

packages/util/out/BitField.d.ts:20

___

### Flags

▪ `Static` **Flags**: `EnumLike`\<`unknown`, `number` \| `bigint`\>

Numeric bitfield flags.
Defined in extension classes

#### Defined in

packages/util/out/BitField.d.ts:25

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<`string`, `void`, `undefined`\>

#### Returns

`Generator`\<`string`, `void`, `undefined`\>

#### Defined in

packages/util/out/BitField.d.ts:80

___

### add

▸ **add**(`...bits`): [`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

Adds bits to these ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] | Bits to add |

#### Returns

[`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

packages/util/out/BitField.d.ts:32

___

### any

▸ **any**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

packages/util/out/BitField.d.ts:37

___

### equals

▸ **equals**(`...bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

packages/util/out/BitField.d.ts:42

___

### freeze

▸ **freeze**(): `Readonly`\<[`BitField`](discloud_app.BitField.md)\<`S`, `N`\>\>

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`BitField`](discloud_app.BitField.md)\<`S`, `N`\>\>

#### Defined in

packages/util/out/BitField.d.ts:46

___

### has

▸ **has**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

packages/util/out/BitField.d.ts:51

___

### missing

▸ **missing**(`...bits`): `S`[]

Gets all given bits that are missing from the bitfield.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`S`[]

#### Defined in

packages/util/out/BitField.d.ts:56

___

### remove

▸ **remove**(`...bits`): [`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

Removes bits from these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] | Bits to remove |

#### Returns

[`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

packages/util/out/BitField.d.ts:62

___

### serialize

▸ **serialize**(): `Record`\<`S`, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`S`, `boolean`\>

#### Defined in

packages/util/out/BitField.d.ts:67

___

### set

▸ **set**(`...bits`): [`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

Replace the bits with these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)\<`S`, `N`\>[] | bits to set |

#### Returns

[`BitField`](discloud_app.BitField.md)\<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

packages/util/out/BitField.d.ts:73

___

### toArray

▸ **toArray**(): `S`[]

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

#### Defined in

packages/util/out/BitField.d.ts:77

___

### toJSON

▸ **toJSON**(): `string` \| `N` & `number`

#### Returns

`string` \| `N` & `number`

#### Defined in

packages/util/out/BitField.d.ts:78

___

### valueOf

▸ **valueOf**(): `N`

#### Returns

`N`

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

#### Defined in

packages/util/out/BitField.d.ts:85
