import { lazy } from "react";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));
const Error = () => {
  return (
    <ContentLayout>
      <h1 className="text-red-500">Could not fetch data.</h1>
    </ContentLayout>
  );
};

export default Error;
