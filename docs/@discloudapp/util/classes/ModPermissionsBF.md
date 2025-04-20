[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / ModPermissionsBF

# Class: ModPermissionsBF

Defined in: [packages/util/src/ModPermissionsBF.ts:18](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/ModPermissionsBF.ts#L18)

Data structure that makes it easy to interact with a bitfield.

## Extends

- [`BitField`](BitField.md)\<[`ModPermissionsString`](../type-aliases/ModPermissionsString.md), `number`\>

## Constructors

### Constructor

> **new ModPermissionsBF**(...`bits`): `ModPermissionsBF`

Defined in: [packages/util/src/BitField.ts:31](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L31)

#### Parameters

##### bits

...[`BitFieldResolvable`](../type-aliases/BitFieldResolvable.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>[]

#### Returns

`ModPermissionsBF`

#### Inherited from

[`BitField`](BitField.md).[`constructor`](BitField.md#constructor)

## Properties

### bitField

> **bitField**: `number`

Defined in: [packages/util/src/BitField.ts:16](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L16)

Bitfield of the packed bits

#### Inherited from

[`BitField`](BitField.md).[`bitField`](BitField.md#bitfield)

***

### constructor

> **constructor**: [`BitFieldConstructor`](../interfaces/BitFieldConstructor.md)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `number`\>

Defined in: [packages/util/src/BitField.ts:12](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L12)

#### Inherited from

`BitField.constructor`

***

### All

> `readonly` `static` **All**: `ModPermissionsBF`

Defined in: [packages/util/src/ModPermissionsBF.ts:21](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/ModPermissionsBF.ts#L21)

***

### DefaultBit

> `readonly` `static` **DefaultBit**: `0` = `0`

Defined in: [packages/util/src/ModPermissionsBF.ts:19](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/ModPermissionsBF.ts#L19)

#### Overrides

[`BitField`](BitField.md).[`DefaultBit`](BitField.md#defaultbit)

***

### Flags

> `readonly` `static` **Flags**: *typeof* [`ModPermissionsFlags`](../enumerations/ModPermissionsFlags.md) = `ModPermissionsFlags`

Defined in: [packages/util/src/ModPermissionsBF.ts:20](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/ModPermissionsBF.ts#L20)

Numeric bitfield flags.
Defined in extension classes

#### Overrides

[`BitField`](BitField.md).[`Flags`](BitField.md#flags)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `void`, `unknown`\>

Defined in: [packages/util/src/BitField.ts:157](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L157)

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `void`, `unknown`\>

#### Inherited from

[`BitField`](BitField.md).[`[iterator]`](BitField.md#iterator)

***

### add()

> **add**(...`bits`): `this`

Defined in: [packages/util/src/BitField.ts:40](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L40)

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

Defined in: [packages/util/src/BitField.ts:57](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L57)

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

Defined in: [packages/util/src/BitField.ts:65](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L65)

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

> **freeze**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`ModPermissionsBF`\>

Defined in: [packages/util/src/BitField.ts:72](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L72)

Freezes these bits, making them immutable.

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`ModPermissionsBF`\>

#### Inherited from

[`BitField`](BitField.md).[`freeze`](BitField.md#freeze)

***

### has()

> **has**(...`bits`): `boolean`

Defined in: [packages/util/src/BitField.ts:80](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L80)

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

Defined in: [packages/util/src/BitField.ts:89](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L89)

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

Defined in: [packages/util/src/BitField.ts:98](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L98)

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

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `boolean`\>

Defined in: [packages/util/src/BitField.ts:115](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L115)

Gets an object mapping field names to a boolean indicating whether the
bit is available.

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`, `boolean`\>

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

***

### set()

> **set**(...`bits`): `this`

Defined in: [packages/util/src/BitField.ts:129](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L129)

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

Defined in: [packages/util/src/BitField.ts:141](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L141)

Gets an [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of bitfield names based on the bits available.

#### Returns

(`"backup_app"` \| `"commit_app"` \| `"edit_ram"` \| `"logs_app"` \| `"restart_app"` \| `"start_app"` \| `"status_app"` \| `"stop_app"`)[]

#### Inherited from

[`BitField`](BitField.md).[`toArray`](BitField.md#toarray)

***

### toJSON()

> **toJSON**(): `string` \| `number`

Defined in: [packages/util/src/BitField.ts:145](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L145)

#### Returns

`string` \| `number`

#### Inherited from

[`BitField`](BitField.md).[`toJSON`](BitField.md#tojson)

***

### toString()

> **toString**(): `string`

Defined in: [packages/util/src/BitField.ts:149](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L149)

#### Returns

`string`

#### Inherited from

[`BitField`](BitField.md).[`toString`](BitField.md#tostring)

***

### valueOf()

> **valueOf**(): `number`

Defined in: [packages/util/src/BitField.ts:153](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L153)

#### Returns

`number`

#### Inherited from

[`BitField`](BitField.md).[`valueOf`](BitField.md#valueof)

***

### resolve()

> `static` **resolve**\<`S`, `N`\>(`bit`): `N`

Defined in: [packages/util/src/BitField.ts:168](https://github.com/discloud/discloud.app/blob/5b4e3fe9c701f0b4f5ffa4246f463403d1e47fa1/packages/util/src/BitField.ts#L168)

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

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)
