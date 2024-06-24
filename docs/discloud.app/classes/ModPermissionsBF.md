[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / ModPermissionsBF

# Class: ModPermissionsBF

Data structure that makes it easy to interact with a bitfield.

## Extends

- [`BitField`](BitField.md)\<[`ModPermissionsString`](../type-aliases/ModPermissionsString.md), `number`\>

## Constructors

### new ModPermissionsBF()

> **new ModPermissionsBF**(...`bits`): [`ModPermissionsBF`](ModPermissionsBF.md)

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

#### Returns

[`ModPermissionsBF`](ModPermissionsBF.md)

#### Inherited from

[`BitField`](BitField.md).[`constructor`](BitField.md#constructors)

#### Defined in

packages/util/out/BitField.d.ts:27

## Properties

### bitField

> **bitField**: `number`

Bitfield of the packed bits

#### Inherited from

[`BitField`](BitField.md).[`bitField`](BitField.md#bitfield)

#### Defined in

packages/util/out/BitField.d.ts:15

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>

#### Inherited from

`BitField.constructor`

#### Defined in

packages/util/out/BitField.d.ts:11

***

### All

> `static` **All**: [`ModPermissionsBF`](ModPermissionsBF.md)

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:27

***

### DefaultBit

> `static` **DefaultBit**: `number`

#### Overrides

[`BitField`](BitField.md).[`DefaultBit`](BitField.md#defaultbit)

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:16

***

### Flags

> `static` **Flags**: `object`

Numeric bitfield flags.
Defined in extension classes

#### backup\_app

> `readonly` **backup\_app**: `number`

#### commit\_app

> `readonly` **commit\_app**: `number`

#### edit\_ram

> `readonly` **edit\_ram**: `number`

#### logs\_app

> `readonly` **logs\_app**: `number`

#### restart\_app

> `readonly` **restart\_app**: `number`

#### start\_app

> `readonly` **start\_app**: `number`

#### status\_app

> `readonly` **status\_app**: `number`

#### stop\_app

> `readonly` **stop\_app**: `number`

#### Overrides

[`BitField`](BitField.md).[`Flags`](BitField.md#flags)

#### Defined in

packages/util/out/ModPermissionsBF.d.ts:17

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `void`, `unknown`\>

#### Returns

`Generator`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `void`, `unknown`\>

#### Inherited from

[`BitField`](BitField.md).[`[iterator]`](BitField.md#%5Biterator%5D)

#### Defined in

packages/util/out/BitField.d.ts:81

***

### add()

> **add**(...`bits`): `this`

Adds bits to these ones.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bits to add

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Inherited from

[`BitField`](BitField.md).[`add`](BitField.md#add)

#### Defined in

packages/util/out/BitField.d.ts:33

***

### any()

> **any**(...`bits`): `boolean`

Checks whether the bitfield has a bit, or any of multiple bits.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`any`](BitField.md#any)

#### Defined in

packages/util/out/BitField.d.ts:38

***

### equals()

> **equals**(...`bits`): `boolean`

Checks if this bitfield equals another

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`equals`](BitField.md#equals)

#### Defined in

packages/util/out/BitField.d.ts:43

***

### freeze()

> **freeze**(): `Readonly`\<[`ModPermissionsBF`](ModPermissionsBF.md)\>

Freezes these bits, making them immutable.

#### Returns

`Readonly`\<[`ModPermissionsBF`](ModPermissionsBF.md)\>

#### Inherited from

[`BitField`](BitField.md).[`freeze`](BitField.md#freeze)

#### Defined in

packages/util/out/BitField.d.ts:47

***

### has()

> **has**(...`bits`): `boolean`

Checks whether the bitfield has a bit, or multiple bits.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`has`](BitField.md#has)

#### Defined in

packages/util/out/BitField.d.ts:52

***

### missing()

> **missing**(...`bits`): (`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

Gets all given bits that are missing from the bitfield.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bit(s) to check for

#### Returns

(`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

#### Inherited from

[`BitField`](BitField.md).[`missing`](BitField.md#missing)

#### Defined in

packages/util/out/BitField.d.ts:57

***

### remove()

> **remove**(...`bits`): `this`

Removes bits from these.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

Bits to remove

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Inherited from

[`BitField`](BitField.md).[`remove`](BitField.md#remove)

#### Defined in

packages/util/out/BitField.d.ts:63

***

### serialize()

> **serialize**(): `Record`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `boolean`\>

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

`Record`\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `boolean`\>

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

#### Defined in

packages/util/out/BitField.d.ts:68

***

### set()

> **set**(...`bits`): `this`

Replace the bits with these.

#### Parameters

• ...**bits**: [`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

bits to set

#### Returns

`this`

These bits or new BitField if the instance is frozen.

#### Inherited from

[`BitField`](BitField.md).[`set`](BitField.md#set)

#### Defined in

packages/util/out/BitField.d.ts:74

***

### toArray()

> **toArray**(): (`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

Gets an Array of bitfield names based on the bits available.

#### Returns

(`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

#### Inherited from

[`BitField`](BitField.md).[`toArray`](BitField.md#toarray)

#### Defined in

packages/util/out/BitField.d.ts:78

***

### toJSON()

> **toJSON**(): `string` \| `number`

#### Returns

`string` \| `number`

#### Inherited from

[`BitField`](BitField.md).[`toJSON`](BitField.md#tojson)

#### Defined in

packages/util/out/BitField.d.ts:79

***

### valueOf()

> **valueOf**(): `number`

#### Returns

`number`

#### Inherited from

[`BitField`](BitField.md).[`valueOf`](BitField.md#valueof)

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

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)

#### Defined in

packages/util/out/BitField.d.ts:86
