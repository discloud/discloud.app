export default class Deprecation extends Error {
  constructor(message: string, code?: string);
  constructor(readonly message: string, readonly code?: string) {
    super();
  }

  readonly name = warningType;

  emit() {
    this.emit = noop;
    process.emitWarning(this);
  }
}

function noop() { }

const warningType = "Deprecation";
