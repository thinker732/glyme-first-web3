import {NavBar,Welcome,Loader,Transactions,Footer,Services} from "./components";

const App=() => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>

      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
