import { useState, useCallback } from 'react'
import qs from 'query-string'

const getQueryStringValue = (
  key: string,
  queryString: string = window.location.search
) => {
  const values = qs.parse(queryString)
  return values[key]
}

const setQueryStringWithoutPageReload = (qsValue: string) => {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${qsValue}`

  window.history.pushState({ path: newurl }, '', newurl)
}

const setQueryStringValue = (
  key: string,
  value: string,
  queryString: string = window.location.search
) => {
  const values = qs.parse(queryString)
  const newQsValue = qs.stringify({ ...values, [key]: value })
  setQueryStringWithoutPageReload(`?${newQsValue}`)
}

const useQueryString = (
  key: string,
  initialValue: string
): [string, (newValue: string) => void] => {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue)
  const onSetValue = useCallback(
    (newValue) => {
      setValue(newValue)
      setQueryStringValue(key, newValue)
    },
    [key]
  )

  return [value as string, onSetValue]
}

export { useQueryString }
