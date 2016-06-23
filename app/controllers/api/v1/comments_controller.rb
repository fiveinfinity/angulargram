module Api
  module V1
    class CommentsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        @comments = Comment.all
        render json: @comments
      end

      def create
        @comment = Comment.new(comment_params, user_id: current_user.id)
        if @comment.save
          render json: @comment
        end
      end

      private
      def comment_params
        params.require(:comment).permit(:post_id, :content)
      end
    end
  end
end
