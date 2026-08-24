async function fromAsync<T>(
  iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>,
) {
  const array: T[] = [];
  for await (const element of await iterableOrArrayLike as AsyncGenerator<PromiseLike<T>>) {
    array.push(await element);
  }
  return array;
}

async function mappedFromAsync<T, U>(
  iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>,
  mapFn: (value: Awaited<T>, index: number) => U,
) {
  const array: U[] = [];
  for await (const element of await iterableOrArrayLike as AsyncGenerator<PromiseLike<T>>) {
    array.push(mapFn(await element, array.length));
  }
  return array;
}

/**
 * Designed for Node.js 20 compatibility
 */
Array.fromAsync ??= <T, U>(
  iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>,
  mapFn?: (value: Awaited<T>, index: number) => U,
) => typeof mapFn === "function"
    ? mappedFromAsync(iterableOrArrayLike, mapFn)
    : fromAsync(iterableOrArrayLike);
