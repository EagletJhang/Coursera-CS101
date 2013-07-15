//pixel image 二者可自定義

image = new SimpleImage("x.png");

image.setZoom(20);//放大

pixel = image.getPixel(0, 0);// upper left pixel

pixel.setRed(255); //set red value of that pixel

print(image);

