module Authenticable
  extend ActiveSupport::Concern

  # rubocop:disable Rails/LexicallyScopedActionFilter
  included do
    after_action :verify_authorized, except: :index
    after_action :verify_policy_scoped, only: :index
  end
  # rubocop:enable Rails/LexicallyScopedActionFilter
end
