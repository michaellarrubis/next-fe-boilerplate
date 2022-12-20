import { lazy } from "react"

export function useLazyLoad(path, namedExport) {
  return lazy(() => {
    const promise = import(path)
    if (namedExport === null) return promise
    return promise.then(module => ({ default: module[namedExport] }))
  })
}

// Inject it with <Suspense />
// https://reactjs.org/docs/code-splitting.html