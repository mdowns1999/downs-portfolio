import githubLogo from "../../assets/images/github-mark.png"
const Github = () => {
  return (
    <div>
      <a href="https://github.com/mdowns1999" rel="noreferrer" target="_blank">
        <img
          className="githubLogo"
          src={githubLogo}
          alt="Github Logo"
        ></img>
      </a>
    </div>
  );
};

export default Github;
