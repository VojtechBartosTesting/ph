from flask import Blueprint

bp = Blueprint("hello", __name__)


@bp.route("/")
def hello_world():
    """Hello World endpoint."""
    return {"message": "Hello World!"}

