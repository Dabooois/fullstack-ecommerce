export type TOkayable<T, E> =
  | {
    ok: true
    data: T
  }
  | { ok: false;  error: E }