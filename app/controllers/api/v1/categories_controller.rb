module Api
  module V1
    class CategoriesController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        @categories = Category.all
        render json: @categories
      end

      def show
        @category = Category.find(params[:id])
        render json: @category
      end
    end
  end
end
