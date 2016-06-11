class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :post_categories
  has_many :categories, through: :post_categories
  has_attached_file :photo, styles: {original: "700x700>"}
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  def categories_attributes=(cat_attr)
    if cat_attr.values != ''
      cat_attr.values.each do |category|
        new_category = Category.find_or_create_by(category)
        self.categories << new_category
      end
    end
  end
end
