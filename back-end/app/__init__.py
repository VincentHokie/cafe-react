import os
from . import models
from flask import Flask
from flask_httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()
app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config["DEBUG"] = True
app.config["CSRF_ENABLED"] = True

app.config["SQLALCHEMY_DATABASE_URI"] = \
        os.environ['HEROKU_POSTGRESQL_CRIMSON_URL']

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# make wft extension consider cross-site request forgery
app.config["WTF_CSRF_ENABLED"] = False

# required when the above config is enabled, this will be used to
# generate a scrf token..should be a string that cant be easily
# guessed in production
app.config["SECRET_KEY"] = os.environ['SECRET_KEY']

# administrator list
ADMINS = ['your-gmail-username@gmail.com']

models.db.init_app(app)

from . import v1_views
