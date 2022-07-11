import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;

  background: ${({ theme }) => theme.colors.card};
`;

export const Title = styled.strong`
  font-size: 1.05rem;
`;

export const Image = styled.img`
  height: 2.5rem;
`;

export const ToggleContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 1.25rem;
`;
