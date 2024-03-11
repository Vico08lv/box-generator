import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftContainer from "./layouts/LeftContainer"
import Visualization from "./layouts/Visualization/Visualization";


function App() {
  return (
    <div className="min-h-screen bg-slate-600 flex flex-col">
      <Header/>

      {/* que les onglets ne depassent pas sur le header quand on retrécie la fenêtre */}
      <div className="pb-10 bg-slate-200"></div>
      <main className="flex flex-wrap justify-center items-center flex-grow bg-slate-200 px-10 mb:flex-nowrap">

        <LeftContainer/>
        <Visualization/>

      </main>
      <Footer/>

    </div>
  );
}

export default App;
