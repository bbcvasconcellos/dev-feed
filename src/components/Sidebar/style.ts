import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: ${({ theme }) => theme.colors.card};
  overflow: hidden;
  border-radius: 8px;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: calc(3.5rem + 12px);
  height: calc(3.5rem + 12px);
  margin-top: calc(-1.75rem - 6px);
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.card};
  outline: 2px solid ${({ theme }) => theme.colors.green_light};
`;

export const Username = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_titles};
`;

export const JobTitle = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.support_text};
  line-height: 1.6;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RedirectButton = styled.a`
  display: block;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.green_light};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.green_light};

  gap: 0.5rem;

  :hover {
    cursor: pointer;
    transition: ease-in;
    transition-duration: 0.3s;
    background: ${({ theme }) => theme.colors.green_light};
    color: ${({ theme }) => theme.colors.white};
  }
`;
