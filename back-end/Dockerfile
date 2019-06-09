FROM python:3.4

WORKDIR /app

COPY . .

RUN curl https://bootstrap.pypa.io/get-pip.py | python && \
    pip install -r requirements.txt && \
    python manage.py db init

CMD mysql -uroot -proot -e "create database if not exists rebase;" && \
    python manage.py db migrate && \
    python manage.py db upgrade && \
    python run.py
