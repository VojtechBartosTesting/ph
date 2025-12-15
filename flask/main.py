from flask import Flask
from flask_cors import CORS

from app.routes import health, hello


def create_app() -> Flask:
    app = Flask(__name__)

    # CORS - allow all origins
    CORS(app)

    # Register blueprints
    app.register_blueprint(hello.bp)
    app.register_blueprint(health.bp)

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)
