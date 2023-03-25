[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / BitField

# Class: BitField<S, N\>

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
- [toArray](discloud_app.BitField.md#toarray)
- [toJSON](discloud_app.BitField.md#tojson)
- [valueOf](discloud_app.BitField.md#valueof)
- [resolve](discloud_app.BitField.md#resolve)

## Constructors

### constructor

• **new BitField**<`S`, `N`\>(`bits?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |
| `N` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits?` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`S`, `N`\> |

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:26

## Properties

### bitField

• **bitField**: `N`

Bitfield of the packed bits

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:14

___

### constructor

• **constructor**: [`BitFieldConstructor`](../modules/discloud_app.md#bitfieldconstructor)<`S`, `N`\>

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:10

___

### DefaultBit

▪ `Static` **DefaultBit**: `number`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:20

___

### Flags

▪ `Static` **Flags**: `EnumLike`<`any`, `any`\>

Numeric bitfield flags.
<info>Defined in extension classes</info>

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:25

## Methods

### [iterator]

▸ **[iterator]**(): [`Generator`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator )<`S`, `void`, `undefined`\>

#### Returns

[`Generator`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator )<`S`, `void`, `undefined`\>

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:74

___

### add

▸ **add**(`...bits`): [`BitField`](discloud_app.BitField.md)<`S`, `N`\>

Adds bits to these ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`S`, `N`\>[] | Bits to add |

#### Returns

[`BitField`](discloud_app.BitField.md)<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:32

___

### any

▸ **any**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:37

___

### equals

▸ **equals**(`...bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:42

___

### freeze

▸ **freeze**(): [`Readonly`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype )<[`BitField`](discloud_app.BitField.md)<`S`, `N`\>\>

Freezes these bits, making them immutable.

#### Returns

[`Readonly`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype )<[`BitField`](discloud_app.BitField.md)<`S`, `N`\>\>

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:46

___

### has

▸ **has**(`...bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`boolean`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:51

___

### missing

▸ **missing**(`...bits`): `S`[]

Gets all given bits that are missing from the bitfield.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`S`, `N`\>[] | Bit(s) to check for |

#### Returns

`S`[]

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:56

___

### remove

▸ **remove**(`...bits`): [`BitField`](discloud_app.BitField.md)<`S`, `N`\>

Removes bits from these.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...bits` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`S`, `N`\>[] | Bits to remove |

#### Returns

[`BitField`](discloud_app.BitField.md)<`S`, `N`\>

These bits or new BitField if the instance is frozen.

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:62

___

### serialize

▸ **serialize**(): [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`S`, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`S`, `boolean`\>

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:67

___

### toArray

▸ **toArray**(): `S`[]

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:71

___

### toJSON

▸ **toJSON**(): `string` \| `N` & `number`

#### Returns

`string` \| `N` & `number`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:72

___

### valueOf

▸ **valueOf**(): `N`

#### Returns

`N`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:73

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
| `bit` | [`BitFieldResolvable`](../modules/discloud_app.md#bitfieldresolvable)<`string`, `N`\> | bit(s) to resolve |

#### Returns

`N`

#### Defined in

packages/discloud.app/node_modules/@discloudapp/util/dist/BitField.d.ts:79
