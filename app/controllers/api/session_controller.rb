class Api::SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
    else      
      render json: ['invalid credentials'], status: 404
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
    render json: {}
  end

end
