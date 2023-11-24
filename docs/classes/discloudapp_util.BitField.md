[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / BitField

# Class: BitField\<S, N\>

[@discloudapp/util](../modules/discloudapp_util.md).BitField

Data structure that makes it easy to interact with a bitfield.

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `bigint` \| `number` |

## Hierarchy

- **`BitField`**

  ↳ [`ModPermissionsBF`](discloudapp_util.ModPermissionsBF.md)

## Table of contents

### Constructors

- [constructor](discloudapp_util.BitField.md#constructor)

### Properties

- [bitField](discloudapp_util.BitField.md#bitfield)
- [constructor](discloudapp_util.BitField.md#constructor-1)
- [DefaultBit](discloudapp_util.BitField.md#defaultbit)
- [Flags](discloudapp_util.BitField.md#flags)

### Methods

- [[iterator]](discloudapp_util.BitField.md#[iterator])
- [add](discloudapp_util.BitField.md#add)
- [any](discloudapp_util.BitField.md#any)
- [equals](discloudapp_util.BitField.md#equals)
- [freeze](discloudapp_util.BitField.md#freeze)
- [has](discloudapp_util.BitField.md#has)
- [missing](discloudapp_util.BitField.md#missing)
- [remove](discloudapp_util.BitField.md#remove)
- [serialize](discloudapp_util.BitField.md#serialize)
- [set](discloudapp_util.BitField.md#set)
- [toArray](discloudapp_util.BitField.md#toarray)
- [toJSON](discloudapp_util.BitField.md#tojson)
- [valueOf](discloudapp_util.BitField.md#valueof)
- [resolve](discloudapp_util.BitField.md#resolve)

## Constructors

### constructor

• **new BitField**\<`S`, `N`\>(`...bits`): [`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] |

#### Returns

[`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

#### Defined in

[BitField.ts:31](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L31)

## Properties

### bitField

• **bitField**: `N`

Bitfield of the packed bits

#### Defined in

[BitField.ts:16](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L16)

___

### constructor

• **constructor**: [`BitFieldConstructor`](../modules/discloudapp_util.md#bitfieldconstructor)\<`S`, `N`\>

#### Defined in

[BitField.ts:12](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L12)

___

### DefaultBit

▪ `Static` **DefaultBit**: `number` \| `bigint` = `0`

#### Defined in

[BitField.ts:23](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L23)

___

### Flags

▪ `Static` **Flags**: `EnumLike`\<`unknown`, `number` \| `bigint`\> = `{}`

Numeric bitfield flags.
<info>Defined in extension classes</info>

#### Defined in

[BitField.ts:29](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L29)

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<`S`, `void`, `undefined`\>

#### Returns

`Generator`\<`S`, `void`, `undefined`\>

#### Defined in

[BitField.ts:152](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L152)

___

### add

▸ **add**(`...bits`): [`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

Adds bits to these ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] | Bits to add |

#### Returns

[`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

[BitField.ts:40](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L40)

___

### any

▸ **any**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

[BitField.ts:57](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L57)

___

### equals

▸ **equals**(`...bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

[BitField.ts:65](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L65)

___

### freeze

▸ **freeze**(): `Readonly`\<[`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>\>

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>\>

#### Defined in

[BitField.ts:72](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L72)

___

### has

▸ **has**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

[BitField.ts:80](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L80)

___

### missing

▸ **missing**(`...bits`): `S`[]

Gets all given bits that are missing from the bitfield.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`S`[]

#### Defined in

[BitField.ts:89](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L89)

___

### remove

▸ **remove**(`...bits`): [`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

Removes bits from these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] | Bits to remove |

#### Returns

[`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

[BitField.ts:99](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L99)

___

### serialize

▸ **serialize**(): `Record`\<`S`, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`S`, `boolean`\>

#### Defined in

[BitField.ts:116](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L116)

___

### set

▸ **set**(`...bits`): [`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

Replace the bits with these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`S`, `N`\>[] | bits to set |

#### Returns

[`BitField`](discloudapp_util.BitField.md)\<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

[BitField.ts:127](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L127)

___

### toArray

▸ **toArray**(): `S`[]

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

#### Defined in

[BitField.ts:139](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L139)

___

### toJSON

▸ **toJSON**(): `string` \| `N` & `number`

#### Returns

`string` \| `N` & `number`

#### Defined in

[BitField.ts:144](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L144)

___

### valueOf

▸ **valueOf**(): `N`

#### Returns

`N`

#### Defined in

[BitField.ts:148](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L148)

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
| `bit` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)\<`string`, `N`\> | bit(s) to resolve |

#### Returns

`N`

#### Defined in

[BitField.ts:160](https://github.com/discloud/discloud.app/blob/78281f4/packages/util/src/BitField.ts#L160)
