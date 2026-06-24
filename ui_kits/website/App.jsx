/* App — client-side router for the Salvo marketing site kit. */
function App() {
  const [screen, setScreen] = React.useState("home");
  const navigate = (id) => { setScreen(id); window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" }); };
  const Screen = {
    home: window.HomeScreen,
    services: window.ServicesScreen,
    workshops: window.WorkshopsScreen,
    pricing: window.PricingScreen,
    about: window.AboutScreen,
    contact: window.ContactScreen,
  }[screen] || window.HomeScreen;
  return (
    <div>
      <Nav current={screen} onNavigate={navigate} />
      <main><Screen onNavigate={navigate} /></main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
Object.assign(window, { App });
