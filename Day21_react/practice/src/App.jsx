import "./App.css";
import Profile from "./components/Profile";

function App() {
  let profiles = [
    { img: "https://i.namu.wiki/i/UBEFd5cRRJVob63HQ8TToGVLr1Sva5FPIFF7ZUw_LB9zCbjqTQHaktxrEclsWkNkTgI6M0v_JydZlw17evQOKw.webp", name: "James Kim", field: "프론트엔드 개발자" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxe3C054CHBOa93m4zLpQHv36GwZ9qmEpBnQ&s", name: "Anna Young", field: "백엔드 개발자" },
    { img: "https://i.namu.wiki/i/Y-R4WKobnTni6s2xq7ghHG-ng4qtPwz5rhpSnYHeSEio76ecRazUrZ8hKXAdAtzTmRxNvxSCgzLPrv5Ibhqn_Q.webp", name: "Bob Yu", field: "프론트엔드 개발자" },
  ];

  return (
    <>
      {profiles.map((profile, index) => (
        <Profile profile={profile} index={index} key={index} />
      ))}
    </>
  );
}

export default App;
