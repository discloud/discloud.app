[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ModPermissionsBF

# Class: ModPermissionsBF

Defined in: packages/util/out/ModPermissionsBF.d.ts:14

Data structure that makes it easy to interact with a bitfield.

## Extends

- [`BitField`](BitField.md)\<[`ModPermissionsString`](../type-aliases/ModPermissionsString.md), `number`\>

## Constructors

### new ModPermissionsBF()

> **new ModPermissionsBF**(...`bits`): [`ModPermissionsBF`](ModPermissionsBF.md)

Defined in: packages/util/out/BitField.d.ts:27

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

#### Returns

[`ModPermissionsBF`](ModPermissionsBF.md)

#### Inherited from

[`BitField`](BitField.md).[`constructor`](BitField.md#constructors)

## Properties

### bitField

> **bitField**: `number`

Defined in: packages/util/out/BitField.d.ts:15

Bitfield of the packed bits

#### Inherited from

[`BitField`](BitField.md).[`bitField`](BitField.md#bitfield)

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>

Defined in: packages/util/out/BitField.d.ts:11

#### Inherited from

`BitField.constructor`

***

### All

> `readonly` `static` **All**: [`ModPermissionsBF`](ModPermissionsBF.md)

Defined in: packages/util/out/ModPermissionsBF.d.ts:17

***

### DefaultBit

> `readonly` `static` **DefaultBit**: `0` = `0`

Defined in: packages/util/out/ModPermissionsBF.d.ts:15

#### Overrides

[`BitField`](BitField.md).[`DefaultBit`](BitField.md#defaultbit)

***

### Flags

> `readonly` `static` **Flags**: *typeof* [`ModPermissionsFlags`](../enumerations/ModPermissionsFlags.md)

Defined in: packages/util/out/ModPermissionsBF.d.ts:16

Numeric bitfield flags.
Defined in extension classes

#### Overrides

[`BitField`](BitField.md).[`Flags`](BitField.md#flags)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `void`, `unknown`\>

Defined in: packages/util/out/BitField.d.ts:82

#### Returns

`Generator`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `void`, `unknown`\>

#### Inherited from

[`BitField`](BitField.md).[`[iterator]`](BitField.md#iterator)

***

### add()

> **add**(...`bits`): `this`

Defined in: packages/util/out/BitField.d.ts:33

Adds bits to these ones.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bits to add

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Inherited from

[`BitField`](BitField.md).[`add`](BitField.md#add)

***

### any()

> **any**(...`bits`): `boolean`

Defined in: packages/util/out/BitField.d.ts:38

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`any`](BitField.md#any)

***

### equals()

> **equals**(...`bits`): `boolean`

Defined in: packages/util/out/BitField.d.ts:43

Checks if this bitfield equals another

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`equals`](BitField.md#equals)

***

### freeze()

> **freeze**(): `Readonly`\<[`ModPermissionsBF`](ModPermissionsBF.md)\>

Defined in: packages/util/out/BitField.d.ts:47

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`ModPermissionsBF`](ModPermissionsBF.md)\>

#### Inherited from

[`BitField`](BitField.md).[`freeze`](BitField.md#freeze)

***

### has()

> **has**(...`bits`): `boolean`

Defined in: packages/util/out/BitField.d.ts:52

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`has`](BitField.md#has)

***

### missing()

> **missing**(...`bits`): (`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

Defined in: packages/util/out/BitField.d.ts:57

Gets all given bits that are missing from the bitfield.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

(`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

#### Inherited from

[`BitField`](BitField.md).[`missing`](BitField.md#missing)

***

### remove()

> **remove**(...`bits`): `this`

Defined in: packages/util/out/BitField.d.ts:63

Removes bits from these.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bits to remove

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Inherited from

[`BitField`](BitField.md).[`remove`](BitField.md#remove)

***

### serialize()

> **serialize**(): `Record`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `boolean`\>

Defined in: packages/util/out/BitField.d.ts:68

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `boolean`\>

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

***

### set()

> **set**(...`bits`): `this`

Defined in: packages/util/out/BitField.d.ts:74

Replace the bits with these.

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

bits to set

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Inherited from

[`BitField`](BitField.md).[`set`](BitField.md#set)

***

### toArray()

> **toArray**(): (`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

Defined in: packages/util/out/BitField.d.ts:78

Gets an Array of bitfield names based on the bits available.

#### Returns

(`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

#### Inherited from

[`BitField`](BitField.md).[`toArray`](BitField.md#toarray)

***

### toJSON()

> **toJSON**(): `string` \| `number`

Defined in: packages/util/out/BitField.d.ts:79

#### Returns

`string` \| `number`

#### Inherited from

[`BitField`](BitField.md).[`toJSON`](BitField.md#tojson)

***

### toString()

> **toString**(): `string`

Defined in: packages/util/out/BitField.d.ts:80

#### Returns

`string`

#### Inherited from

[`BitField`](BitField.md).[`toString`](BitField.md#tostring)

***

### valueOf()

> **valueOf**(): `number`

Defined in: packages/util/out/BitField.d.ts:81

#### Returns

`number`

#### Inherited from

[`BitField`](BitField.md).[`valueOf`](BitField.md#valueof)

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

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)
