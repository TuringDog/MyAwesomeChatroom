FROM python:3.8.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app/django
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . ./
# COPY docker-entrypoint.sh ./
ENTRYPOINT [ "./docker-entrypoint.sh" ]
# CMD gunicorn --chdir hello --bind :8000 hello_django.wsgi:application
CMD gunicorn mychatroom.wsgi --bind 0.0.0.0:8000
# EXPOSE 8000
# CMD [ "python", "manage.py","makemigrations" ]
# CMD [ "python", "manage.py","migrate" ]
# CMD [ "python", "manage.py","runserver","0.0.0.0:8000"]
# CMD [ "python", "manage.py","runserver" ]