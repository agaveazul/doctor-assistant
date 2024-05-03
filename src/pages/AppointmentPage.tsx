import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/button";
import { Link } from "../components/link";

export default function AppointmentPage() {
  return (
    <div>
      <div className="relative flex">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Richard's Appointment
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            April 30th 2024 9:30 AM
          </p>
        </div>
        <div className="absolute right-0 mt-2.5">
          <Link to={`/record`}>
            <Button color="indigo">Record</Button>
          </Link>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Richard Strauss
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Appointment For
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Backache
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Personal History
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              220 lbs, no medication, healthy
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Notes
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        transcript_summary.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className="">
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Add your comment
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
    </div>
  );
}
