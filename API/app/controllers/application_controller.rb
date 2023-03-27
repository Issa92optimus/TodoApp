class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from StandardError, with: :standard_error


    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end

    # hash data token
    def encode(uid, email)
        payload = {
            data: {
                uid: uid,
                email: email
            },
            exp: Time.now.to_i + (6 * 3600)
        }
        begin
        JWT.encode(payload, ENV['todo_app_key'], 'HS256')
        rescue JWT::EncodeError => e
            app_response(message: 'failed', status: 400, data: { info: 'Something went wrong. Please try again' })
        end
    end

    # unhash token
    def decode(token)
        begin
            JWT.decode(token, ENV['todo_app_key'], true, { algorithm: 'HS256' })
        rescue JWT::DecodeError => e
            app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
        end
    end

    # Verify authorization headers
    def verify_auth
        auth_headers = request.headers['Authorization']
            if !auth_headers
                app_response(message: 'failed', status: 401, data: { info: 'Your request is not authorized' })
            else
                token = auth_headers.split( ' ' )[1]
                save_user_id(token)
        end
    end

    
    # store user id in session
    def save_user(id)
        session[:uid] = id
        session[:expiry] = 6.hours.from_now
    end

    # delete user id in session
    def remove_user
        session.delete(:uid)
        session[:expiry] = Time.now
    end

    # check for session expiry
    def session_expired?
        session[:expiry] ||= Time.now
        time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
        unless time_diff > 0
            app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
        end
    end

    # get logged in user
    def user
        User.find(@uid)
    end

    # save user id
    def save_user_id(token)
        @uid = decode(token)[0]["data"]["uid"].to_i
    end

    # get logged in user (session)
    def user_session
        User.find(session[:uid].to_i) 
    end

    # rescue all common errors
    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end
end