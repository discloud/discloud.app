[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / IgnoreFiles

# Class: IgnoreFiles

## Constructors

### new IgnoreFiles()

> **new IgnoreFiles**(`options`): [`IgnoreFiles`](IgnoreFiles.md)

#### Parameters

• **options**: [`IgnoreFilesOptions`](../interfaces/IgnoreFilesOptions.md)

#### Returns

[`IgnoreFiles`](IgnoreFiles.md)

#### Defined in

packages/util/out/IgnoreFiles.d.ts:22

## Properties

### fileName

> `readonly` **fileName**: `string`

#### Defined in

packages/util/out/IgnoreFiles.d.ts:18

***

### filesIgnore

> `readonly` **filesIgnore**: `Set`\<`string`\>

#### Defined in

packages/util/out/IgnoreFiles.d.ts:19

***

### list

> `readonly` **list**: `string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:20

***

### paths

> `readonly` **paths**: `Set`\<`string`\>

#### Defined in

packages/util/out/IgnoreFiles.d.ts:21

## Methods

### processIgnoreFiles()

> **processIgnoreFiles**(`files`?): `string`[]

#### Parameters

• **files?**: `Set`\<`string`\>

#### Returns

`string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:28

***

### findIgnoreFiles()

> `static` **findIgnoreFiles**(`fileName`, `paths`, `ignore`): `Set`\<`string`\>

#### Parameters

• **fileName**: `string`

• **paths**: `Set`\<`string`\>

• **ignore**: `string`[]

#### Returns

`Set`\<`string`\>

#### Defined in

packages/util/out/IgnoreFiles.d.ts:23

***

### normalizeIgnore()

> `static` **normalizeIgnore**(`ignore`, `path`?): `string`

#### Parameters

• **ignore**: `string`

• **path?**: `string`

#### Returns

`string`

#### Defined in

packages/util/out/IgnoreFiles.d.ts:24

***

### normalizePath()

> `static` **normalizePath**(`path`): `string`

#### Parameters

• **path**: `string`

#### Returns

`string`

#### Defined in

packages/util/out/IgnoreFiles.d.ts:25

***

### normalizePaths()

> `static` **normalizePaths**(`paths`): `string`[]

#### Parameters

• **paths**: `string`[]

#### Returns

`string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:26

***

### processIgnoreFile()

> `static` **processIgnoreFile**(`file`): `string`[]

#### Parameters

• **file**: `string`

#### Returns

`string`[]

#### Defined in

packages/util/out/IgnoreFiles.d.ts:27
