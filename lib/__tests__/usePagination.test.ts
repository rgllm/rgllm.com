import {act, renderHook} from '@testing-library/react-hooks'

import usePagination from 'lib/usePagination'

const data = [{page: 1}, {page: 2}, {page: 3}]

describe('usePagination', () => {
  it('currentData', () => {
    const {result} = renderHook(() => usePagination(data, 1))

    expect(result.current.currentData()).toEqual([{page: 1}])
  })

  it('jump', () => {
    const {result} = renderHook(() => usePagination(data, 1))

    act(() => result.current.jump(2))
    act(() => result.current.jump(3))
    act(() => result.current.jump(2))

    expect(result.current.currentData()).toEqual([{page: 2}])
  })

  it('next', () => {
    const {result} = renderHook(() => usePagination(data, 1))

    act(() => result.current.next())

    expect(result.current.currentData()).toEqual([{page: 2}])
  })

  it('prev', () => {
    const {result} = renderHook(() => usePagination(data, 1))

    act(() => result.current.next())
    act(() => result.current.next())
    act(() => result.current.prev())

    expect(result.current.currentData()).toEqual([{page: 2}])
  })
})
