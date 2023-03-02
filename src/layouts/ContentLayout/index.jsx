const ContentLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full min-h-screen  items-center bg-weather-image bg-no-repeat bg-cover bg-center text-gray-900 py-[3vh] ">
      {children}
    </main>
  );
};

export default ContentLayout;
