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
        if @favorite.save && current_user
          @favorite.update(user_id: current_user.id)
          render json: @favorite
        end
      end

      def destroy
        respond_with Favorite.destroy(params[:id])
      end

      private
      def favorite_params
        params.require(:favorite).permit(:post_id)
      end
    end
  end
end
