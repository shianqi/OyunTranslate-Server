import feedback from './controller'

export const baseUrl = '/feedback'

export default [
  {
    method: 'POST',
    route: '/post',
    handlers: [
      feedback.setFeedback
    ]
  },
  {
    method: 'GET',
    route: '/get',
    handlers: [
      feedback.getFeedback
    ]
  }
]
