[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / FSGlobOptionsWithoutFileTypes

# Interface: FSGlobOptionsWithoutFileTypes

Defined in: packages/util/dist/glob/types.d.ts:21

## Extends

- `_FSGlobOptions`

## Properties

### cwd?

> `optional` **cwd**: `string`

Defined in: packages/util/dist/glob/types.d.ts:6

Current working directory.

#### Default

```ts
process.cwd()
```

#### Inherited from

`_FSGlobOptions.cwd`

***

### withDirectories?

> `optional` **withDirectories**: `boolean`

Defined in: packages/util/dist/glob/types.d.ts:10

#### Default

```ts
false
```

#### Inherited from

`_FSGlobOptions.withDirectories`

***

### withFileTypes?

> `optional` **withFileTypes**: `false`

Defined in: packages/util/dist/glob/types.d.ts:22

`true` if the glob should return paths as `Dirent`s, `false` otherwise.

#### Default

```ts
false
```

#### Overrides

`_FSGlobOptions.withFileTypes`
