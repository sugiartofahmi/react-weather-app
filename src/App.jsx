import { lazy, Suspense } from "react";
const Router = lazy(() => import("./router"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Loading = lazy(() => import("./components/Loading"));
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <ContentLayout>
            <Router />
          </ContentLayout>
        </Suspense>
      </MainLayout>
    </Suspense>
  );
};

export default App;
