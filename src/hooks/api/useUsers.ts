import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// interfaces
import { User } from './User'

const useUsers = (
  keyword: string,
  genderFilter: string,
  page: string,
  sortBy: string,
  sortDirection: string,
  isNewKeywordSearch: boolean
) => {
  const [response, setResponse] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  const fetchUsers = useCallback(async () => {
    /* istanbul ignore next */
    if (isNewKeywordSearch) {
      return
    }

    setIsLoading(true)
    /* istanbul ignore next */
    try {
      const response = await axios({
        method: 'GET',
        params: {
          ...(keyword ? { keyword } : {}),
          ...(genderFilter ? { gender: genderFilter } : {}),
          ...(sortBy ? { sortBy } : {}),
          ...(sortDirection ? { sortDirection } : {}),
          ...(page ? { page } : {}),
          results: 50,
        },
        url: 'https://randomuser.me/api',
      })
      const { data: results } = response
      setResponse(results.results)
      setIsLoading(false)
    } catch /* istanbul ignore next */ {
      setError('Something went wrong')
    }
  }, [genderFilter, isNewKeywordSearch, keyword, page, sortBy, sortDirection])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return { error, isLoading, users: response }
}

export { useUsers }
