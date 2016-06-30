module Api
  module V1
    class CommentsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json
      require 'pry'

      def index
        @comments = Comment.all
        render json: @comments
      end

      def create
        @comment = Comment.new(comment_params)
        if @comment.save
          @comment.update(user_id: current_user.id)
          render json: @comment
        end
      end

      def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
          render json: @comment
        end
      end

      def destroy
        respond_with Comment.destroy(params[:id])
      end

      private
      def comment_params
        params.require(:comment).permit(:post_id, :content)
      end
    end
  end
end
