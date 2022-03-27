import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// interfaces
import { User } from './User'

const useUsers = (
  keyword: string,
  genderFilter: string,
  page: string,
  sortBy: string,
  sortDirection: string
) => {
  const [response, setResponse] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()
  const [hasMore, setHasMore] = useState<boolean>()

  const fetchUsers = useCallback(async () => {
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
      setResponse((prevResults) => [
        ...(parseInt(page) > 1 ? prevResults : []),
        ...results.results,
      ])
      setHasMore(results.results?.length > 0)
      setIsLoading(false)
    } catch {
      setError('Something went wrong')
    }
  }, [genderFilter, keyword, page, sortBy, sortDirection])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return { error, hasMore, isLoading, response }
}

export { useUsers }
