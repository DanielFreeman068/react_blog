import FooterTheme from './components/FooterTheme'

function App() {
    // define variables
    let info = {
      webName: "Global",
      routes: {
          lifestyle: "#lifestyle",
          technology: "#technology",
      },
      socialLinks: {
          github: "https://github.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          linkedIn: "https://linkedIn.com/johndoe",
      },
    }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="brand-name">Global</a>
          <ul className="nav-links">
            <li><a href="#lifestyle">Lifestyle</a></li>
            <li><a href="#technology">Technology</a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="#subscribe" className="subscribe-btn">Subscribe</a>        
        </div>
      </nav>
      <h1 className="topText">Welcome to Scribe, we write about technology, people and culture</h1>
      <FooterTheme logoImage = {info.logoImage} routes = {info.routes} socialLinks = {info.socialLinks} webName = {info.webName} address = {info.address}/>
    </>
  );
}

export default App;
