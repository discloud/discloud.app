[**discloud.app**](../README.md) • **Docs**

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / Routes

# Class: `abstract` Routes

## Constructors

### new Routes()

> **new Routes**(): [`Routes`](Routes.md)

#### Returns

[`Routes`](Routes.md)

## Properties

### app()

> `static` **app**: \<`appID`\>(`appID`) => \`/app/$\{appID\}\` = `App.app`

- GET - `/app/{appID}`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:9](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L9)

***

### appApt()

> `static` **appApt**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/apt\` = `App.apt`

- PUT - `/app/{appID}/apt`
- DELETE - `/app/{appID}/apt`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/apt\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:10](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L10)

***

### appBackup()

> `static` **appBackup**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/backup\` = `App.backup`

- GET - `/app/{appID}/backup`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/backup\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:11](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L11)

***

### appCommit()

> `static` **appCommit**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/commit\` = `App.commit`

- PUT - `/app/{appID}/commit`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/commit\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:12](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L12)

***

### appConsole()

> `static` **appConsole**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/console\` = `App.console`

- PUT - `/app/{appID}/console`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/console\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:13](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L13)

***

### appDelete()

> `static` **appDelete**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/delete\` = `App.delete`

- DELETE - `/app/{appID}/delete`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/delete\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:14](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L14)

***

### appLogs()

> `static` **appLogs**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/logs\` = `App.logs`

- GET - `/app/{appID}/logs`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/logs\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:15](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L15)

***

### appProfile()

> `static` **appProfile**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/profile\` = `App.profile`

- PUT - `/app/{appID}/profile`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/profile\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:16](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L16)

***

### appRam()

> `static` **appRam**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/ram\` = `App.ram`

- PUT - `/app/{appID}/ram`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/ram\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:17](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L17)

***

### appRestart()

> `static` **appRestart**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/restart\` = `App.restart`

- PUT - `/app/{appID}/restart`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/restart\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:18](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L18)

***

### appStart()

> `static` **appStart**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/start\` = `App.start`

- PUT - `/app/{appID}/start`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/start\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:19](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L19)

***

### appStatus()

> `static` **appStatus**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/status\` = `App.status`

- GET - `/app/{appID}/status`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/status\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:20](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L20)

***

### appStop()

> `static` **appStop**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/stop\` = `App.stop`

- PUT - `/app/{appID}/stop`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/stop\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:21](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L21)

***

### appTeam()

> `static` **appTeam**: \<`appID`\>(`appID`) => \`/app/$\{appID\}/team\`\<`appID`, `modID`\>(`appID`, `modID`) => \`/app/$\{appID\}/team/$\{modID\}\` = `App.team`

- GET - `/app/{appID}/team`
- POST - `/app/{appID}/team`
- PUT - `/app/{appID}/team`
- DELETE - `/app/{appID}/team/{modID}`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/app/$\{appID\}/team\`

#### Type Parameters

• **appID** *extends* `string`

• **modID** *extends* `string`

#### Parameters

• **appID**: `appID`

• **modID**: `modID`

#### Returns

\`/app/$\{appID\}/team/$\{modID\}\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:22](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L22)

***

### locale()

> `static` **locale**: \<`locale`\>(`locale`) => \`/locale/$\{locale\}\` = `Locale.locale`

- PUT - `/locale/{locale}`

#### Type Parameters

• **locale** *extends* `string`

#### Parameters

• **locale**: `locale`

#### Returns

\`/locale/$\{locale\}\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:25](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L25)

***

### team()

> `static` **team**: () => `"/team"` = `Team.team`

- GET - `/team`

#### Returns

`"/team"`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:28](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L28)

***

### teamBackup()

> `static` **teamBackup**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/backup\` = `Team.backup`

- GET - `/app/{appID}/backup`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/backup\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:29](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L29)

***

### teamCommit()

> `static` **teamCommit**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/commit\` = `Team.commit`

- PUT - `/app/{appID}/commit`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/commit\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:30](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L30)

***

### teamLogs()

> `static` **teamLogs**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/logs\` = `Team.logs`

- GET - `/team/{appID}/logs`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/logs\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:31](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L31)

***

### teamRam()

> `static` **teamRam**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/ram\` = `Team.ram`

- PUT - `/team/{appID}/ram`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/ram\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:32](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L32)

***

### teamRestart()

> `static` **teamRestart**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/restart\` = `Team.restart`

- PUT - `/app/{appID}/restart`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/restart\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:33](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L33)

***

### teamStart()

> `static` **teamStart**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/start\` = `Team.start`

- PUT - `/app/{appID}/start`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/start\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:34](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L34)

***

### teamStatus()

> `static` **teamStatus**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/status\` = `Team.status`

- PUT - `/app/{appID}/status`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/status\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:35](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L35)

***

### teamStop()

> `static` **teamStop**: \<`appID`\>(`appID`) => \`/team/$\{appID\}/stop\` = `Team.stop`

- PUT - `/app/{appID}/stop`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

• **appID**: `appID`

#### Returns

\`/team/$\{appID\}/stop\`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:36](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L36)

***

### upload()

> `static` **upload**: () => `"/upload"` = `Upload.upload`

- POST - `/upload`

#### Returns

`"/upload"`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:39](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L39)

***

### user()

> `static` **user**: () => `"/user"` = `User.user`

- GET - `/user`

#### Returns

`"/user"`

#### Defined in

[packages/api-types/rest/v2/routes/index.ts:42](https://github.com/discloud/discloud.app/blob/e957c12968777c01a56e127121040f7eaaf9b803/packages/api-types/rest/v2/routes/index.ts#L42)
