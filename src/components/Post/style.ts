import styled from "styled-components";

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding: 2.5rem;

  margin-bottom: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserInfo = styled.div``;

export const Avatar = styled.img`
  width: calc(3.5rem + 12px);
  height: calc(3.5rem + 12px);
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.card};
  outline: 2px solid ${({ theme }) => theme.colors.green_light};
`;

export const Username = styled.strong`
  display: block;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const JobTitle = styled.span`
  display: block;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.support_text};
`;

export const Timestamp = styled.time`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.support_text};
`;

export const Content = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1.5rem;

  & > p {
    margin-top: 1rem;
  }

  & > a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green_dark};
    text-decoration: none;

    :hover {
      filter: brightness(1.2);
      transition: filter 0.3s;
    }
  }
`;

export const CommentForm = styled.form``;
