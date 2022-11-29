import Router from "./routes/Router";

function App() {
  return (
    <main className="bg-blue-200">
      <section className="relative max-w-[480px] min-w-[320px] h-screen m-auto overflow-scroll bg-white shadow-2xl">
        <Router />
      </section>
    </main>
  );
}

export default App;
