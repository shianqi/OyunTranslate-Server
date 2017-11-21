import Feedback from '../../models/feedback'

const setFeedback = async ctx => {
  const {
    input = '',
    result = '',
    feedback = true
  } = ctx.request.body

  await new Feedback({
    input,
    result,
    feedback
  }).save()
  ctx.body = {
    status: 'success'
  }
}

const getFeedback = async ctx => {
  ctx.body = {
    status: 'success'
  }
}

export default {
  setFeedback,
  getFeedback
}
