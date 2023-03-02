import { lazy, Suspense } from "react";
const Router = lazy(() => import("./router"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Loading = lazy(() => import("./components/Loading"));
const Error = lazy(() => import("./components/Error"));
import { ErrorBoundary } from "react-error-boundary";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <ContentLayout>
              <Router />
            </ContentLayout>
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </Suspense>
  );
};

export default App;
