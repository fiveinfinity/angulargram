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

      def create
        @post = Post.new(post_params)
        if @post.save && current_user
          @post.assign_category(params)
          @post.update(photo: decode_base64, user_id: current_user.id)
        end
        if @post.errors
          render json: @post.errors
        else
          render json: @post
        end
      end

      def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
          render json: @post
        end
      end

      def destroy
        respond_with Post.destroy(params[:id])
      end

      def decode_base64
        decoded_data = Base64.decode64(params[:photo][:base64])
        data = StringIO.new(decoded_data)
        data
      end

      private
        def post_params
          params.require(:post).permit(:description)
        end
    end
  end
end
