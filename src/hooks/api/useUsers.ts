import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// interfaces
import { User } from './User'

// hooks
import { useDebounce } from '../useDebounce'

const useUsers = (keyword: string, genderFilter: string) => {
  const [response, setResponse] = useState<User[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  // Delay API call when user types in the search field
  const debouncedKeyword = useDebounce(keyword, 700)

  const buildUrl = useCallback(() => {
    const params = new URLSearchParams({
      ...(debouncedKeyword ? { keyword: debouncedKeyword } : {}),
      ...(genderFilter ? { gender: genderFilter } : {}),
    })

    const finalParams = params ? `?${params.toString()}` : ''

    return `https://randomuser.me/api${finalParams}&results=15`
  }, [genderFilter, debouncedKeyword])

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(buildUrl())
        const { data: results } = response
        setResponse(results.results)
        setIsLoading(false)
      } catch {
        setError('Something went wrong')
      }
    }

    fetchUsers()
  }, [buildUrl])

  return { error, isLoading, response }
}

export { useUsers }
