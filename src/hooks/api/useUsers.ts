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
    if (isNewKeywordSearch) return
    setIsLoading(true)
    try {
      const response = await axios({
        method: 'GET',
        params: {
          keyword,
          gender: genderFilter,
          sortBy,
          sortDirection,
          page,
          results: 50,
        },
        url: 'https://randomuser.me/api',
      })
      const { data: results } = response
      setResponse(results.results)
      setIsLoading(false)
    } catch {
      setError('Something went wrong')
    }
  }, [genderFilter, isNewKeywordSearch, keyword, page, sortBy, sortDirection])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return { error, isLoading, response }
}

export { useUsers }
