# Client Profiler
A Laravel plus vue application to profile clients

## Tools

* Laravel
* Vue

## Setup and Installation

The project requires the following dependencies to run

* PHP 8+
* Composer
* Node 14+

Run the following to get started
```sh
git clone https://github.com/J-hon/legal-counsel

cd lawfirmx

npm install

npm run watch
```

Create .env file

`cp .env.example .env`

Fill in your database credentials in the .env file
```
DB_DATABASE
DB_USERNAME
DB_PASSWORD
```

Fill in maittrap credentials in the .env file
```
MAIL_USERNAME
MAIL_PASSWORD
```

Run the database migration

`php artisan migrate`

Start your server

`php artisan serve`

Start the queue worker

`php artisan queue:listen`

Run tests

`php artisan test`
