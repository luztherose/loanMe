const SaveButton = ({ value }) => {
  return (
    <div className="block">
      <div className="mt-2">
        <div>
          <input
            type="submit"
            value={value}
            className="
                  px-4 
                  py-2 
                  font-semibold 
                  text-sm
                  bg-gray-700
                  text-white 
                  rounded-full 
                  shadow-sm
                  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SaveButton;
