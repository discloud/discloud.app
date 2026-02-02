[**Documentation**](../../../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / DiscloudConfigType

# Type Alias: DiscloudConfigType\<T, V\>

> **DiscloudConfigType**\<`T`, `V`\> = `T` *extends* `"bot"` ? `DiscloudConfigBot`\<`V`\> : `T` *extends* `"site"` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

Defined in: [payload/v2/DiscloudConfig.ts:91](https://github.com/discloud/discloud.app/blob/5849f1b1f34ceb1cb07b41e95e2ec257b46b9f4b/packages/api-types/payload/v2/DiscloudConfig.ts#L91)

## Type Parameters

### T

`T` *extends* [`AppTypes`](AppTypes.md) = [`AppTypes`](AppTypes.md)

### V

`V` *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
