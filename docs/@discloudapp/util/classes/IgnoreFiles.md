[**@discloudapp/util**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / IgnoreFiles

# Class: IgnoreFiles

Defined in: [packages/util/src/IgnoreFiles.ts:26](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L26)

## Constructors

### new IgnoreFiles()

> **new IgnoreFiles**(`options`): [`IgnoreFiles`](IgnoreFiles.md)

Defined in: [packages/util/src/IgnoreFiles.ts:32](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L32)

#### Parameters

##### options

[`IgnoreFilesOptions`](../interfaces/IgnoreFilesOptions.md)

#### Returns

[`IgnoreFiles`](IgnoreFiles.md)

## Properties

### fileName

> `readonly` **fileName**: `string`

Defined in: [packages/util/src/IgnoreFiles.ts:27](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L27)

***

### filesIgnore

> `readonly` **filesIgnore**: `Set`\<`string`\>

Defined in: [packages/util/src/IgnoreFiles.ts:28](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L28)

***

### list

> `readonly` **list**: `string`[] = `allBlockedFiles`

Defined in: [packages/util/src/IgnoreFiles.ts:29](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L29)

***

### paths

> `readonly` **paths**: `Set`\<`string`\>

Defined in: [packages/util/src/IgnoreFiles.ts:30](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L30)

## Methods

### processIgnoreFiles()

> **processIgnoreFiles**(`files`): `string`[]

Defined in: [packages/util/src/IgnoreFiles.ts:103](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L103)

#### Parameters

##### files

`Set`\<`string`\> = `...`

#### Returns

`string`[]

***

### findIgnoreFiles()

> `static` **findIgnoreFiles**(`fileName`, `paths`, `ignore`): `Set`\<`string`\>

Defined in: [packages/util/src/IgnoreFiles.ts:56](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L56)

#### Parameters

##### fileName

`string`

##### paths

`Set`\<`string`\>

##### ignore

`string`[]

#### Returns

`Set`\<`string`\>

***

### normalizeIgnore()

> `static` **normalizeIgnore**(`ignore`, `path`): `string`

Defined in: [packages/util/src/IgnoreFiles.ts:70](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L70)

#### Parameters

##### ignore

`string`

##### path

`string` = `"**"`

#### Returns

`string`

***

### normalizePath()

> `static` **normalizePath**(`path`): `string`

Defined in: [packages/util/src/IgnoreFiles.ts:74](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L74)

#### Parameters

##### path

`string`

#### Returns

`string`

***

### normalizePaths()

> `static` **normalizePaths**(`paths`): `string`[]

Defined in: [packages/util/src/IgnoreFiles.ts:78](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L78)

#### Parameters

##### paths

`string`[]

#### Returns

`string`[]

***

### processIgnoreFile()

> `static` **processIgnoreFile**(`file`): `string`[]

Defined in: [packages/util/src/IgnoreFiles.ts:86](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/util/src/IgnoreFiles.ts#L86)

#### Parameters

##### file

`string`

#### Returns

`string`[]
