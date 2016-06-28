module Api
  module V1
    class UsersController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        @users = User.all
        render json: @users
      end
    end
  end
end
