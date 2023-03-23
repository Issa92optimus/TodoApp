class TodosController < ApplicationController

    def create
        todo = Todo.create(todo_params)
        if todo.valid?
            app_response(message: 'Task was created successfull', status: :created, data: todo)
        else
            app_response(message: 'Task wasnt created appropiately', status: :unprocessable_entity, data: todo.errors)
        end
    end

    def index
        todo = Todo.all
        render json: { data: todo, message: 'All the todos of this app'}
    end

    private

    def todo_params
        params.permit(:title, :description)
    end
end
