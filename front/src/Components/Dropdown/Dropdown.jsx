import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { DropdownContainer, DropdownItem, DropdownMenu } from './Dropdown.Styles'
import Button from '../Buttons/Button'

const Dropdown = ({ title, options, onSelect, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const dropdownRef = useRef(null)

  const handleClick = () => setIsOpen(!isOpen)
  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    
    if (onSelect)
      onSelect(option)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsOpen(false)
    }

    if (isOpen)
      document.addEventListener('click', handleClickOutside)
    else
      document.removeEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [isOpen])
  
  return (
    <DropdownContainer ref={dropdownRef} className={props.className}>
      <Button size={props.size} onClick={handleClick} colorType="primary" title={selectedOption ? selectedOption.text : title} />

      <DropdownMenu className={isOpen && "enabled"}>
        {options.map((option) => 
            <DropdownItem key={option.value} onClick={() => handleOptionSelect(option)} href="#">
              {option.text}
            </DropdownItem>
        )}
      </DropdownMenu>
    </DropdownContainer>
  )
}

export default Dropdown