



#  伺服器選擇 Linode 

use ubuntu 

## use shared CPU

1G shared 
key password 

## 記錄下IP and SSH Access => "yes" & key password


## 使用指令

### d

We recommend you install Node using either curl or wget.

1. To install NVM using curl, run the following command:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

2. To install NVM using wget, run the following command:
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
Note
You can also install NVM using GIT or with a manual download and installation. Consult the GIT section of the NVM Documentation Guide for detailed instructions.
Source the new instructions NVM added to .bashrc during the installation process. You can either exit and re-enter the shell console, or manually source your .bashrc file. This file is almost always located at the root of your home directory.

```
source ~/.bashrc
```

### nvm ls-remote

### nvm install v14.18.1

### node -v

### git clone https://github.com/YiTaChen/node-practice.git


### sudo apt-get update && sudo apt-get upgrade

ubuntu 安裝mongoDB 文件
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/





### sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

### echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

### sudo apt-get update

### Install MongoDB
```
sudo apt-get install mongodb-org
```


Start and Stop MongoDB
To start, restart, or stop the MongoDB service, issue the appropriate command from the following:

```
sudo systemctl start mongod
sudo systemctl restart mongod
sudo systemctl stop mongod
```

You can also enable MongoDB to start on boot:
```
sudo systemctl enable mongod
```