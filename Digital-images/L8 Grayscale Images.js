pixel.setGreen(pixel.getRed());
pixel.setBlue(pixel.getRed());
// Visual result: grayscale image, since red/blue/green are made equal for each pixel.When red/green/blue values are equal 
//shade of grayshade of gray





avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
//1. Average combines red/green/blue into one number. The average measures how bright the pixel is 0..255
//2. Standard code line to compute average within loop.
pixel.setRed(avg);
pixel.setGreen(avg);
pixel.setBlue(avg);
