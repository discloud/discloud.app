[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / fsGlobIterate

# Function: fsGlobIterate()

## Call Signature

> **fsGlobIterate**(`pattern`, `options?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`\>

Defined in: [packages/util/src/glob/fsGlob.ts:16](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/glob/fsGlob.ts#L16)

### Parameters

#### pattern

`string` \| `string`[]

#### options?

[`FSGlobOptionsWithoutFileTypes`](../interfaces/FSGlobOptionsWithoutFileTypes.md)

### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string`\>

## Call Signature

> **fsGlobIterate**(`pattern`, `options?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`Dirent`\<`string`\>\>

Defined in: [packages/util/src/glob/fsGlob.ts:17](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/glob/fsGlob.ts#L17)

### Parameters

#### pattern

`string` \| `string`[]

#### options?

[`FSGlobOptionsWithFileTypes`](../interfaces/FSGlobOptionsWithFileTypes.md)

### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`Dirent`\<`string`\>\>

## Call Signature

> **fsGlobIterate**(`pattern`, `options?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string` \| `Dirent`\<`string`\>\>

Defined in: [packages/util/src/glob/fsGlob.ts:18](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/glob/fsGlob.ts#L18)

### Parameters

#### pattern

`string` \| `string`[]

#### options?

`_FSGlobOptions`

### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<`string` \| `Dirent`\<`string`\>\>
