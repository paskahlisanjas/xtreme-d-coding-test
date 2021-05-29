FROM python:3.9.5-buster

ENV PYTHONUNBUFFERED=1

WORKDIR /backend

COPY requirements.txt /backend/
RUN pip install -r requirements.txt

COPY . /backend/
RUN chmod +x runserver.sh