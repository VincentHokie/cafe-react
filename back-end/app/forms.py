__author__ = 'MacUser'

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class MenuForm(FlaskForm):
    type = IntegerField('type', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    photo = StringField('photo')


class TypeForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
