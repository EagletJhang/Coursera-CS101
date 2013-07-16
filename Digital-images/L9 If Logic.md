image = new SimpleImage("flowers.jpg");

for (pixel: image) {

if (pixel.getRed() > 160) {

//test

pixel.setRed(0);

pixel.setGreen(0);

pixel.setBlue(0);

}

}

print(image);
