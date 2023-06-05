import styled from "styled-components";

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
  padding: .45em .875em;
  border-radius: 16px;
`

export const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .75rem;
  padding: 0 2rem;

  div {
    background-color: brown;
    padding: 20px;
    border-radius: 16px;
  }
`

export const ExerciseOverviewStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: 16px 0 0 0;
  background-color: gray;
`