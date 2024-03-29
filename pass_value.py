from flask import Flask, render_template

app = Flask(__name__)

def get_prediction():
   
    import random
    return random.uniform(0, 1)

@app.route('/')
def index():
    
    prediction_value = get_prediction()

    return render_template('index.html', prediction_value=prediction_value)

if __name__ == '__main__':
    app.run(debug=True)
