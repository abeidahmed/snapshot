class Api::V1::SessionsController < ApplicationController
  skip_before_action :authenticate_token
  skip_after_action :verify_authorized

  def create
    auth = Authentication.new(params)

    if auth.authenticated?
      render json: auth.user, serializer: UserSerializer, root: "session"
    else
      render json: { errors: { invalid: ["credentials"] } }, status: :unprocessable_entity
    end
  end
end
