

# # app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from config import Config

# def create_app():
#     app = Flask(__name__)
#     app.config.from_object(Config)

#     # Enable CORS for requests from your Chrome extension
#     CORS(app, origins=['chrome-extension://oohbicgjaembmhbceodlppafnbehfogp'])

#     # In-memory storage for logs
#     logs = []

#     @app.route('/log-submission', methods=['POST'])
#     def log_submission():
#         data = request.json
#         title = data.get('title')
#         link = data.get('link')
#         status = data.get('status')

#         logs.append({
#             'title': title,
#             'link': link,
#             'status': status
#         })

#         return jsonify(message='Submission logged successfully!'), 200

#     @app.route('/get-logs', methods=['GET'])
#     def get_logs():
#         return jsonify(logs), 200

#     return app







