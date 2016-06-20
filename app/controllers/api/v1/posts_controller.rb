module Api
  module V1
    class PostsController < ApplicationController
      require 'pry'
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
        if params['category_ids']
          category = Category.find(params['category_ids']['id'])
          @post.categories.push(category)
        elsif params['category']
          category = Category.create!(title: params['category'])
          @post.categories.push(category)
        end
        @post.update(photo: decode_base64)
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

      def decode_base64
        Rails.logger.info 'decoding base64 file'
        decoded_data = Base64.decode64(params[:photo][:base64])
        data = StringIO.new(decoded_data)
        data
      end
      private
        def post_params
          params.require(:post).permit(:description, :user_id)
        end
    end
  end
end
