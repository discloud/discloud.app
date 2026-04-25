[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/util](../README.md) / fsGlob

# Function: fsGlob()

## Call Signature

> **fsGlob**(`pattern`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/util/src/glob/fsGlob.ts:9](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/glob/fsGlob.ts#L9)

### Parameters

#### pattern

`string` \| `string`[]

#### options?

[`FSGlobOptionsWithoutFileTypes`](../interfaces/FSGlobOptionsWithoutFileTypes.md)

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

## Call Signature

> **fsGlob**(`pattern`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Dirent`\<`string`\>[]\>

Defined in: [packages/util/src/glob/fsGlob.ts:10](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/glob/fsGlob.ts#L10)

### Parameters

#### pattern

`string` \| `string`[]

#### options?

[`FSGlobOptionsWithFileTypes`](../interfaces/FSGlobOptionsWithFileTypes.md)

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Dirent`\<`string`\>[]\>

## Call Signature

> **fsGlob**(`pattern`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<(`string` \| `Dirent`\<`string`\>)[]\>

Defined in: [packages/util/src/glob/fsGlob.ts:11](https://github.com/discloud/discloud.app/blob/0972a1ca74cdc01f67360218d659dacc1fe5800d/packages/util/src/glob/fsGlob.ts#L11)

### Parameters

#### pattern

`string` \| `string`[]

#### options?

`_FSGlobOptions`

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<(`string` \| `Dirent`\<`string`\>)[]\>
