[discloudapp](../README.md) / [Exports](../modules.md) / [discloud.app](../modules/discloud_app.md) / RequestManager

# Class: RequestManager

[discloud.app](../modules/discloud_app.md).RequestManager

## Hierarchy

- `EventEmitter`

  ↳ **`RequestManager`**

## Table of contents

### Constructors

- [constructor](discloud_app.RequestManager.md#constructor)

### Properties

- [#private](discloud_app.RequestManager.md##private)
- [agent](discloud_app.RequestManager.md#agent)
- [emit](discloud_app.RequestManager.md#emit)
- [globalRemaining](discloud_app.RequestManager.md#globalremaining)
- [globalReset](discloud_app.RequestManager.md#globalreset)
- [off](discloud_app.RequestManager.md#off)
- [on](discloud_app.RequestManager.md#on)
- [once](discloud_app.RequestManager.md#once)
- [options](discloud_app.RequestManager.md#options)
- [removeAllListeners](discloud_app.RequestManager.md#removealllisteners)
- [captureRejectionSymbol](discloud_app.RequestManager.md#capturerejectionsymbol)
- [captureRejections](discloud_app.RequestManager.md#capturerejections)
- [defaultMaxListeners](discloud_app.RequestManager.md#defaultmaxlisteners)
- [errorMonitor](discloud_app.RequestManager.md#errormonitor)

### Accessors

- [globalLimited](discloud_app.RequestManager.md#globallimited)
- [globalTimeToReset](discloud_app.RequestManager.md#globaltimetoreset)
- [token](discloud_app.RequestManager.md#token)

### Methods

- [addListener](discloud_app.RequestManager.md#addlistener)
- [eventNames](discloud_app.RequestManager.md#eventnames)
- [getMaxListeners](discloud_app.RequestManager.md#getmaxlisteners)
- [listenerCount](discloud_app.RequestManager.md#listenercount)
- [listeners](discloud_app.RequestManager.md#listeners)
- [prependListener](discloud_app.RequestManager.md#prependlistener)
- [prependOnceListener](discloud_app.RequestManager.md#prependoncelistener)
- [rawListeners](discloud_app.RequestManager.md#rawlisteners)
- [removeListener](discloud_app.RequestManager.md#removelistener)
- [request](discloud_app.RequestManager.md#request)
- [resolveRequest](discloud_app.RequestManager.md#resolverequest)
- [setMaxListeners](discloud_app.RequestManager.md#setmaxlisteners)
- [setToken](discloud_app.RequestManager.md#settoken)
- [getEventListeners](discloud_app.RequestManager.md#geteventlisteners)
- [listenerCount](discloud_app.RequestManager.md#listenercount-1)
- [on](discloud_app.RequestManager.md#on-1)
- [once](discloud_app.RequestManager.md#once-1)
- [setMaxListeners](discloud_app.RequestManager.md#setmaxlisteners-1)

## Constructors

### constructor

• **new RequestManager**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`RESTOptions`](../interfaces/discloud_app.RESTOptions.md)\> |

#### Defined in

packages/rest/dist/RequestManager.d.ts:28

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/rest/dist/RequestManager.d.ts:13

___

### agent

• `Optional` **agent**: `Dispatcher`

The [Agent](https://undici.nodejs.org/#/docs/api/Agent) for all requests
performed by this manager.

#### Defined in

packages/rest/dist/RequestManager.d.ts:19

___

### emit

• **emit**: <K\>(`event`: `K`, ...`args`: [`RestEvents`](../interfaces/discloud_app.RestEvents-1.md)[`K`]) => `boolean` & <S\>(`event`: `Exclude`<`S`, ``"rateLimited"``\>, ...`args`: `any`[]) => `boolean`

#### Defined in

packages/rest/dist/RequestManager.d.ts:6

___

### globalRemaining

• **globalRemaining**: `number`

The number of requests remaining in the global bucket

#### Defined in

packages/rest/dist/RequestManager.d.ts:23

___

### globalReset

• **globalReset**: `number`

The timestamp at which the global bucket resets

#### Defined in

packages/rest/dist/RequestManager.d.ts:27

___

### off

• **off**: <K\>(`event`: `K`, `listener`: (...`args`: [`RestEvents`](../interfaces/discloud_app.RestEvents-1.md)[`K`]) => `void`) => [`RequestManager`](discloud_app.RequestManager.md) & <S\>(`event`: `Exclude`<`S`, ``"rateLimited"``\>, `listener`: (...`args`: `any`[]) => `void`) => [`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:7

___

### on

• **on**: <K\>(`event`: `K`, `listener`: (...`args`: [`RestEvents`](../interfaces/discloud_app.RestEvents-1.md)[`K`]) => `void`) => [`RequestManager`](discloud_app.RequestManager.md) & <S\>(`event`: `Exclude`<`S`, ``"rateLimited"``\>, `listener`: (...`args`: `any`[]) => `void`) => [`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:8

___

### once

• **once**: <K\>(`event`: `K`, `listener`: (...`args`: [`RestEvents`](../interfaces/discloud_app.RestEvents-1.md)[`K`]) => `void`) => [`RequestManager`](discloud_app.RequestManager.md) & <S\>(`event`: `Exclude`<`S`, ``"rateLimited"``\>, `listener`: (...`args`: `any`[]) => `void`) => [`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:9

___

### options

• **options**: [`RESTOptions`](../interfaces/discloud_app.RESTOptions.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:14

___

### removeAllListeners

• **removeAllListeners**: <K\>(`event?`: `K`) => [`RequestManager`](discloud_app.RequestManager.md) & <S\>(`event?`: `Exclude`<`S`, ``"rateLimited"``\>) => [`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:10

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](discloud_app.DiscloudApp.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:328

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Defined in

node_modules/@types/node/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

node_modules/@types/node/events.d.ts:334

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](discloud_app.DiscloudApp.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Defined in

node_modules/@types/node/events.d.ts:327

## Accessors

### globalLimited

• `get` **globalLimited**(): `boolean`

If the rate limit bucket is currently limited by its limit

#### Returns

`boolean`

#### Defined in

packages/rest/dist/RequestManager.d.ts:32

___

### globalTimeToReset

• `get` **globalTimeToReset**(): `number`

The time until queued requests can continue

#### Returns

`number`

#### Defined in

packages/rest/dist/RequestManager.d.ts:36

___

### token

• `get` **token**(): `string`

#### Returns

`string`

#### Defined in

packages/rest/dist/RequestManager.d.ts:37

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`RequestManager`](discloud_app.RequestManager.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

node_modules/@types/node/events.d.ts:354

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Defined in

node_modules/@types/node/events.d.ts:669

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](discloud_app.RequestManager.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Defined in

node_modules/@types/node/events.d.ts:526

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Defined in

node_modules/@types/node/events.d.ts:616

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

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Defined in

node_modules/@types/node/events.d.ts:539

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`RequestManager`](discloud_app.RequestManager.md)

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

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

node_modules/@types/node/events.d.ts:634

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`RequestManager`](discloud_app.RequestManager.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

node_modules/@types/node/events.d.ts:650

___

### rawListeners

▸ **rawListeners**(`eventName`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
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

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Defined in

node_modules/@types/node/events.d.ts:569

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`RequestManager`](discloud_app.RequestManager.md)

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

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

node_modules/@types/node/events.d.ts:494

___

### request

▸ **request**(`url`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | { `dispatcher?`: `Dispatcher`  } & `Omit`<`RequestOptions`, ``"origin"`` \| ``"path"`` \| ``"method"``\> & `Partial`<`Pick`<`RequestOptions`, ``"method"``\>\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`ResponseData`\>

#### Defined in

packages/rest/dist/RequestManager.d.ts:50

___

### resolveRequest

▸ **resolveRequest**(`request`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`InternalRequest`](../interfaces/discloud_app.InternalRequest.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fetchOptions` | { `dispatcher?`: `Dispatcher`  } & `Omit`<`RequestOptions`, ``"origin"`` \| ``"path"`` \| ``"method"``\> & `Partial`<`Pick`<`RequestOptions`, ``"method"``\>\> |
| `url` | `string` |

#### Defined in

packages/rest/dist/RequestManager.d.ts:44

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`RequestManager`](discloud_app.RequestManager.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

node_modules/@types/node/events.d.ts:520

___

### setToken

▸ **setToken**(`token`): [`RequestManager`](discloud_app.RequestManager.md)

Sets the authorization token that should be used for requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authorization token to use |

#### Returns

[`RequestManager`](discloud_app.RequestManager.md)

#### Defined in

packages/rest/dist/RequestManager.d.ts:43

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): [`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

[`Function`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function )[]

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Defined in

node_modules/@types/node/events.d.ts:271

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
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
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
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

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Defined in

node_modules/@types/node/events.d.ts:254

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
const { once, EventEmitter } = require('events');

async function run() {
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
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

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

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Defined in

node_modules/@types/node/events.d.ts:194

▸ `Static` **once**(`emitter`, `eventName`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Defined in

node_modules/@types/node/events.d.ts:195

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/events.d.ts:317
