export const resolve = (scope: any, path: string, exact: boolean = false): any => {
  return exact ? scope[path] : path.split('.').reduce((o, k) => o && o[k], scope)
}
