class Metter < ApplicationRecord
    validates :title, presence: true

    has_many :knowledge_areas

    has_many :functional_areas

    has_many :profiles

    has_many :circles

    has_many :shifts
    
end
