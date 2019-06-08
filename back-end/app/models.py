from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

from passlib.apps import custom_app_context as pwd_context

db = SQLAlchemy()


class Menu(db.Model):
    """This class represents the Menu table."""

    __tablename__ = "menu"

    menu_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), nullable=False)
    price = db.Column(db.Integer)
    photo = db.Column(db.String(140), nullable=True)
    type_id = db.Column(db.Integer, db.ForeignKey(
        'type.type_id', ondelete='CASCADE'), nullable=False)
    __table_args__ = (db.UniqueConstraint(
        'menu_id', 'type_id', name='_type_menu_unique_column'),)

    def __init__(self, name, price, photo, type_id):
        self.name = name
        self.price = price
        self.photo = photo
        self.type_id = type_id

    def save(self):
        db.session.add(self)
        db.session.commit()

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
            'menu_id': self.menu_id,
            'name': self.name,
            'price': self.price,
            'photo': self.photo,
            'type_id': self.type_id,
        }

    @staticmethod
    def get_all():
        return Menu.query.all()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def __repr__(self):
        return '<Menu Item Name %r>' % self.name

class Type(db.Model):
    """This class represents the Type table."""

    __tablename__ = "type"

    type_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(140), nullable=False)
    __table_args__ = (db.UniqueConstraint(
        'type_id', name='_type_unique_column'),)

    def __init__(self, name):
        self.name = name

    def save(self):
        db.session.add(self)
        db.session.commit()

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
            'type_id': self.menu_id,
            'name': self.name
        }

    @staticmethod
    def get_all():
        return Type.query.all()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def __repr__(self):
        return '<Menu Type: %r>' % self.name
