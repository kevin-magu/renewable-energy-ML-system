import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns  # For enhanced plotting
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Step 1: Data Loading
file_path = "/weather.csv"  # Update with your file path
df = pd.read_csv(file_path)

# 2.1 Handling Missing Values for Numerical Columns
numerical_columns = df.select_dtypes(include=['number']).columns
df[numerical_columns] = df[numerical_columns].fillna(df[numerical_columns].mean())

# 2.2 Encoding Categorical Variable (wind)
df_encoded = pd.get_dummies(df, columns=['wind'], prefix=['wind'])

# 3. Feature Selection
# Assuming you want to include all columns except 'precipitation' as predictors
X = df_encoded.drop(columns=['precipitation'])  

# Selecting 'precipitation' as the target variable
y = df['precipitation']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model initialization and training
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model's performance
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Print the evaluation metrics
print(f"Mean Squared Error: {mse}")
print(f"R-squared (R2) Score: {r2}")

# Print some few columns and rows of the dataset
print("\nFirst few rows of the dataset:")
print(df_encoded[['precipitation', 'temp_max', 'temp_min', 'wind', 'weather']].head(20))

# Summary Statistics
print("\nSummary Statistics:")
print(df_encoded.describe())

# Data Information
print("\nData Information:")
print(df_encoded.info())

# Correlation Matrix
correlation_matrix = df_encoded.corr()
print("\nCorrelation Matrix:")
print(correlation_matrix)

# Histograms
plt.figure(figsize=(10, 8))
df_encoded.hist()
plt.tight_layout()
plt.show()

# Count Plot
plt.figure(figsize=(10, 6))
sns.countplot(data=df_encoded, x='weather')
plt.title('Count of Weather Types')
plt.xlabel('Weather')
plt.ylabel('Count')
plt.show()

# Box Plot
plt.figure(figsize=(10, 6))
sns.boxplot(data=df_encoded, x='weather', y='temp_max')
plt.title('Temperature Distribution by Weather Type')
plt.xlabel('Weather')
plt.ylabel('Max Temperature')
plt.show()
