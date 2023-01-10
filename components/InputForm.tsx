
const InputForm = () => {
  return (
    <div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Initial Investment</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input type="text" name="price" id="price" className="text-black block w-full rounded-md border-gray-200 pl-9 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="0.00" aria-describedby="price-currency" />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">USD</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Starting Age</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input type="text" name="price" id="price" className="text-black block w-full rounded-md border-gray-200 pl-9 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="25" aria-describedby="price-currency" />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">Years</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Anticipated Annual Return</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input type="text" name="price" id="price" className="text-black block w-full rounded-md border-gray-200 pl-9 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="10" aria-describedby="price-currency" />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">%</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Additional Contribution</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input type="text" name="price" id="price" className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-m" placeholder="0.00"/>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="time-frame" className="sr-only">Time Frame</label>
            <select id="time-frame" name="time-frame" className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-teal-500 focus:ring-teal-500 sm:text-m">
              <option>Annually</option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InputForm