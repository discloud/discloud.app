export default class Deprecation extends Error {
  constructor(message: string, readonly code?: string) {
    super(message);
  }

  readonly name = _warningType;

  emit() {
    this.emit = _noop;
    process.emitWarning(this);
  }
}

function _noop() { }

const _warningType = "Deprecation";
