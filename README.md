# PWA-greenpasschecker
Progressive Web Application to scan and check the green pass QR code
The following project is for illustration purposes only.
Project inspired by https://gist.github.com/lmillucci/48804b0598553689fc5054da10e63231

<h2> Introduction </h2>
This Progressive web application allows you to scan and check if your green pass QR code is valid. If the QR code is valid it provides you the full name linked to the green pass scanned.
Thanks to PWA you can easily download and run the app on your device. 

<h2> Description </h2>
The PWA runs on Nodejs runtime and it uses Express framework.
I used a minimal responsive design with Bootstrap 5.
To implemet the QR code scanner I used Instascan library. Link: https://github.com/schmich/instascan
Instascan generates the QR code string result, then it is decoded in base45 format, it is decompressed, afterwards the result is decoded using Concise Binary Object Representation format and finally the result is serialized in Json.


<b> Link: https://greenpasschecker.tk/ </b>

<h2>&#x1F53A; Warning &#x1F53A; </h2>

Replace the content of "certificate.pem" file with your ssl public key.<br>
Replace the content of "privatekey.pem" file with your ssl private key. <br>
Replace the content of "certrequest.csr" file with your Certificate Signing Request.
Replace the contente of public/manigest.json > "start_url": "https://yourdomain.com" with your domain

In order to run Nodejs applications you have to setup your server with these commands:
```
sudo apt-get update
sudo apt-get install nodejs

#update Nodejs to version 14.16.1
sudo npm install -g n
sudo n 14.16.1
node -v

#create the project space
mkdir /var/www/
cd /var/www/

#clone this repository into the new folder

#install the neccesary packages
npm install base45 cbor jpeg-js jsqr pako
```
I used Ubuntu server provided by Google Cloud 



<h2> Images </h2>

<img src="screenshot/screenshot1.gif" width="20%"/>

<img src="screenshot/screenshot2.gif" width="20%"/>

<img src="screenshot/screenshot3.png" width="20%"/>

<img src="screenshot/screenshot4.png" width="20%"/>
