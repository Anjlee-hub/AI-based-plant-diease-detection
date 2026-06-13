import tensorflow as tf
import numpy as np
import sys

from tensorflow.keras.preprocessing import image

class_names = [
    'Pepper__bell___Bacterial_spot',
    'Pepper__bell___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Tomato_Bacterial_spot',
    'Tomato_Early_blight',
    'Tomato_Late_blight',
    'Tomato_Leaf_Mold',
    'Tomato_Septoria_leaf_spot',
    'Tomato_Spider_mites_Two_spotted_spider_mite',
    'Tomato__Target_Spot',
    'Tomato__Tomato_YellowLeaf__Curl_Virus',
    'Tomato__Tomato_mosaic_virus',
    'Tomato_healthy'
]

model = tf.saved_model.load(
    "plant_saved_model"
)

infer = model.signatures["serve"]

image_path = sys.argv[1]

img = image.load_img(
    image_path,
    target_size=(224,224)
)

img_array = image.img_to_array(img)

img_array = np.expand_dims(
    img_array,
    axis=0
)

img_array = img_array.astype(np.float32)

prediction = infer(
    tf.constant(img_array)
)

output = list(
    prediction.values()
)[0].numpy()

predicted_class = np.argmax(
    output
)

confidence = np.max(
    output
) * 100

print(
    class_names[predicted_class]
)

print(
    round(float(confidence),2)
)