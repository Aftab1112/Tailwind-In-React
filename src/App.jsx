import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <main className="px-4 md:px-8 py-4">
        <Suspense fallback={<p className="text-3xl">Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default App;
