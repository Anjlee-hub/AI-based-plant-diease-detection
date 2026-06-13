import tensorflow as tf

print("TensorFlow:", tf.__version__)

try:
    model = tf.saved_model.load(
        "plant_saved_model"
    )

    print("SUCCESS")

except Exception as e:
    print("ERROR:")
    print(e)