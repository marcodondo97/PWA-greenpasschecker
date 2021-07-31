# PWA-greenpasschecker



<h2> Introduction </h2>


<h2> Description </h2>



<b> To see the demo: https://greenpasschecker.tk/ </b>

<h2>&#x1F53A; Warning &#x1F53A; </h2>

Replace the content of "certificate.pem" file with your ssl public key.<br>
Replace the content of "privatekey.pem" file with your ssl private key. <br>
Replace the content of "certrequest.csr" file with your Certificate Signing Request.


In order to run Nodejs applications you have to setup your Ubuntu server with these commands:
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




<h2> Images </h2>

<img src="screenshot/screenshot1.gif" width="20%"/>

<img src="screenshot/screenshot2.gif" width="20%"/>

<img src="screenshot/screenshot3.png" width="20%"/>

<img src="screenshot/screenshot4.png" width="20%"/>
