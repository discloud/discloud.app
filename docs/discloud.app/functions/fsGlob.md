[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / fsGlob

# Function: fsGlob()

## Call Signature

> **fsGlob**(`pattern`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: packages/util/dist/glob/fsGlob.d.ts:3

### Parameters

#### pattern

`string` | `string`[]

#### options?

[`FSGlobOptionsWithoutFileTypes`](../interfaces/FSGlobOptionsWithoutFileTypes.md)

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

## Call Signature

> **fsGlob**(`pattern`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Dirent`\<`string`\>[]\>

Defined in: packages/util/dist/glob/fsGlob.d.ts:4

### Parameters

#### pattern

`string` | `string`[]

#### options?

[`FSGlobOptionsWithFileTypes`](../interfaces/FSGlobOptionsWithFileTypes.md)

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Dirent`\<`string`\>[]\>

## Call Signature

> **fsGlob**(`pattern`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<(`string` \| `Dirent`\<`string`\>)[]\>

Defined in: packages/util/dist/glob/fsGlob.d.ts:5

### Parameters

#### pattern

`string` | `string`[]

#### options?

`_FSGlobOptions`

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<(`string` \| `Dirent`\<`string`\>)[]\>
