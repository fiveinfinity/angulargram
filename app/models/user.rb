class User < ActiveRecord::Base
  has_many :posts
  has_many :comments
  has_many :favorites
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end


# has many posts - posts a user makes
# has many favorites - posts they favorite


# post belongs to a user
# post has many user favorites

# idea 1
# Favorites
# id
# user_id belongs to
# post_id belongs to
#
# User
# has many favorites
#
# Post
# has many favorites

# Post from favorites where post_id = post.id (finds count)
# User from favorites where user_id = user.id (finds count)

#
