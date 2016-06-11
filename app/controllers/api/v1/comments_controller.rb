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

      def create
        @comment = Comment.create(comment_params)
        redirect_to root_path
      end

      private
      def comment_params
        params.require(:comment).permit(:user_id, :post_id, :content)
      end
    end
  end
end
