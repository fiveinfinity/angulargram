module Api
  module V1
    class CommentsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        @comments = Comment.all
        respond_to do |f|
          f.json {render json: @comments}
        end
      end
    end
  end
end
