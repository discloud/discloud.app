[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitField

# Class: `abstract` BitField\<S, N\>

Defined in: [packages/util/src/BitField.ts:11](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L11)

Data structure that makes it easy to interact with a bitfield.

## Extended by

- [`ModPermissionsBF`](ModPermissionsBF.md)

## Type Parameters

### S

`S` *extends* `string`

### N

`N` *extends* `bigint` \| `number`

## Constructors

### Constructor

> **new BitField**\<`S`, `N`\>(...`bits`): `BitField`\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:31](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L31)

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

`BitField`\<`S`, `N`\>

## Properties

### bitField

> **bitField**: `N`

Defined in: [packages/util/src/BitField.ts:16](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L16)

Bitfield of the packed bits

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:12](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L12)

***

### DefaultBit

> `readonly` `static` **DefaultBit**: `number` \| `bigint` = `0`

Defined in: [packages/util/src/BitField.ts:23](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L23)

***

### Flags

> `readonly` `static` **Flags**: `EnumLike`\<`unknown`, `bigint` \| `number`\> = `{}`

Defined in: [packages/util/src/BitField.ts:29](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L29)

Numeric bitfield flags.
Defined in extension classes

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`S`, `void`, `unknown`\>

Defined in: [packages/util/src/BitField.ts:158](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L158)

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`S`, `void`, `unknown`\>

***

### add()

> **add**(...`bits`): `this`

Defined in: [packages/util/src/BitField.ts:40](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L40)

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

Defined in: [packages/util/src/BitField.ts:57](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L57)

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

Defined in: [packages/util/src/BitField.ts:65](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L65)

Checks if this bitfield equals another

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

Bit(s) to check for

#### Returns

`boolean`

***

### freeze()

> **freeze**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

Defined in: [packages/util/src/BitField.ts:72](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L72)

Freezes these bits, making them immutable.

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

***

### has()

> **has**(...`bits`): `boolean`

Defined in: [packages/util/src/BitField.ts:80](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L80)

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

Defined in: [packages/util/src/BitField.ts:89](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L89)

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

Defined in: [packages/util/src/BitField.ts:98](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L98)

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

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`S`, `boolean`\>

Defined in: [packages/util/src/BitField.ts:115](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L115)

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`S`, `boolean`\>

***

### set()

> **set**(...`bits`): `this`

Defined in: [packages/util/src/BitField.ts:129](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L129)

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

Defined in: [packages/util/src/BitField.ts:141](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L141)

Gets an [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of bitfield names based on the bits available.

#### Returns

`S`[]

***

### toJSON()

> **toJSON**(): `N` *extends* `number` ? `N`\<`N`\> : `` `${N}` ``

Defined in: [packages/util/src/BitField.ts:146](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L146)

#### Returns

`N` *extends* `number` ? `N`\<`N`\> : `` `${N}` ``

***

### toString()

> **toString**(): `` `${N}` ``

Defined in: [packages/util/src/BitField.ts:150](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L150)

#### Returns

`` `${N}` ``

***

### valueOf()

> **valueOf**(): `N`

Defined in: [packages/util/src/BitField.ts:154](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L154)

#### Returns

`N`

***

### resolve()

> `static` **resolve**\<`S`, `N`\>(`bit`): `N`

Defined in: [packages/util/src/BitField.ts:169](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/util/src/BitField.ts#L169)

Resolves bitfields to their numeric form.

#### Type Parameters

##### S

`S` *extends* `string`

##### N

`N` *extends* `number` \| `bigint`

#### Parameters

##### bit

[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>

bit(s) to resolve

#### Returns

`N`
