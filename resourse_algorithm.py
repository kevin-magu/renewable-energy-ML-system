def predict_health_condition_type():
    return "Infectious"

def allocate_health_resources(prediction):
    # Assume prediction is a value between 0 and 1, where 0 is low severity and 1 is high severity.
    
    # Define resource thresholds
    low_threshold = 0.3
    moderate_threshold = 0.6
    
    # Get predicted health condition type
    health_condition_type = predict_health_condition_type()
    
    # Decision making based on prediction and health condition type
    if prediction < low_threshold:
        if health_condition_type == "Infectious":
            resources_needed = "Low resources for Infectious condition"
        else:
            resources_needed = "Low resources for Non-Infectious condition"
    elif low_threshold <= prediction < moderate_threshold:
        if health_condition_type == "Infectious":
            resources_needed = "Moderate resources for Infectious condition"
        else:
            resources_needed = "Moderate resources for Non-Infectious condition"
    else:
        if health_condition_type == "Infectious":
            resources_needed = "High resources for Infectious condition"
        else:
            resources_needed = "High resources for Non-Infectious condition"
    
    return resources_needed

# Example usage
prediction_value = 0.75  # Replace this with the actual prediction value from your model
allocation_result = allocate_health_resources(prediction_value)

print("Prediction:", prediction_value)
print("Resource Allocation Decision:", allocation_result)
