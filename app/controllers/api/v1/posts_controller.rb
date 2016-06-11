module Api
  module V1
    class PostsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json
      def index
        respond_with(Post.all.order("id DESC"))
      end

      def show
        respond_with(Post.find(params[:id]))
      end

      def upload
        @id = params[:id]
        @post = Post.new
      end

      def create
        @post = Post.create!(post_params)
        redirect_to root_path
      end
      def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
          respond_to do |format|
            format.json { render :json => @post }
          end
        end
      end

      def destroy
        respond_with Post.destroy(params[:id])
      end
      private
        def post_params
          params.require(:post).permit(:description, :user_id, :photo, :category_ids, categories_attributes: [:title])
        end
    end
  end
end
