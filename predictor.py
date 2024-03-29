import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Step 1: Data Loading
file_path = "files/ml.csv"  # Update with your file path
df = pd.read_csv(file_path)

# Step 2: Data Exploration and Preparation

# 2.1 Handling Missing Values for Numerical Columns
numerical_columns = df.select_dtypes(include=['number']).columns
df[numerical_columns] = df[numerical_columns].fillna(df[numerical_columns].mean())

# 2.2 Encoding Categorical Variables (if applicable)
# If you have categorical variables, encode them using techniques like one-hot encoding.
df_encoded = pd.get_dummies(df, columns=['region'], prefix=['region'])

# 2.3 Data Scaling/Normalization (if needed)
# If your numerical features need scaling or normalization, you can use MinMaxScaler.

# 2.4 Data Splitting (if applicable)
# If you have a target variable for supervised learning, split the data into training and testing sets.

# Example of splitting data (uncomment and customize as needed):
X = df_encoded.drop(columns=['deaths'])  # Select your predictor features
y = df['deaths']  # Select your target variable
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Optionally, you can print the first few rows and info about the dataset
print("First few rows of the dataset:")
print(df_encoded.head())
print("\nData Information:")
print(df_encoded.info())

# Optionally, you can describe the dataset for summary statistics
print("\nSummary Statistics:")
print(df_encoded.describe())

# Step 4: Model Building and Training

# Assuming you have already split your data into X_train, X_test, y_train, and y_test

# Create a regression model (you can choose a different model based on your dataset)
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Step 5: Model Evaluation

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model's performance
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Print the evaluation metrics
print(f"Mean Squared Error: {mse}")
print(f"R-squared (R2) Score: {r2}")

