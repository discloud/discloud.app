[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / DiscloudConfigType

# Type Alias: DiscloudConfigType\<T, V\>

> **DiscloudConfigType**\<`T`, `V`\> = `T` *extends* `"bot"` ? `DiscloudConfigBot`\<`V`\> : `T` *extends* `"site"` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

Defined in: [payload/v2/DiscloudConfig.ts:96](https://github.com/discloud/discloud.app/blob/ff86a7704bdfa4b9011141068419f0a48ab50b8b/packages/api-types/payload/v2/DiscloudConfig.ts#L96)

## Type Parameters

### T

`T` *extends* [`AppTypes`](AppTypes.md) = [`AppTypes`](AppTypes.md)

### V

`V` *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
