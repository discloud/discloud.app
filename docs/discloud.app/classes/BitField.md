[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BitField

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

packages/util/out/BitField.d.ts:27

## Properties

### bitField

> **bitField**: `N`

Bitfield of the packed bits

#### Defined in

packages/util/out/BitField.d.ts:15

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`S`, `N`\>

#### Defined in

packages/util/out/BitField.d.ts:11

***

### DefaultBit

> `static` **DefaultBit**: `number` \| `bigint`

#### Defined in

packages/util/out/BitField.d.ts:21

***

### Flags

> `static` **Flags**: `EnumLike`\<`unknown`, `number` \| `bigint`\>

Numeric bitfield flags.
Defined in extension classes

#### Defined in

packages/util/out/BitField.d.ts:26

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`S`, `void`, `unknown`\>

#### Returns

`Generator`\<`S`, `void`, `unknown`\>

#### Defined in

packages/util/out/BitField.d.ts:81

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

packages/util/out/BitField.d.ts:33

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

packages/util/out/BitField.d.ts:38

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

packages/util/out/BitField.d.ts:43

***

### freeze()

> **freeze**(): `Readonly`\<[`BitField`](BitField.md)\<`S`, `N`\>\>

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`BitField`](BitField.md)\<`S`, `N`\>\>

#### Defined in

packages/util/out/BitField.d.ts:47

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

packages/util/out/BitField.d.ts:52

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

packages/util/out/BitField.d.ts:57

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

packages/util/out/BitField.d.ts:63

***

### serialize()

> **serialize**(): `Record`\<`S`, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`S`, `boolean`\>

#### Defined in

packages/util/out/BitField.d.ts:68

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

packages/util/out/BitField.d.ts:74

***

### toArray()

> **toArray**(): `S`[]

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

#### Defined in

packages/util/out/BitField.d.ts:78

***

### toJSON()

> **toJSON**(): `string` \| `N` & `number`

#### Returns

`string` \| `N` & `number`

#### Defined in

packages/util/out/BitField.d.ts:79

***

### valueOf()

> **valueOf**(): `N`

#### Returns

`N`

#### Defined in

packages/util/out/BitField.d.ts:80

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

packages/util/out/BitField.d.ts:86
