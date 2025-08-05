import TeamCard from "./TeamCard/TeamCard";
import { useGetUserInfoQuery } from "./TeamCard/userInfo"

function App() {

  const {data: users, isLoading, isError} = useGetUserInfoQuery();

  if(isLoading) return <p>데이터를 불러오는 중입니다.</p>
  if(isError) return <p>에러가 발생했습니다.</p>

  return (
    <>
      {
        users?.map((user) => (
          <TeamCard key={user.id} 
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
          />
        ))
      }
    </>
  )
}

export default App
