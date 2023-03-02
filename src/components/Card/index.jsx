const Card = ({ children }) => {
  return (
    <div className="flex flex-row w-full h-full justify-between items-center    p-5 bg-gray-50 border border-gray-300 text-gray-800 text-base rounded-lg bg-opacity-50 ">
      {children}
    </div>
  );
};

export default Card;
