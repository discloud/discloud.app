[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / IgnoreFiles

# Class: IgnoreFiles

Defined in: packages/util/dist/IgnoreFiles.d.ts:17

## Constructors

### Constructor

> **new IgnoreFiles**(`options`): `IgnoreFiles`

Defined in: packages/util/dist/IgnoreFiles.d.ts:22

#### Parameters

##### options

[`IgnoreFilesOptions`](../interfaces/IgnoreFilesOptions.md)

#### Returns

`IgnoreFiles`

## Properties

### fileName

> `readonly` **fileName**: `string`

Defined in: packages/util/dist/IgnoreFiles.d.ts:18

***

### filesIgnore

> `readonly` **filesIgnore**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: packages/util/dist/IgnoreFiles.d.ts:19

***

### list

> `readonly` **list**: `string`[]

Defined in: packages/util/dist/IgnoreFiles.d.ts:20

***

### paths

> `readonly` **paths**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: packages/util/dist/IgnoreFiles.d.ts:21

## Methods

### processIgnoreFiles()

> **processIgnoreFiles**(`files?`): `string`[]

Defined in: packages/util/dist/IgnoreFiles.d.ts:28

#### Parameters

##### files?

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

#### Returns

`string`[]

***

### findIgnoreFiles()

> `static` **findIgnoreFiles**(`fileName`, `paths`, `ignore`): [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

Defined in: packages/util/dist/IgnoreFiles.d.ts:23

#### Parameters

##### fileName

`string`

##### paths

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

##### ignore

`string`[]

#### Returns

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)\<`string`\>

***

### normalizeIgnore()

> `static` **normalizeIgnore**(`ignore`, `path?`): `string`

Defined in: packages/util/dist/IgnoreFiles.d.ts:24

#### Parameters

##### ignore

`string`

##### path?

`string`

#### Returns

`string`

***

### normalizePath()

> `static` **normalizePath**(`path`): `string`

Defined in: packages/util/dist/IgnoreFiles.d.ts:25

#### Parameters

##### path

`string`

#### Returns

`string`

***

### normalizePaths()

> `static` **normalizePaths**(`paths`): `string`[]

Defined in: packages/util/dist/IgnoreFiles.d.ts:26

#### Parameters

##### paths

`string`[]

#### Returns

`string`[]

***

### processIgnoreFile()

> `static` **processIgnoreFile**(`file`): `string`[]

Defined in: packages/util/dist/IgnoreFiles.d.ts:27

#### Parameters

##### file

`string`

#### Returns

`string`[]
