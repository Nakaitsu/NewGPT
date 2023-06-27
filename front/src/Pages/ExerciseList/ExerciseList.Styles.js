import styled from "styled-components"

export const ExerciseOverview = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 16px 0 0 0;
  background-color: var(--dm-grey-lighten);
`

export const EmptyOverview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const OverviewSectionTitle = styled.h3`
  display: block;
  margin-bottom: 1.2em;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--dm-blue);
`

export const OverviewTitle = styled.h2`
  display: block;
  margin-bottom: 1.4em;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-light);
`

export const OverviewCodeFormated = styled.div`
  font-family: consolas;
  font-size: .95rem;
  padding: .55em;
  border-radius: var(--small-radius);
  background-color: var(--dm-grey);
  color: white;
`