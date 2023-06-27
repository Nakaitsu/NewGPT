import React from 'react'
import { Input, Wrapper } from './SearchBar.Styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faSearch)

const SearchBar = ({ onChange, ...props }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const searchbarRef = useRef(null)
  
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
    onChange(event.target.value)
  }

  return (
    <Wrapper>
      <Input type="text" ref={searchbarRef} value={searchTerm} placeholder={props.placeholder} onChange={handleSearchTermChange} />
      <FontAwesomeIcon icon="search" />
    </Wrapper>
  )
}

export default SearchBar