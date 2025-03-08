[**@discloudapp/api-types**](../README.md)

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / DiscloudConfigType

# Type Alias: DiscloudConfigType\<T, V\>

> **DiscloudConfigType**\<`T`, `V`\>: `T` *extends* `"bot"` ? `DiscloudConfigBot`\<`V`\> : `T` *extends* `"site"` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

Defined in: [payload/v2/DiscloudConfig.ts:98](https://github.com/discloud/discloud.app/blob/1458affc9a022eb2fc5fe37e7b3b002130b2fdad/packages/api-types/payload/v2/DiscloudConfig.ts#L98)

## Type Parameters

• **T** *extends* [`AppTypes`](AppTypes.md) = [`AppTypes`](AppTypes.md)

• **V** *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)
