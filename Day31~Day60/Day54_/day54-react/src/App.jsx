import ClsxTest1 from "./Components/clsxTest/clsxTest1"
import ClsxTest2 from "./Components/clsxTest/ClsxTest2"
import ClsxTest3 from "./Components/clsxTest/ClsxTest3"
import ClsxTest4 from "./Components/clsxTest/ClsxTest4"
import TeamCard from "./Components/TeamCard/TeamCard"
import members from "./data/member"


function App() {


  return (
    <>
      {
        members.map((member) => (
          <TeamCard 
            key={member.id}
            name={member.name}
            image={member.image}
            role={member.role}
            status={member.level}
          />
        ))
      }

      <ClsxTest1 />
      <ClsxTest3 />
      <ClsxTest4 />
    </>
  )
}

export default App


/*
  SCSS + CSS Module 방식
  Preprocessor dependency "sass-embedded" not found. Did you install it? Try `npm install -D sass-embedded`.
  - sudo npm install -D sass 설치
*/