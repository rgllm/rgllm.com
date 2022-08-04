import React, {useState} from 'react'

function usePagination(data, recordsPerPage) {
  const [currentPage, setCurrentPage] = useState(1)
  const numberOfPages = Math.ceil(data.length / recordsPerPage)

  function currentData() {
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    return data.slice(indexOfFirstRecord, indexOfLastRecord)
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, numberOfPages))
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
  }

  function jump(page) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(currentPage => Math.min(pageNumber, numberOfPages))
  }

  return {next, prev, jump, currentData, currentPage, numberOfPages}
}

export default usePagination
