import { PencilLine } from "phosphor-react"
import { 
  JobTitle, 
  Username, 
  UserInfo, 
  ProfilePic,
  CoverImage, 
  SidebarContainer,
  Footer,
  RedirectButton,
} from "./style"

interface SidebarProps {
  coverImage: string;
  profilePic: string;
  username: string;
  jobTitle: string;
}

export const Sidebar = ({ coverImage, profilePic, username, jobTitle }: SidebarProps) => {
  return (
    <SidebarContainer>
      <CoverImage src={coverImage} />
      <UserInfo>
        <ProfilePic src={profilePic} />
        <Username>{username}</Username>
        <JobTitle>{jobTitle}</JobTitle>
      </UserInfo>
      <Footer>
        <RedirectButton>
          <PencilLine size={20} />
          <span>Edit profile</span>
        </RedirectButton>
      </Footer>
    </SidebarContainer>
  )
}