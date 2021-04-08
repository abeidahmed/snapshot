class ApplicationController < ActionController::API
  include Authenticable
  include Pundit
end
