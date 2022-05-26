import axios from 'axios'
import {createMocks} from 'node-mocks-http'

import handle from '../pages'

jest.mock('axios')

describe('/api/pages', () => {
  describe('when API call is successful', () => {
    it('should return pages list', async () => {
      const pagesMock = {
        result: {
          data: {
            data: {
              repository: {discussions: ['page1', 'page']},
            },
          },
        },
      }
      const {req, res} = createMocks({
        method: 'GET',
      })

      ;(axios as unknown as jest.Mock).mockResolvedValue(pagesMock)
      await handle(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(axios).toHaveBeenCalled()
    })
  })

  describe('when API call fails', () => {
    it('should return 500', async () => {
      const message = 'Network Error'
      const {req, res} = createMocks({
        method: 'GET',
      })
      ;(axios as unknown as jest.Mock).mockRejectedValueOnce(new Error(message))

      await handle(req, res)

      expect(axios).toHaveBeenCalled()
      expect(res._getStatusCode()).toBe(500)
    })
  })
})
