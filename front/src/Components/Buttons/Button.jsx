import React from 'react'
import { Icon } from '../../Assets/Components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { ButtonStyled } from './Button.Styles'

const Button = ({ title, i, onClick, ...props }) => {
  const [ItemIcon, setItemIcon] = useState(null)

  useEffect(() => {
    if(i) {
      const loadIcon = async () => {
        const module = await import(`@fortawesome/free-solid-svg-icons`)
        const icon = module[i]

        if(icon)
          setItemIcon(icon)
      }
      
      loadIcon();
    }
  }, [ItemIcon])

  const handleClick = (event) => {
    if(onClick)
      onClick(event.currentTarget)
  }
  
  return (
    <ButtonStyled title={props.toolTip} id={props.id} widthType={props.widthType} href={props.href} 
      className={props.className} size={props.size} colorType={props.colorType} onClick={handleClick}>

      {props.iconSide == 'left' && (
        <Icon left>
          <FontAwesomeIcon icon={ItemIcon} />
        </Icon>
      )}

      <span>
        {i && !title && (
          <Icon>
            <FontAwesomeIcon icon={ItemIcon}/>
          </Icon>
        )}
        {title}
      </span>
      

      {props.iconSide == 'right' && (
        <Icon right>
          <FontAwesomeIcon icon={ItemIcon}/>
        </Icon>
      )}

    </ButtonStyled>
  )
}

export default Button