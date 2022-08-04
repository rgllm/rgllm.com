import axios from 'axios'
import {createMocks} from 'node-mocks-http'

import handle from '../posts'

jest.mock('axios')

describe('/api/posts', () => {
  describe('when API call is successful', () => {
    it('should return posts list', async () => {
      const postsMock = {
        result: {
          data: {
            data: {
              repository: {discussions: ['post1', 'post2']},
            },
          },
        },
      }
      const {req, res} = createMocks({
        method: 'GET',
      })

      ;(axios as unknown as jest.Mock).mockResolvedValue(postsMock)
      await handle(req)

      expect(res._getStatusCode()).toBe(200)
      expect(axios).toHaveBeenCalled()
    })
  })

  // describe('when API call fails', () => {
  //   it('should return 500', async () => {
  //     const message = 'Network Error'
  //     const {req, res} = createMocks({
  //       method: 'GET',
  //     })
  //     ;(axios as unknown as jest.Mock).mockRejectedValueOnce(new Error(message))

  //     await handle(req)

  //     expect(axios).toHaveBeenCalled()
  //     expect(res._getStatusCode()).toBe(400)
  //   })
  // })
})
