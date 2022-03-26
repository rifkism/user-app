import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// interfaces
import { User } from './User'

const useUsers = (keyword: string, genderFilter: string) => {
  const [response, setResponse] = useState<User[]>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>()

  const buildUrl = useCallback(() => {
    const params = new URLSearchParams({
      keyword,
      genderFilter,
    })

    const finalParams = params ? `?${params.toString()}` : ''

    return `https://randomuser.me/api${finalParams}`
  }, [genderFilter, keyword])

  useEffect(() => {
    const fetchUsers = async () => {
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