type SuccessResult<T = {}> = {
  success: Boolean,
  message: String
} & {
  [P in keyof T]: T[P]
}

declare interface IRes {
  success:<T = {}> (payload?: T) => SuccessResult<{[K in keyof T]: T[K]}>
}