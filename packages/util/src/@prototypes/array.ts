async function _fromAsync<T>(
  iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>,
) {
  const array: T[] = [];

  if (Symbol.asyncIterator in iterableOrArrayLike) {
    for await (const element of iterableOrArrayLike) {
      array.push(element);
    }

    return array;
  }

  if (Symbol.iterator in iterableOrArrayLike) {
    for (const element of iterableOrArrayLike) {
      array.push(await element);
    }

    return array;
  }

  for (let i = 0; i < iterableOrArrayLike.length; i++) {
    array.push(await iterableOrArrayLike[i]);
  }

  return array;
}

async function _mappedFromAsync<T, U>(
  iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>,
  mapFn: (value: Awaited<T>, index: number) => U,
) {
  const array: U[] = [];

  if (Symbol.asyncIterator in iterableOrArrayLike) {
    for await (const element of iterableOrArrayLike) {
      array.push(await mapFn(element, array.length));
    }

    return array;
  }

  if (Symbol.iterator in iterableOrArrayLike) {
    for (const element of iterableOrArrayLike) {
      array.push(await mapFn(await element, array.length));
    }

    return array;
  }

  for (let i = 0; i < iterableOrArrayLike.length; i++) {
    array.push(await mapFn(await iterableOrArrayLike[i], i));
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
    ? _mappedFromAsync(iterableOrArrayLike, mapFn)
    : _fromAsync(iterableOrArrayLike);
