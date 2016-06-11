class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :post_categories
  has_many :categories, through: :post_categories
  has_attached_file :photo, styles: {original: "700x700>"}
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
