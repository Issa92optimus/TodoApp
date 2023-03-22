class Todo < ApplicationRecord
    enum :status, [:CREATED, :IN_PROGRESS, :COMPLETE, :CANCELLED]
    enum :priority, [:LOW, :MEDIUM, :HIGH]

    validates :title, presence: true, length: { minimum: 8, maximum: 15 }
    validates :description, presence: true, length: { minimum: 25 }
end
