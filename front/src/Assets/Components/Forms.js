import styled from "styled-components";
import { variant } from "styled-system";

export const ControlInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: .55em 1.45em;
  border: none;
  border-radius: var(--default-radius);
  background-color: var(--dm-grey-lighten);
  color: white;
  font-size: 1rem;

  &:focus {
    outline: 1px var(--dm-yellow);
  }
`

export const TextInput = styled.textarea`
  display: inline-block;
  width: 100%;
  padding: .55em 1.45em;
  border: none;
  border-radius: var(--default-radius);
  background-color: var(--dm-grey-lighten);
  color: white;
  font-size: 1rem;
  overflow-y: auto;

  &:focus {
    outline: 1px var(--dm-yellow);
  }

  ${variant({
    prop: 'resizeable',
    variants: {
      horizontal: { resize: 'horizontal' },
      vertical: { resize: 'vertical' }
    }
  })}
`

export const ControlGroup = styled.div`
  display: flex;
  padding: .2em;
  width: 100%;

  ${variant({
    prop: 'orientation',
    variants: {
      vertical : { flexDirection: 'column' },
      horizontal : { flexDirection: 'row' },
    }
  })}

  ${variant({
    prop: 'justify',
    variants: {
      center: { justifyContent: 'center'},
      start: { justifyContent: 'flex-start'},
      end: { justifyContent: 'flex-end'},
    }
  })}

  ${variant({
    prop: 'align',
    variants: {
      center: { alignItems: 'center'},
      start: { alignItems: 'flex-start'},
      end: { alignItems: 'flex-end'},
    }
  })}
`

export const ControlLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  width: 100%
  height: 100%;
  left: 0;
  top: 0;

  ${variant({
    prop: 'isOpen',
    variants: {
      true: { display: 'block' },
      false: { display: 'none'}
    }
  })}
`

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 3;
  opacity: .8;
  background-color: var(--dm-grey);
`

export const ModalFormContent = styled.form`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 780px;
  height: 540px;
  left: calc(50% - 390px);
  top: calc(50% - 270px);
  padding: 3em;
  z-index: 4;
  border-radius: var(--default-radius);
  background-color: var(--dm-purple-darken);
  overflow-y: auto;

  ${variant({
    prop: 'modalStyle',
    variants: {
      bottomSide: {
        bottom: '0',
        top: 'unset',
        borderRadius: 'var(--default-radius) var(--default-radius) 0 0'
      },
      fullHeight: {
        top: '0',
        height: '100vh',
        borderRadius: 'unset'
      }
    }
  })}
`

export const Modaltitle = styled.span`
  display: inline-block;
  flex: 1;
  font-size: 1.75rem;
  font-weight: bold;
`

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
`

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  ${variant({
    prop: 'alignment',
    variants: {
      center: {
        justifyContent: 'center'
      }
    }
  })}
`

export const ValidationMessage = styled.span`
  display: inline-block;
  font-size: .95rem;

  ${variant({
    prop: 'type',
    variants: {
      error: { color: 'var(--red)' },
      success: { color: 'var(--green)' },
      warning: { color: 'var(--dm-yellow)' }
    }
  })}
`