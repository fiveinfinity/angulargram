module Api
  module V1
    class FavoritesController < ApplicationController
      require 'pry'
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        @favorites = Favorite.all
        render json: @favorites
      end

      def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
          @favorite.update(user_id: current_user.id)
          binding.pry
          render json: @favorite
        end
      end

      private
      def favorite_params
        params.require(:favorite).permit(:post_id)
      end
    end
  end
end
