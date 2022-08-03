import {ImArrowRight2, ImArrowLeft2} from 'react-icons/im'

export default function PageNavigation({currentPage, lastPage, setNext, setPrev}) {
  return (
    <nav
      className="flex flex-row items-center justify-center w-full max-w-2xl mx-auto my-0"
      aria-label="Pagination"
    >
      <div className="flex justify-center flex-1">
        <button
          onClick={() => setPrev()}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-4 py-2 ml-2 text-lg text-gray-700 rounded-md disabled:opacity-50 umami--click--bookmarks-previous"
        >
          <ImArrowLeft2 />
        </button>
        <button
          onClick={() => setNext()}
          disabled={currentPage === lastPage}
          className="relative inline-flex items-center px-4 py-2 ml-2 text-lg text-gray-700 rounded-md disabled:opacity-50 umami--click--bookmarks-next"
        >
          <ImArrowRight2 />
        </button>
      </div>
    </nav>
  )
}
