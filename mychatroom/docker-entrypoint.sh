#!/bin/bash
set -e

echo "${0}: running migrations."
python manage.py collectstatic --noinput

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Start server
# echo "Starting server"
# python manage.py runserver 0.0.0.0:8000

# gunicorn mychatroom.wsgi --bind 0.0.0.0:8000
