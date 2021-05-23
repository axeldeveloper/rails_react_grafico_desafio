class Circle < ApplicationRecord
  validates :title, presence: true
  belongs_to :metter
end
