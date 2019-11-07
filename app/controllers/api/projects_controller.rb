class Api::ProjectsController < ApplicationController

    def index
        debugger
        @projects = Project.where(user_id: params[:user_id])
        
    end

    def create
        @project = Project.new(project.project_params)
        @project.user_id = current_user.id
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 401
        end
    end

    def project_params
        params.require(:project).permit(:project_name)
    end
end