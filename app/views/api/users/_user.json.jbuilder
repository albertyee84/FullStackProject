json.set! user.id do 
    json.extract! user, :username, :id, :email
end