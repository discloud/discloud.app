[discloudapp](../README.md) / [Exports](../modules.md) / [@discloudapp/util](../modules/discloudapp_util.md) / BitField

# Class: BitField<S, N\>

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
- [toArray](discloudapp_util.BitField.md#toarray)
- [toJSON](discloudapp_util.BitField.md#tojson)
- [valueOf](discloudapp_util.BitField.md#valueof)
- [resolve](discloudapp_util.BitField.md#resolve)

## Constructors

### constructor

• **new BitField**<`S`, `N`\>(`bits?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `number` \| `bigint` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`S`, `N`\> | `BitField.DefaultBit` |

#### Defined in

[packages/util/src/BitField.ts:33](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L33)

## Properties

### bitField

• **bitField**: `N`

Bitfield of the packed bits

#### Defined in

[packages/util/src/BitField.ts:18](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L18)

___

### constructor

• **constructor**: [`BitFieldConstructor`](../modules/discloudapp_util.md#bitfieldconstructor)<`S`, `N`\>

#### Defined in

[packages/util/src/BitField.ts:14](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L14)

___

### DefaultBit

▪ `Static` **DefaultBit**: `number` = `0`

#### Defined in

[packages/util/src/BitField.ts:25](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L25)

___

### Flags

▪ `Static` **Flags**: `EnumLike`<`any`, `any`\> = `{}`

Numeric bitfield flags.
<info>Defined in extension classes</info>

#### Defined in

[packages/util/src/BitField.ts:31](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L31)

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator )<`S`, `void`, `undefined`\>

#### Returns

[`Generator`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator )<`S`, `void`, `undefined`\>

#### Defined in

[packages/util/src/BitField.ts:132](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L132)

___

### add

▸ **add**(`...bits`): [`BitField`](discloudapp_util.BitField.md)<`S`, `N`\>

Adds bits to these ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>[] | Bits to add |

#### Returns

[`BitField`](discloudapp_util.BitField.md)<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

[packages/util/src/BitField.ts:42](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L42)

___

### any

▸ **any**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

[packages/util/src/BitField.ts:56](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L56)

___

### equals

▸ **equals**(`...bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

[packages/util/src/BitField.ts:64](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L64)

___

### freeze

▸ **freeze**(): [`Readonly`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype )<[`BitField`](discloudapp_util.BitField.md)<`S`, `N`\>\>

Freezes these bits, making them immutable.

#### Returns

[`Readonly`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype )<[`BitField`](discloudapp_util.BitField.md)<`S`, `N`\>\>

#### Defined in

[packages/util/src/BitField.ts:71](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L71)

___

### has

▸ **has**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

[packages/util/src/BitField.ts:79](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L79)

___

### missing

▸ **missing**(`...bits`): `S`[]

Gets all given bits that are missing from the bitfield.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`S`[]

#### Defined in

[packages/util/src/BitField.ts:88](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L88)

___

### remove

▸ **remove**(`...bits`): [`BitField`](discloudapp_util.BitField.md)<`S`, `N`\>

Removes bits from these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloudapp_util.md#bitfieldresolvable)<`S`, `N`\>[] | Bits to remove |

#### Returns

[`BitField`](discloudapp_util.BitField.md)<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

[packages/util/src/BitField.ts:97](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L97)

___

### serialize

▸ **serialize**(): [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`S`, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`S`, `boolean`\>

#### Defined in

[packages/util/src/BitField.ts:111](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L111)

___

### toArray

▸ **toArray**(): `S`[]

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

#### Defined in

[packages/util/src/BitField.ts:120](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L120)

___

### toJSON

▸ **toJSON**(): `string` \| `N` & `number`

#### Returns

`string` \| `N` & `number`

#### Defined in

[packages/util/src/BitField.ts:124](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L124)

___

### valueOf

▸ **valueOf**(): `N`

#### Returns

`N`

#### Defined in

[packages/util/src/BitField.ts:128](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L128)

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

#### Defined in

[packages/util/src/BitField.ts:140](https://github.com/discloud/discloud.app/blob/0fe6620/packages/util/src/BitField.ts#L140)
