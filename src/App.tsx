import { useState } from 'react'
import styled from 'styled-components'

import { SearchInput } from './components/SearchInput'

const Wrapper = styled.div`
  padding: 16px;
`

function App() {
  const [searchKeyword, setSearchKeyword] = useState('')

  return (
    <Wrapper className='App'>
      <SearchInput
        onChange={(e) => setSearchKeyword(e.target.value)}
        value={searchKeyword}
      />
    </Wrapper>
  )
}

export default App
