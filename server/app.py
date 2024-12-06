import warnings
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Import and preprocess data
restaurant_df = pd.read_csv('./assets/restaurant_reviews.csv', sep=',')
restaurant_df.drop(['Metadata', 'Time', 'Pictures', 'Review', '7514'], axis=1, inplace=True)
restaurant_df['Rating'] = pd.to_numeric(restaurant_df['Rating'], errors='coerce')
review_matrix = restaurant_df.pivot_table(index='Reviewer', columns='Restaurant', values='Rating')

review_summary = pd.DataFrame(restaurant_df.groupby('Restaurant')['Rating'].count())
review_summary.columns.values[0] = 'Number of Ratings'
review_summary['Average Rating'] = restaurant_df.groupby('Restaurant')['Rating'].mean()
print(review_summary)

# Endpoint to get restaurant recommendations
@app.route('/recommend', methods=['POST'])
def get_recommended():
    data = request.get_json()
    restaurant_name = data.get('restaurantName', '').strip()

    if not restaurant_name or restaurant_name not in review_matrix.columns:
        return jsonify({"error": f"'{restaurant_name}' not found in the dataset."}), 400

    min_ratings = 2
    if review_matrix[restaurant_name].count() < min_ratings:
        return jsonify({"error": f"'{restaurant_name}' does not have enough data for recommendations."}), 400

    restaurant_ratings = review_matrix[restaurant_name]
    similar_restaurants = review_matrix.corrwith(restaurant_ratings)
    recommended_restaurants = pd.DataFrame(similar_restaurants, columns=['Correlations']).sort_values('Correlations', ascending=False)
    recommended_restaurants.dropna(inplace=True)
    recommended_restaurants = recommended_restaurants[recommended_restaurants.index != restaurant_name]

    if recommended_restaurants.empty:
        return jsonify({"error": f"No restaurants to recommend for {restaurant_name}."}), 400

    return jsonify({"recommendations": recommended_restaurants.index.tolist()}), 200

if __name__ == '__main__':
    app.run(debug=True)
