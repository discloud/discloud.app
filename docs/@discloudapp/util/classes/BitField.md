[**@discloudapp/util**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / BitField

# Class: `abstract` BitField\<S, N\>

Defined in: [packages/util/src/BitField.ts:11](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L11)

Data structure that makes it easy to interact with a bitfield.

## Extended by

- [`ModPermissionsBF`](ModPermissionsBF.md)

## Type Parameters

• **S** *extends* `string`

• **N** *extends* `bigint` \| `number`

## Constructors

### new BitField()

> **new BitField**\<`S`, `N`\>(...`bits`): [`BitField`](BitField.md)\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:31](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L31)

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`S`, `N`\>[]

#### Returns

[`BitField`](BitField.md)\<`S`, `N`\>

## Properties

### bitField

> **bitField**: `N`

Defined in: [packages/util/src/BitField.ts:16](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L16)

Bitfield of the packed bits

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`S`, `N`\>

Defined in: [packages/util/src/BitField.ts:12](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L12)

***

### DefaultBit

> `readonly` `static` **DefaultBit**: `number` \| `bigint` = `0`

Defined in: [packages/util/src/BitField.ts:23](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L23)

***

### Flags

> `readonly` `static` **Flags**: `EnumLike`\<`unknown`, `number` \| `bigint`\> = `{}`

Defined in: [packages/util/src/BitField.ts:29](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L29)

Numeric bitfield flags.
Defined in extension classes

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`S`, `void`, `unknown`\>

Defined in: [packages/util/src/BitField.ts:157](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L157)

#### Returns

`Generator`\<`S`, `void`, `unknown`\>

***

### add()

> **add**(...`bits`): `this`

Defined in: [packages/util/src/BitField.ts:40](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L40)

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

Defined in: [packages/util/src/BitField.ts:57](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L57)

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

Defined in: [packages/util/src/BitField.ts:65](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L65)

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

Defined in: [packages/util/src/BitField.ts:72](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L72)

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`BitField`](BitField.md)\<`S`, `N`\>\>

***

### has()

> **has**(...`bits`): `boolean`

Defined in: [packages/util/src/BitField.ts:80](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L80)

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

Defined in: [packages/util/src/BitField.ts:89](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L89)

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

Defined in: [packages/util/src/BitField.ts:98](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L98)

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

Defined in: [packages/util/src/BitField.ts:115](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L115)

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`S`, `boolean`\>

***

### set()

> **set**(...`bits`): `this`

Defined in: [packages/util/src/BitField.ts:129](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L129)

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

Defined in: [packages/util/src/BitField.ts:141](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L141)

Gets an Array of bitfield names based on the bits available.

#### Returns

`S`[]

***

### toJSON()

> **toJSON**(): `string` \| `N` & `number`

Defined in: [packages/util/src/BitField.ts:145](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L145)

#### Returns

`string` \| `N` & `number`

***

### toString()

> **toString**(): `string`

Defined in: [packages/util/src/BitField.ts:149](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L149)

#### Returns

`string`

***

### valueOf()

> **valueOf**(): `N`

Defined in: [packages/util/src/BitField.ts:153](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L153)

#### Returns

`N`

***

### resolve()

> `static` **resolve**\<`S`, `N`\>(`bit`): `N`

Defined in: [packages/util/src/BitField.ts:168](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/BitField.ts#L168)

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
