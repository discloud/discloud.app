[**discloud.app**](../README.md)

***

[Documentation](../../packages.md) / [discloud.app](../README.md) / Routes

# Class: `abstract` Routes

Defined in: [packages/api-types/rest/v2/routes/index.ts:7](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L7)

## Constructors

### new Routes()

> **new Routes**(): [`Routes`](Routes.md)

#### Returns

[`Routes`](Routes.md)

## Properties

### app()

> `static` **app**: \<`appID`\>(`appID`) => `` `/app/${appID}` `` = `App.app`

Defined in: [packages/api-types/rest/v2/routes/index.ts:9](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L9)

- GET - `/app/{appID}`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}` ``

***

### appApt()

> `static` **appApt**: \<`appID`\>(`appID`) => `` `/app/${appID}/apt` `` = `App.apt`

Defined in: [packages/api-types/rest/v2/routes/index.ts:10](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L10)

- PUT - `/app/{appID}/apt`
- DELETE - `/app/{appID}/apt`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/apt` ``

***

### appBackup()

> `static` **appBackup**: \<`appID`\>(`appID`) => `` `/app/${appID}/backup` `` = `App.backup`

Defined in: [packages/api-types/rest/v2/routes/index.ts:11](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L11)

- GET - `/app/{appID}/backup`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/backup` ``

***

### appCommit()

> `static` **appCommit**: \<`appID`\>(`appID`) => `` `/app/${appID}/commit` `` = `App.commit`

Defined in: [packages/api-types/rest/v2/routes/index.ts:12](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L12)

- PUT - `/app/{appID}/commit`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/commit` ``

***

### appConsole()

> `static` **appConsole**: \<`appID`\>(`appID`) => `` `/app/${appID}/console` `` = `App.console`

Defined in: [packages/api-types/rest/v2/routes/index.ts:13](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L13)

- PUT - `/app/{appID}/console`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/console` ``

***

### appDelete()

> `static` **appDelete**: \<`appID`\>(`appID`) => `` `/app/${appID}/delete` `` = `App.delete`

Defined in: [packages/api-types/rest/v2/routes/index.ts:14](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L14)

- DELETE - `/app/{appID}/delete`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/delete` ``

***

### appLogs()

> `static` **appLogs**: \<`appID`\>(`appID`) => `` `/app/${appID}/logs` `` = `App.logs`

Defined in: [packages/api-types/rest/v2/routes/index.ts:15](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L15)

- GET - `/app/{appID}/logs`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/logs` ``

***

### appProfile()

> `static` **appProfile**: \<`appID`\>(`appID`) => `` `/app/${appID}/profile` `` = `App.profile`

Defined in: [packages/api-types/rest/v2/routes/index.ts:16](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L16)

- PUT - `/app/{appID}/profile`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/profile` ``

***

### appRam()

> `static` **appRam**: \<`appID`\>(`appID`) => `` `/app/${appID}/ram` `` = `App.ram`

Defined in: [packages/api-types/rest/v2/routes/index.ts:17](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L17)

- PUT - `/app/{appID}/ram`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/ram` ``

***

### appRestart()

> `static` **appRestart**: \<`appID`\>(`appID`) => `` `/app/${appID}/restart` `` = `App.restart`

Defined in: [packages/api-types/rest/v2/routes/index.ts:18](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L18)

- PUT - `/app/{appID}/restart`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/restart` ``

***

### appStart()

> `static` **appStart**: \<`appID`\>(`appID`) => `` `/app/${appID}/start` `` = `App.start`

Defined in: [packages/api-types/rest/v2/routes/index.ts:19](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L19)

- PUT - `/app/{appID}/start`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/start` ``

***

### appStatus()

> `static` **appStatus**: \<`appID`\>(`appID`) => `` `/app/${appID}/status` `` = `App.status`

Defined in: [packages/api-types/rest/v2/routes/index.ts:20](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L20)

- GET - `/app/{appID}/status`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/status` ``

***

### appStop()

> `static` **appStop**: \<`appID`\>(`appID`) => `` `/app/${appID}/stop` `` = `App.stop`

Defined in: [packages/api-types/rest/v2/routes/index.ts:21](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L21)

- PUT - `/app/{appID}/stop`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/stop` ``

***

### appTeam()

> `static` **appTeam**: \<`appID`\>(`appID`) => `` `/app/${appID}/team` ``\<`appID`, `modID`\>(`appID`, `modID`) => `` `/app/${appID}/team/${modID}` `` = `App.team`

Defined in: [packages/api-types/rest/v2/routes/index.ts:22](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L22)

- GET - `/app/{appID}/team`
- POST - `/app/{appID}/team`
- PUT - `/app/{appID}/team`
- DELETE - `/app/{appID}/team/{modID}`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/app/${appID}/team` ``

- GET - `/app/{appID}/team`
- POST - `/app/{appID}/team`
- PUT - `/app/{appID}/team`
- DELETE - `/app/{appID}/team/{modID}`

#### Type Parameters

• **appID** *extends* `string`

• **modID** *extends* `string`

#### Parameters

##### appID

`appID`

##### modID

`modID`

#### Returns

`` `/app/${appID}/team/${modID}` ``

***

### locale()

> `static` **locale**: \<`locale`\>(`locale`) => `` `/locale/${locale}` `` = `Locale.locale`

Defined in: [packages/api-types/rest/v2/routes/index.ts:25](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L25)

- PUT - `/locale/{locale}`

#### Type Parameters

• **locale** *extends* `string`

#### Parameters

##### locale

`locale`

#### Returns

`` `/locale/${locale}` ``

***

### team()

> `static` **team**: () => `"/team"` = `Team.team`

Defined in: [packages/api-types/rest/v2/routes/index.ts:28](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L28)

- GET - `/team`

#### Returns

`"/team"`

***

### teamBackup()

> `static` **teamBackup**: \<`appID`\>(`appID`) => `` `/team/${appID}/backup` `` = `Team.backup`

Defined in: [packages/api-types/rest/v2/routes/index.ts:29](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L29)

- GET - `/app/{appID}/backup`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/backup` ``

***

### teamCommit()

> `static` **teamCommit**: \<`appID`\>(`appID`) => `` `/team/${appID}/commit` `` = `Team.commit`

Defined in: [packages/api-types/rest/v2/routes/index.ts:30](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L30)

- PUT - `/app/{appID}/commit`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/commit` ``

***

### teamLogs()

> `static` **teamLogs**: \<`appID`\>(`appID`) => `` `/team/${appID}/logs` `` = `Team.logs`

Defined in: [packages/api-types/rest/v2/routes/index.ts:31](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L31)

- GET - `/team/{appID}/logs`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/logs` ``

***

### teamRam()

> `static` **teamRam**: \<`appID`\>(`appID`) => `` `/team/${appID}/ram` `` = `Team.ram`

Defined in: [packages/api-types/rest/v2/routes/index.ts:32](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L32)

- PUT - `/team/{appID}/ram`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/ram` ``

***

### teamRestart()

> `static` **teamRestart**: \<`appID`\>(`appID`) => `` `/team/${appID}/restart` `` = `Team.restart`

Defined in: [packages/api-types/rest/v2/routes/index.ts:33](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L33)

- PUT - `/app/{appID}/restart`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/restart` ``

***

### teamStart()

> `static` **teamStart**: \<`appID`\>(`appID`) => `` `/team/${appID}/start` `` = `Team.start`

Defined in: [packages/api-types/rest/v2/routes/index.ts:34](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L34)

- PUT - `/app/{appID}/start`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/start` ``

***

### teamStatus()

> `static` **teamStatus**: \<`appID`\>(`appID`) => `` `/team/${appID}/status` `` = `Team.status`

Defined in: [packages/api-types/rest/v2/routes/index.ts:35](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L35)

- PUT - `/app/{appID}/status`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/status` ``

***

### teamStop()

> `static` **teamStop**: \<`appID`\>(`appID`) => `` `/team/${appID}/stop` `` = `Team.stop`

Defined in: [packages/api-types/rest/v2/routes/index.ts:36](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L36)

- PUT - `/app/{appID}/stop`

#### Type Parameters

• **appID** *extends* `string`

#### Parameters

##### appID

`appID`

#### Returns

`` `/team/${appID}/stop` ``

***

### upload()

> `static` **upload**: () => `"/upload"` = `Upload.upload`

Defined in: [packages/api-types/rest/v2/routes/index.ts:39](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L39)

- POST - `/upload`

#### Returns

`"/upload"`

***

### user()

> `static` **user**: () => `"/user"` = `User.user`

Defined in: [packages/api-types/rest/v2/routes/index.ts:42](https://github.com/discloud/discloud.app/blob/8d6df0b18784d1a4408701ac8e6b9db44dbb7133/packages/api-types/rest/v2/routes/index.ts#L42)

- GET - `/user`

#### Returns

`"/user"`
