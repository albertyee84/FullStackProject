
@searchedprojects.each do |project|
    json.set! project.id do 
        json.extract! project, :user_id, :project_name, :id
    end
end