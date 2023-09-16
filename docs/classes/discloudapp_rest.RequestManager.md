[Documentation](../README.md) / [Exports](../modules.md) / [@discloudapp/rest](../modules/discloudapp_rest.md) / RequestManager

# Class: RequestManager

[@discloudapp/rest](../modules/discloudapp_rest.md).RequestManager

## Hierarchy

- `EventEmitter`

  ↳ **`RequestManager`**

## Table of contents

### Constructors

- [constructor](discloudapp_rest.RequestManager.md#constructor)

### Properties

- [#token](discloudapp_rest.RequestManager.md##token)
- [emit](discloudapp_rest.RequestManager.md#emit)
- [globalLimit](discloudapp_rest.RequestManager.md#globallimit)
- [globalRemaining](discloudapp_rest.RequestManager.md#globalremaining)
- [globalReset](discloudapp_rest.RequestManager.md#globalreset)
- [globalTime](discloudapp_rest.RequestManager.md#globaltime)
- [off](discloudapp_rest.RequestManager.md#off)
- [on](discloudapp_rest.RequestManager.md#on)
- [once](discloudapp_rest.RequestManager.md#once)
- [options](discloudapp_rest.RequestManager.md#options)
- [removeAllListeners](discloudapp_rest.RequestManager.md#removealllisteners)
- [captureRejectionSymbol](discloudapp_rest.RequestManager.md#capturerejectionsymbol)
- [captureRejections](discloudapp_rest.RequestManager.md#capturerejections)
- [defaultMaxListeners](discloudapp_rest.RequestManager.md#defaultmaxlisteners)
- [errorMonitor](discloudapp_rest.RequestManager.md#errormonitor)

### Accessors

- [baseURL](discloudapp_rest.RequestManager.md#baseurl)
- [globalLimited](discloudapp_rest.RequestManager.md#globallimited)
- [globalTimeToReset](discloudapp_rest.RequestManager.md#globaltimetoreset)
- [token](discloudapp_rest.RequestManager.md#token)

### Methods

- [addListener](discloudapp_rest.RequestManager.md#addlistener)
- [eventNames](discloudapp_rest.RequestManager.md#eventnames)
- [getMaxListeners](discloudapp_rest.RequestManager.md#getmaxlisteners)
- [listenerCount](discloudapp_rest.RequestManager.md#listenercount)
- [listeners](discloudapp_rest.RequestManager.md#listeners)
- [prependListener](discloudapp_rest.RequestManager.md#prependlistener)
- [prependOnceListener](discloudapp_rest.RequestManager.md#prependoncelistener)
- [rawListeners](discloudapp_rest.RequestManager.md#rawlisteners)
- [removeListener](discloudapp_rest.RequestManager.md#removelistener)
- [request](discloudapp_rest.RequestManager.md#request)
- [resolveRequest](discloudapp_rest.RequestManager.md#resolverequest)
- [setMaxListeners](discloudapp_rest.RequestManager.md#setmaxlisteners)
- [setToken](discloudapp_rest.RequestManager.md#settoken)
- [addAbortListener](discloudapp_rest.RequestManager.md#addabortlistener)
- [getEventListeners](discloudapp_rest.RequestManager.md#geteventlisteners)
- [getMaxListeners](discloudapp_rest.RequestManager.md#getmaxlisteners-1)
- [listenerCount](discloudapp_rest.RequestManager.md#listenercount-1)
- [on](discloudapp_rest.RequestManager.md#on-1)
- [once](discloudapp_rest.RequestManager.md#once-1)
- [setMaxListeners](discloudapp_rest.RequestManager.md#setmaxlisteners-1)

## Constructors

### constructor

• **new RequestManager**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`RESTOptions`](../interfaces/discloudapp_rest.RESTOptions.md)\> |

#### Inherited from

EventEmitter.constructor

#### Defined in

[packages/rest/src/RequestManager.ts:47](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L47)

## Properties

### #token

• `Private` **#token**: `string`

#### Defined in

[packages/rest/src/RequestManager.ts:24](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L24)

___

### emit

• **emit**: <K\>(`event`: `K`, ...`args`: [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)[`K`]) => `boolean` & <S\>(`event`: `Exclude`<`S`, keyof [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)\>, ...`args`: `unknown`[]) => `boolean`

#### Overrides

EventEmitter.emit

#### Defined in

[packages/rest/src/RequestManager.ts:11](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L11)

___

### globalLimit

• **globalLimit**: `number` = `60`

The number of requests limit on the global bucket

#### Defined in

[packages/rest/src/RequestManager.ts:30](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L30)

___

### globalRemaining

• **globalRemaining**: `number` = `0`

The number of requests remaining in the global bucket

#### Defined in

[packages/rest/src/RequestManager.ts:35](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L35)

___

### globalReset

• **globalReset**: `number` = `0`

The seconds that the global bucket is reset

#### Defined in

[packages/rest/src/RequestManager.ts:40](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L40)

___

### globalTime

• **globalTime**: `number` = `0`

The time at which the last request was made

#### Defined in

[packages/rest/src/RequestManager.ts:45](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L45)

___

### off

• **off**: <K\>(`event`: `K`, `listener`: (...`args`: [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)[`K`]) => `void`) => [`RequestManager`](discloudapp_rest.RequestManager.md) & <S\>(`event`: `Exclude`<`S`, keyof [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)\>, `listener`: (...`args`: `any`[]) => `void`) => [`RequestManager`](discloudapp_rest.RequestManager.md)

#### Overrides

EventEmitter.off

#### Defined in

[packages/rest/src/RequestManager.ts:13](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L13)

___

### on

• **on**: <K\>(`event`: `K`, `listener`: (...`args`: [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)[`K`]) => `void`) => [`RequestManager`](discloudapp_rest.RequestManager.md) & <S\>(`event`: `Exclude`<`S`, keyof [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)\>, `listener`: (...`args`: `any`[]) => `void`) => [`RequestManager`](discloudapp_rest.RequestManager.md)

#### Overrides

EventEmitter.on

#### Defined in

[packages/rest/src/RequestManager.ts:15](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L15)

___

### once

• **once**: <K\>(`event`: `K`, `listener`: (...`args`: [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)[`K`]) => `void`) => [`RequestManager`](discloudapp_rest.RequestManager.md) & <S\>(`event`: `Exclude`<`S`, keyof [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)\>, `listener`: (...`args`: `any`[]) => `void`) => [`RequestManager`](discloudapp_rest.RequestManager.md)

#### Overrides

EventEmitter.once

#### Defined in

[packages/rest/src/RequestManager.ts:17](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L17)

___

### options

• `Readonly` **options**: [`RESTOptions`](../interfaces/discloudapp_rest.RESTOptions.md)

#### Defined in

[packages/rest/src/RequestManager.ts:25](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L25)

___

### removeAllListeners

• **removeAllListeners**: <K\>(`event?`: `K`) => [`RequestManager`](discloudapp_rest.RequestManager.md) & <S\>(`event?`: `Exclude`<`S`, keyof [`RestEvents`](../interfaces/discloudapp_rest.RestEvents-1.md)\>) => [`RequestManager`](discloudapp_rest.RequestManager.md)

#### Overrides

EventEmitter.removeAllListeners

#### Defined in

[packages/rest/src/RequestManager.ts:19](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L19)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](discloudapp_rest.REST.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Defined in

node_modules/@types/node/events.d.ts:390

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Defined in

node_modules/@types/node/events.d.ts:397

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Defined in

node_modules/@types/node/events.d.ts:434

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](discloudapp_rest.REST.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Defined in

node_modules/@types/node/events.d.ts:383

## Accessors

### baseURL

• `Private` `get` **baseURL**(): `string`

#### Returns

`string`

#### Defined in

[packages/rest/src/RequestManager.ts:54](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L54)

___

### globalLimited

• `get` **globalLimited**(): `boolean`

If the rate limit bucket is currently limited by its limit

#### Returns

`boolean`

#### Defined in

[packages/rest/src/RequestManager.ts:61](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L61)

___

### globalTimeToReset

• `get` **globalTimeToReset**(): `number`

The time until queued requests can continue

#### Returns

`number`

#### Defined in

[packages/rest/src/RequestManager.ts:68](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L68)

___

### token

• `get` **token**(): `string`

#### Returns

`string`

#### Defined in

[packages/rest/src/RequestManager.ts:72](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L72)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`RequestManager`](discloudapp_rest.RequestManager.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RequestManager`](discloudapp_rest.RequestManager.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:454

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:779

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](discloudapp_rest.RequestManager.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function ) | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:725

___

### listeners

▸ **listeners**(`eventName`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:644

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`RequestManager`](discloudapp_rest.RequestManager.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RequestManager`](discloudapp_rest.RequestManager.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:743

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`RequestManager`](discloudapp_rest.RequestManager.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RequestManager`](discloudapp_rest.RequestManager.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:759

___

### rawListeners

▸ **rawListeners**(`eventName`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

**`Since`**

v9.4.0

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:675

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`RequestManager`](discloudapp_rest.RequestManager.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RequestManager`](discloudapp_rest.RequestManager.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:599

___

### request

▸ **request**(`url`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `options` | `undefined` \| { `dispatcher?`: `Dispatcher`  } & `Omit`<`RequestOptions`, ``"origin"`` \| ``"path"`` \| ``"method"``\> & `Partial`<`Pick`<`RequestOptions`, ``"method"``\>\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Defined in

[packages/rest/src/RequestManager.ts:149](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L149)

___

### resolveRequest

▸ **resolveRequest**(`request`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`InternalRequest`](../interfaces/discloudapp_rest.InternalRequest.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fetchOptions` | { `dispatcher?`: `Dispatcher`  } & `Omit`<`RequestOptions`, ``"origin"`` \| ``"path"`` \| ``"method"``\> & `Partial`<`Pick`<`RequestOptions`, ``"method"``\>\> |
| `url` | `URL` |

#### Defined in

[packages/rest/src/RequestManager.ts:86](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L86)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`RequestManager`](discloudapp_rest.RequestManager.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`RequestManager`](discloudapp_rest.RequestManager.md)

**`Since`**

v0.3.5

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:625

___

### setToken

▸ **setToken**(`token`): [`RequestManager`](discloudapp_rest.RequestManager.md)

Sets the authorization token that should be used for requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authorization token to use |

#### Returns

[`RequestManager`](discloudapp_rest.RequestManager.md)

#### Defined in

[packages/rest/src/RequestManager.ts:81](https://github.com/discloud/discloud.app/blob/a945852/packages/rest/src/RequestManager.ts#L81)

___

### addAbortListener

▸ `Static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

that removes the `abort` listener.

**`Since`**

v20.5.0

#### Defined in

node_modules/@types/node/events.d.ts:375

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

**`Since`**

v15.2.0, v14.17.0

#### Defined in

node_modules/@types/node/events.d.ts:296

___

### getMaxListeners

▸ `Static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |

#### Returns

`number`

**`Since`**

v19.9.0

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:325

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:268

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:250

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:189

▸ `Static` **once**(`emitter`, `eventName`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:190

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:340
