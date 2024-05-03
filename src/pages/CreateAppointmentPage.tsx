import { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SearchDropdown from "../components/SearchDropdown";
import Datepicker from "react-tailwindcss-datepicker";
import Timepicker from "../components/Timepicker";

export default function CreateAppointmentPage() {
  return (
    <form>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Create an appointment
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            Add an appointment with a patient to your calendar
          </p>

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="patient"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Patient
              </label>
              <SearchDropdown />
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Date
              </label>
              <div>
                <Datepicker
                  useRange={false}
                  asSingle
                  value={{
                    startDate: new Date(),
                  }}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6 relative">
              <label
                htmlFor="time"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Time
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex items-center gap-x-3">
                  <Timepicker />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="visit-purpose"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Purpose of appointment
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="appointment-purpose"
                  id="appointment-purpose"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Location
              </label>
              <div>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue="Canada"
                >
                  <option>In Office</option>
                  <option>Virtual</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
