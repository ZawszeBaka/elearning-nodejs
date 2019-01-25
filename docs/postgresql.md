
## Ubuntu 18
# Add user 'non' root to postgres
```
$ sudo -u postgres createuser --interactive

[Output]
Enter name of role to add: non
Shall the new role be a superuser? (y/n) y
```

# Create new database
```
$ createdb elearning
```

# Access to PostgreSQL
```
psql -d elearning
```

# Connect to Database 'elearning' from Nodejs
-- Change password
```
$ sudo -u postgres psql
ALTER USER postgres PASSWORD '1024';
```

-- Check for which port postgres is running on
```
$ sudo netstat -plunt |grep postgres
```

-- Export DATABASE_URL
```
[SYNTAX]
postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]

postgresql://
postgresql://localhost
postgresql://localhost:5432
postgresql://localhost/mydb
postgresql://user@localhost
postgresql://user:secret@localhost
postgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp
postgresql://localhost/mydb?user=other&password=secret
```
```
$ export DATABASE_URL=postgresql://postgres:1024@localhost:5432/elearning
```

# Deploy Heroku
```
heroku login

git status
git add .
git commit -am "make it better"
git push heroku master
```

# When pushing code to Heroku , change these code lines
```
[index.js]
    connectionString:process.env.DATABASE_URL

[package.json]
    "start": "node ./bin/www"
```

# Show logs
```
$ heroku logs --tail
```

# Connect to Database , create new relational tables
```
heroku pg:psql
```
