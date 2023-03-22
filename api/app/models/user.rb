class User < ApplicationRecord
    has_secure_password

        validates :username, { 
            presence: true,
            length: { minimum: 5, maximum: 8 },
            uniqueness: true
        }

        validates :email, {
            uniqueness: true,
            presence: true
        }
end
