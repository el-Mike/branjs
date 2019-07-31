export type State<T = {}> = {
  [K in keyof T]: T[K];
}
