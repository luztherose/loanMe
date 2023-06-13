function AddLoan() {
  return (
    <form className="py-12">
      <h2 className="text-center text-2xl mb-4 font-display text-black">
        Add Loan
      </h2>
      <div className="mt-8 max-w-md my-0 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Client ID</span>
            <input
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Loan amount</span>
            <input
              type="number"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Interest rate</span>
            <input
              type="number"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="0 %"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Start Date</span>
            <input
              type="date"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Frequency?</span>
            <select
              className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            >
              <option>Monthly</option>
              <option>Bi-Weekly</option>
              <option>Yearly</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              rows="3"
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <input
                  type="submit"
                  value="Save"
                  className="
                        px-4 
                        py-2 
                        font-semibold 
                        text-sm
                        bg-gray-700
                        text-white 
                        rounded-full 
                        shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddLoan;
