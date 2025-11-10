[**Documentation**](../../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / DiscloudConfigType

# Type Alias: DiscloudConfigType\<T, V\>

> **DiscloudConfigType**\<`T`, `V`\> = `T` *extends* `"bot"` ? `DiscloudConfigBot`\<`V`\> : `T` *extends* `"site"` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

Defined in: [packages/api-types/payload/v2/DiscloudConfig.ts:91](https://github.com/discloud/discloud.app/blob/ef5a53ad8a6f91adbc134ed77dfe720d80e4b29f/packages/api-types/payload/v2/DiscloudConfig.ts#L91)

## Type Parameters

### T

`T` *extends* [`AppTypes`](AppTypes.md) = [`AppTypes`](AppTypes.md)

### V

`V` *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
