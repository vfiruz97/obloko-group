class ProjectsController < ApplicationController

	def index
		@projects = Project.includes(:todos).order(:id)
	end

	def create	
		Todo.create(text: todo_params[:text], project: Project.find(todo_params[:project_id]))
		redirect_to :root
	end

	def update
		todo = Todo.find(params[:id])
		todo.is_completed = !todo.is_completed
		todo.save
		
		respond_to do |format|
	     format.json { render json: @todo, :status => :ok}
	    end
	end

	private def todo_params
		params.require(:todo).permit(:text, :project_id)
	end
end
