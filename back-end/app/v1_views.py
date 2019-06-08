import sys
from pathlib import Path
from flask import render_template, request, jsonify, session
from app import app, auth
from flask_mail import Message
from sqlalchemy import exc
from werkzeug.exceptions import HTTPException
from functools import wraps

from app.models import db, Menu, Type
from app.forms import MenuForm, TypeForm

from itsdangerous import (TimedJSONWebSignatureSerializer
                          as Serializer, BadSignature, SignatureExpired)

FILE = Path(__file__).resolve()
PARENT, ROOT = FILE.parent, FILE.parents[1]
sys.path.append(str(ROOT))

# Additionally remove the current file's directory from sys.path
try:
    sys.path.remove(str(PARENT))
except ValueError:  # Already removed
    pass


def check_valid_list_id(list_id):
    try:
        int(list_id)
    except:
        response = jsonify(
            {
                "error":
                    "Shopping list id: " + str(list_id) + " is not a valid id!"
            })
        response.status_code = 422
        return response

    return None


def check_valid_item_id(item_id):
    try:
        int(item_id)
    except:
        response = jsonify(
            {
                "error":
                    "Shopping list item id: " + str(item_id) +
                    " is not a valid id!"
            })
        response.status_code = 422
        return response

    return None


def check_list_exists(the_list, list_id):

    if the_list is None:
        response = jsonify(
            {
                "error":
                    "Shopping list with id: " + str(list_id) + " is not found!"
            })
        response.status_code = 404
        return response

    return the_list


def check_item_exists(the_item, item_id):

    if the_item is None:
        response = jsonify(
            {
                "error":
                    "Shopping list item with id: " + str(item_id) +
                    " not found!"
            })
        response.status_code = 404
        return response

    return the_item


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

    form = ShoppingListForm()

    # the form was properly filled
    if form.validate_on_submit():

        # create the list
        list = ShoppingList(form.name.data, session["user"])

        try:
            list.save()

            # retrieve the list and send it back to the user
            list = ShoppingList.query.filter_by(
                name=form.name.data, user_id=session["user"]).first()
            response = jsonify(list.serialize)
            response.status_code = 201

        except exc.IntegrityError:
            response = jsonify(
                {
                    "error":
                    "The list : '" + form.name.data +
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

    # ensure our list actually exists
    lists = check_list_exists(ShoppingList.query.filter_by(
        list_id=id, user_id=session["user"]).first(), id)
    if not isinstance(lists, ShoppingList):
        return lists

    # we want all the items under the list with the given id
    if request.method == "GET":

        # retrieve and send back the needed information
        response = jsonify([
            i.serialize for i in ShoppingListItem.get_all(
                id, request.args.get("q"),
                request.args.get("limit"),
                request.args.get("page"))
                                ])

        response.status_code = 200
        return response
