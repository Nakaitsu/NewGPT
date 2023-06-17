import styled from "styled-components"

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100%;
`

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: ${props => props.col1} ${props => props.col2};
  width: 100%;
  ${props => props.fh ? "height: 100%;" : ""}
`

export const Controls = styled.div`
  display: flex;
  column-gap: 1em;
  align-items: center;
  width: 100%;
  padding: .5em .75em;
`

export const ControlsTitle = styled.span`
  display: inline-block;
  font-size: 1.2rem;
`

export const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: .7rem;
  padding: 0 3.5rem;
`

export const SearchBar = styled.input`
  display: inline-block;
  width: 100%;
  padding: .55em 1.45em;
  font-size: 1rem;
  border: none;
  border-radius: 16px;
  background-color: var(--dm-grey-lighten);
  color: white;

  &:focus {
    outline-color: var(--primary);
  }

  &::placeholder {
    color: #a5a5a5;
    font-style: italic;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
  padding: 0 2rem;
`

export const ExerciseOverview = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: 16px 0 0 0;
  background-color: var(--dm-grey-lighten);
`

export const Card = styled.div`
  padding: 20px;
  border-radius: 16px;
  background-color: var(--dm-grey-lighten);
`

export const ExerciseTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`

export const ExerciseDescription = styled.p`

`

export const Status = styled.span`
  display: flex;
  column-gap: .3em;

  &::before {
    content: ' ';
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gray;
  }
`

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CardControls = styled.div`
  display: grid;
  grid-template-columns: .75fr .25fr;
`

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: .5em;
  align-items: center;
`

export const Dropdown = styled.div`
  position: relative;
`

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 10px );
  left: calc(50% - 90px);
  width: 180px;
  padding: .7rem .35rem;
  border-radius: 16px;
  background-color: var(--dm-purple-darken);

  &.enabled { 
    display: flex;
    flex-direction: column;
    row-gap: 2px; 
  }
`

export const DropdownItem = styled.a`
  padding: .45em .75em;
  color: white;
  text-decoration: none;
  border-radius: 7px;

  &:hover{
    background-color: var(--dm-grey);
  }
`

export const EmptyOverview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`