import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// interfaces
import { User } from './User'

// hooks
import { useDebounce } from '../useDebounce'

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

  // Delay API call when user types in the search field
  const debouncedKeyword = useDebounce(keyword, 700)

  const buildUrl = useCallback(() => {
    const params = new URLSearchParams({
      ...(debouncedKeyword ? { keyword: debouncedKeyword } : {}),
      ...(genderFilter ? { gender: genderFilter } : {}),
      ...(sortBy ? { sortBy } : {}),
      ...(sortDirection ? { sortDirection } : {}),
      ...(page ? { page } : {}),
    })

    const finalParams = params ? `?${params.toString()}` : ''

    return `https://randomuser.me/api${finalParams}&results=5`
  }, [genderFilter, debouncedKeyword, page, sortBy, sortDirection])

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(buildUrl())
        const { data: results } = response
        setResponse((prevResults) => [...prevResults, ...results.results])
        setHasMore(results.results?.length > 0)
        setIsLoading(false)
      } catch {
        setError('Something went wrong')
      }
    }

    fetchUsers()
  }, [buildUrl])

  return { error, hasMore, isLoading, response }
}

export { useUsers }
