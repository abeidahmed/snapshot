class Api::V1::SessionsController < ApplicationController
  def create
    auth = Authentication.new(params)

    if auth.authenticated?
      render json: auth.user
    else
      render json: { errors: { invalid: ["credentials"] } }, status: :unprocessable_entity
    end
  end
end
