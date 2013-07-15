pixel.setGreen(pixel.getRed());

pixel.setBlue(pixel.getRed());


// Visual result: grayscale image, since red/blue/green are made equal for each pixel.

----------------

avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;

pixel.setRed(avg);

pixel.setGreen(avg);

pixel.setBlue(avg);
