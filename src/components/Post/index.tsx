import { Container, Avatar, Author, Content, Header, JobTitle, Timestamp, UserInfo, Username, CommentForm } from "./style"

export const Post = () => {
  return (
    <Container>
      <Header>
        <Author>
          <Avatar src="https://avatars.githubusercontent.com/u/61482516?v=4"/>
          <UserInfo>
            <Username>Bruno Vasconcellos</Username>
            <JobTitle>Frontend Developer</JobTitle>
          </UserInfo>
        </Author>
        <Timestamp title="August 7 2022" dateTime="2022-08-07 10:00:00">1 hour ago</Timestamp>
      </Header>
      <Content>
        <p>Project developed during NLW. Make sure to check it out!</p>
        <a href="#">Projects</a>
      </Content>
      <CommentForm>
        <strong>Leave your feedback</strong>
        <textarea 
          placeholder="Drop a comment"
        />
        <button type="submit">Comment</button>
      </CommentForm>
    </Container>
  )
}