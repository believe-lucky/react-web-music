import Layout from "@/components/Layout";
import FloatButton from "@/components/Layout/Footer/FloatButton";

import router from './router/index.js'
import { Suspense, useState} from 'react'
import { RouterProvider } from 'react-router-dom'
import Ai from "@/components/AI/Ai.jsx";
function App() {
  const [showAi, setShowAi] = useState(false)
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <RouterProvider router={router}/>
      </Suspense>
      {/* <Layout /> */}
      <FloatButton isShowAi={setShowAi}></FloatButton>
      {/* Ai */}
      { showAi && <Ai isShowAi={setShowAi}/> }
    </>
  );
}

export default App;
