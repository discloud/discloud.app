[**@discloudapp/api-types**](../README.md) • **Docs**

***

[Documentation](../../../packages.md) / [@discloudapp/api-types](../README.md) / DiscloudConfigType

# Type Alias: DiscloudConfigType\<T, V\>

> **DiscloudConfigType**\<`T`, `V`\>: `T` *extends* `"bot"` ? `DiscloudConfigBot`\<`V`\> : `T` *extends* `"site"` ? `DiscloudConfigSite`\<`V`\> : `BaseDiscloudConfig`\<`V`\>

## Type Parameters

• **T** *extends* [`AppTypes`](AppTypes.md) = [`AppTypes`](AppTypes.md)

• **V** *extends* [`AppLanguages`](AppLanguages.md) = [`AppLanguages`](AppLanguages.md)

## Defined in

[payload/v2/DiscloudConfig.ts:107](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/payload/v2/DiscloudConfig.ts#L107)
