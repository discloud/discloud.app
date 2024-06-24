[**@discloudapp/util**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitField

# Class: `abstract` BitField\<S, N\>

Data structure that makes it easy to interact with a bitfield.

## Extended by

- [`ModPermissionsBF`](ModPermissionsBF.md)

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`

## Constructors

### new BitField()

> **new BitField**\<`S`, `N`\>(...`bits`): [`BitField`](BitField.md)\<`S`, `N`\>

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

[`BitField`](BitField.md)\<`S`, `N`\>

#### Defined in

[packages/util/src/BitField.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L31)

## Properties

### bitField

> **bitField**: `N`

Bitfield of the packed bits

#### Defined in

[packages/util/src/BitField.ts:16](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L16)

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`S`, `N`\>

#### Defined in

[packages/util/src/BitField.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L12)

***

### DefaultBit

> `static` **DefaultBit**: `number` \| `bigint` = `0`

#### Defined in

[packages/util/src/BitField.ts:23](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L23)

***

### Flags

> `static` **Flags**: `EnumLike`\<`unknown`, `number` \| `bigint`\> = `{}`

Numeric bitfield flags.
Defined in extension classes

#### Defined in

[packages/util/src/BitField.ts:29](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L29)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`S`, `void`, `unknown`\>

#### Returns

`Generator`\<`S`, `void`, `unknown`\>

#### Defined in

[packages/util/src/BitField.ts:151](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L151)

***

### add()

> **add**(...`bits`): `this`

Adds bits to these ones.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bits to add

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Defined in

[packages/util/src/BitField.ts:40](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L40)

***

### any()

> **any**(...`bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Defined in

[packages/util/src/BitField.ts:57](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L57)

***

### equals()

> **equals**(...`bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Defined in

[packages/util/src/BitField.ts:65](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L65)

***

### freeze()

> **freeze**(): `Readonly`\<[`BitField`](BitField.md)\<`S`, `N`\>\>

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`BitField`](BitField.md)\<`S`, `N`\>\>

#### Defined in

[packages/util/src/BitField.ts:72](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L72)

***

### has()

> **has**(...`bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Defined in

[packages/util/src/BitField.ts:80](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L80)

***

### missing()

> **missing**(...`bits`): `S`[]

Gets all given bits that are missing from the bitfield.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`S`[]

#### Defined in

[packages/util/src/BitField.ts:89](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L89)

***

### remove()

> **remove**(...`bits`): `this`

Removes bits from these.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bits to remove

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Defined in

[packages/util/src/BitField.ts:98](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L98)

***

### serialize()

> **serialize**(): `Record`\<`S`, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`S`, `boolean`\>

#### Defined in

[packages/util/src/BitField.ts:115](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L115)

***

### set()

> **set**(...`bits`): `this`

Replace the bits with these.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

bits to set

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Defined in

[packages/util/src/BitField.ts:126](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L126)

***

### toArray()

> **toArray**(): `S`[]

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

#### Defined in

[packages/util/src/BitField.ts:138](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L138)

***

### toJSON()

> **toJSON**(): `string` \| `N` & `number`

#### Returns

`string` \| `N` & `number`

#### Defined in

[packages/util/src/BitField.ts:143](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L143)

***

### valueOf()

> **valueOf**(): `N`

#### Returns

`N`

#### Defined in

[packages/util/src/BitField.ts:147](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L147)

***

### resolve()

> `static` **resolve**\<`S`, `N`\>(`bit`): `N`

Resolves bitfields to their numeric form.

#### Type Parameters

• **S** *extends* `string`

• **N** *extends* `number` \| `bigint`

#### Parameters

• **bit**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>

bit(s) to resolve

#### Returns

`N`

#### Defined in

[packages/util/src/BitField.ts:161](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/util/src/BitField.ts#L161)
