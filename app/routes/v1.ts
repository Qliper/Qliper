import { FastifyInstance } from 'fastify'

import MainRoute from '#app/modules/main_route'
import AuthRoute from '#app/modules/auth/auth_route'
import CampaignsRoute from '#app/modules/campaigns/campaigns_route'
import UsersRoute from '#app/modules/users/users_route'
import EngagementRoute from '#app/modules/engagement/engagement_route'

export default function (app: FastifyInstance) {
  app.register(MainRoute)
  app.register(AuthRoute, { prefix: '/auth' })
  app.register(CampaignsRoute, { prefix: '/campaigns' })
  app.register(UsersRoute, { prefix: '/users' })
  app.register(EngagementRoute, { prefix: '/engagement' })
}
