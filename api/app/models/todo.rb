class Todo < ApplicationRecord
    validates :title, presence: true, length: { minimum: 8, maximum: 30 }
    validates :description, presence: true, length: { minimum: 20 }
end
