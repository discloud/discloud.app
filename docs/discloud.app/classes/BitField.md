[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / BitField

# Class: `abstract` BitField\<S, N\>

Defined in: packages/util/out/BitField.d.ts:10

Data structure that makes it easy to interact with a bitfield.

## Extended by

- [`ModPermissionsBF`](ModPermissionsBF.md)

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`

## Constructors

### new BitField()

> **new BitField**\<`S`, `N`\>(...`bits`): [`BitField`](BitField.md)\<`S`, `N`\>

Defined in: packages/util/out/BitField.d.ts:27

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

[`BitField`](BitField.md)\<`S`, `N`\>

## Properties

### bitField

> **bitField**: `N`

Defined in: packages/util/out/BitField.d.ts:15

Bitfield of the packed bits

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`S`, `N`\>

Defined in: packages/util/out/BitField.d.ts:11

***

### DefaultBit

> `readonly` `static` **DefaultBit**: `number` \| `bigint`

Defined in: packages/util/out/BitField.d.ts:21

***

### Flags

> `readonly` `static` **Flags**: `EnumLike`\<`unknown`, `number` \| `bigint`\>

Defined in: packages/util/out/BitField.d.ts:26

Numeric bitfield flags.
Defined in extension classes

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`S`, `void`, `unknown`\>

Defined in: packages/util/out/BitField.d.ts:82

#### Returns

`Generator`\<`S`, `void`, `unknown`\>

***

### add()

> **add**(...`bits`): `this`

Defined in: packages/util/out/BitField.d.ts:33

Adds bits to these ones.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bits to add

#### Returns

`this`

These bits or new BitField if the instance is frozen.

***

### any()

> **any**(...`bits`): `boolean`

Defined in: packages/util/out/BitField.d.ts:38

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`boolean`

***

### equals()

> **equals**(...`bits`): `boolean`

Defined in: packages/util/out/BitField.d.ts:43

Checks if this bitfield equals another

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`boolean`

***

### freeze()

> **freeze**(): `Readonly`\<[`BitField`](BitField.md)\<`S`, `N`\>\>

Defined in: packages/util/out/BitField.d.ts:47

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`BitField`](BitField.md)\<`S`, `N`\>\>

***

### has()

> **has**(...`bits`): `boolean`

Defined in: packages/util/out/BitField.d.ts:52

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`boolean`

***

### missing()

> **missing**(...`bits`): `S`[]

Defined in: packages/util/out/BitField.d.ts:57

Gets all given bits that are missing from the bitfield.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`S`[]

***

### remove()

> **remove**(...`bits`): `this`

Defined in: packages/util/out/BitField.d.ts:63

Removes bits from these.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bits to remove

#### Returns

`this`

These bits or new BitField if the instance is frozen.

***

### serialize()

> **serialize**(): `Record`\<`S`, `boolean`\>

Defined in: packages/util/out/BitField.d.ts:68

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`S`, `boolean`\>

***

### set()

> **set**(...`bits`): `this`

Defined in: packages/util/out/BitField.d.ts:74

Replace the bits with these.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

bits to set

#### Returns

`this`

These bits or new BitField if the instance is frozen.

***

### toArray()

> **toArray**(): `S`[]

Defined in: packages/util/out/BitField.d.ts:78

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

***

### toJSON()

> **toJSON**(): `string` \| `N` & `number`

Defined in: packages/util/out/BitField.d.ts:79

#### Returns

`string` \| `N` & `number`

***

### toString()

> **toString**(): `string`

Defined in: packages/util/out/BitField.d.ts:80

#### Returns

`string`

***

### valueOf()

> **valueOf**(): `N`

Defined in: packages/util/out/BitField.d.ts:81

#### Returns

`N`

***

### resolve()

> `static` **resolve**\<`S`, `N`\>(`bit`): `N`

Defined in: packages/util/out/BitField.d.ts:87

Resolves bitfields to their numeric form.

#### Type Parameters

• **S** *extends* `string`

• **N** *extends* `number` \| `bigint`

#### Parameters

##### bit

[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>

bit(s) to resolve

#### Returns

`N`
