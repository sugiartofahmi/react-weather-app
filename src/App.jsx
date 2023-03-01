import { lazy, Suspense } from "react";
const Router = lazy(() => import("./router"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Loading = lazy(() => import("./components/Loading"));
const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <ContentLayout>
          <Suspense fallback={<Loading />}>
            <Router />
          </Suspense>
        </ContentLayout>
      </Suspense>
    </MainLayout>
  );
};

export default App;
