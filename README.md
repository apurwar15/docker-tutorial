#docker-kubernetes
 echo "#docker-kubernetes" > README.md
arpit@arpit-VirtualBox:~/Desktop/docker$ git init
Initialized empty Git repository in /home/arpit/Desktop/docker/.git/
arpit@arpit-VirtualBox:~/Desktop/docker$ git add .
arpit@arpit-VirtualBox:~/Desktop/docker$ git commit -m "first commit"
[master (root-commit) d30ce6c] first commit
 10 files changed, 140 insertions(+)
 create mode 100644 README.md
 create mode 100644 nodeapp/Dockerfile
 create mode 100644 nodeapp/index.js
 create mode 100644 nodeapp/npm-debug.log
 create mode 100644 nodeapp/package.json
 create mode 100644 redis-image/Dockerfile
 create mode 100644 visit/Dockerfile
 create mode 100644 visit/docker-compose.yml
 create mode 100644 visit/index.js
 create mode 100644 visit/package.json
arpit@arpit-VirtualBox:~/Desktop/docker$ git branch -M main
arpit@arpit-VirtualBox:~/Desktop/docker$ git remote add origin https://github.com/apurwar15/docker-tutorial.git
arpit@arpit-VirtualBox:~/Desktop/docker$ git push -u origin main
Username for 'https://github.com': apurwar15
Password for 'https://apurwar15@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/apurwar15/docker-tutorial.git/'
arpit@arpit-VirtualBox:~/Desktop/docker$ git push -u origin main
Username for 'https://github.com': apurwar15
Password for 'https://apurwar15@github.com': 
Counting objects: 15, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (13/13), done.
Writing objects: 100% (15/15), 2.39 KiB | 271.00 KiB/s, done.
Total 15 (delta 0), reused 0 (delta 0)
To https://github.com/apurwar15/docker-tutorial.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.

