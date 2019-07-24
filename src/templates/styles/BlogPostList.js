import styled from "styled-components"

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
export const PageNumberWrapper = styled.div`
  background: ${props => (props.isCurrentPage ? "#d22e26" : "unset")};
  color: ${props => (props.isCurrentPage ? "#fff" : "unset")};
  margin: 0 5px;

  .link {
    display: block;
    padding: 8px 16px;
  }
`
