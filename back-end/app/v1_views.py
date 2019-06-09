import sys
from pathlib import Path
from flask import jsonify, session
from app import app
from sqlalchemy import exc

from app.models import db, Menu, Type
from app.forms import MenuForm, TypeForm

FILE = Path(__file__).resolve()
PARENT, ROOT = FILE.parent, FILE.parents[1]
sys.path.append(str(ROOT))

# Additionally remove the current file's directory from sys.path
try:
    sys.path.remove(str(PARENT))
except ValueError:  # Already removed
    pass


# decorator used to allow cross origin requests
@app.after_request
def apply_cross_origin_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'

    response.headers["Access-Control-Allow-Credentials"] = "true"
    response.headers["Access-Control-Allow-Methods"] = "GET,HEAD,OPTIONS," \
                                                       "POST,PUT,DELETE"
    response.headers["Access-Control-Allow-Headers"] = "Access-Control-Allow-"\
        "Headers, Origin,Accept, X-Requested-With, Content-Type, " \
        "Access-Control-Request-Method, Access-Control-Request-Headers," \
        "Access-Control-Allow-Origin, Authorization"

    return response


@app.route("/v1/menu", methods=['POST'])
def add_to_menu():

    form = MenuForm()

    # the form was properly filled
    if form.validate_on_submit():

        # create the list
        menu = Menu(
            form.name.data,
            form.price.data,
            form.photo.data,
            form.type.data)

        #check that type exists
        type = Type.query.filter_by(type_id=form.type.data).first()
        if not type:
            response = jsonify(
                {
                    "error":
                    "That type ('" + str(form.type.data) + "') does not exist menu"
                })
            response.status_code = 400

            return response

        try:
            menu.save()

            # retrieve the list and send it back to the user
            menu = Menu.query.filter_by(
                name=form.name.data, type_id=form.type.data).first()
            response = jsonify(menu.serialize)
            response.status_code = 201

        except exc.IntegrityError:
            response = jsonify(
                {
                    "error":
                    "The menu : '" + form.name.data +
                    "' already exists, please change the name"
                })
            response.status_code = 406

        return response

    # the form was not properly filled, return an error message
    else:
        response = jsonify({"error": form.errors})
        response.status_code = 422
        return response


@app.route("/v1/type", methods=['POST'])
def add_to_menu_type():

    form = TypeForm()

    # the form was properly filled
    if form.validate_on_submit():

        # create the list
        type = Type(form.name.data)

        try:
            type.save()

            # retrieve the list and send it back to the user
            type = Type.query.filter_by(
                name=form.name.data).first()
            response = jsonify(type.serialize)
            response.status_code = 201

        except exc.IntegrityError:
            response = jsonify(
                {
                    "error":
                    "The type : '" + form.name.data +
                    "' already exists, please change the name"
                })
            response.status_code = 406

        return response

    # the form was not properly filled, return an error message
    else:
        response = jsonify({"error": form.errors})
        response.status_code = 422
        return response


@app.route("/v1/menu", methods=['GET'])
def get_menu_list():

    # retrieve and send back the needed information
    response = jsonify([
        i.serialize for i in Menu.get_all()
    ])

    response.status_code = 200
    return response


@app.route("/v1/type", methods=['GET'])
def get_type_list():

    # retrieve and send back the needed information
    response = jsonify([
        i.serialize for i in Type.get_all()
    ])

    response.status_code = 200
    return response
