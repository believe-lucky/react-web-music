import Layout from "@/components/Layout";
import FloatButton from "@/components/Layout/Footer/FloatButton";

import router from './router/index.js'
import { Suspense} from 'react'
import { RouterProvider } from 'react-router-dom'
function App() {
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <RouterProvider router={router}/>
      </Suspense>
      {/* <Layout /> */}
      <FloatButton></FloatButton>
    </>
  );
}

export default App;
