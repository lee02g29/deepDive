// 경로를 포함해야함
import Blog from "./component/Blog";

function AppEx() {
  return (
    <div className="AppEx">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
}

export default AppEx;
