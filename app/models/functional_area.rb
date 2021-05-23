class FunctionalArea < ApplicationRecord
  validates :title, presence: true
  belongs_to :metter
end
