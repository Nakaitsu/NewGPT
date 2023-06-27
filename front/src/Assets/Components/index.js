import styled from "styled-components";

export const Container = styled.div`
  width: 94.3%;
  margin: 0 auto;

  &.flex {
    display: flex;
  }
`

export const ContentBlock = styled.div`
  margin: 1em 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: .5em;
  align-items: center;
`

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

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: ${props => props.right ? '.6em' : 0};
  margin-right: ${props => props.left ? '.6em' : 0};
`