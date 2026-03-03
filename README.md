🚀 Cloud Native DevOps CI/CD Pipeline Project
📌 Project Description

This project demonstrates a complete end-to-end DevOps pipeline for deploying a Node.js web application using modern DevOps tools and best practices.

The application is containerized using Docker, automatically built and deployed using Jenkins CI/CD pipeline, hosted on AWS EC2, and monitored using Prometheus and Grafana.

This project simulates a real-world production workflow including build, test, deploy, and monitoring stages.

🛠 Tech Stack

Frontend / Backend: Node.js, Express

Version Control: Git & GitHub

CI/CD Tool: Jenkins

Containerization: Docker

Container Registry: Docker Hub

Cloud Platform: AWS EC2

Monitoring: Prometheus & Grafana

Web Server (optional): Nginx

OS: Ubuntu (EC2 Instance)

🏗 Architecture Overview

GitHub → Jenkins → Docker Build → Docker Hub → AWS EC2 Deployment → Prometheus → Grafana Dashboard

⚙️ Setup Instructions (Run Locally)
1️⃣ Clone Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Run Application Locally
npm start

Application will run on:

http://3.110.119.195:5000
🐳 Run Using Docker
Build Docker Image
docker build -t my-node-app .
Run Container
docker run -d -p 5000:5000 my-node-app

Access app:

http://3.110.119.195:5000
🔄 CI/CD Pipeline Flow (Jenkins)

The Jenkins pipeline automates the following stages:

1️⃣ Checkout Stage

Pulls latest code from GitHub repository.

2️⃣ Install Dependencies

Runs npm install.

3️⃣ Build Stage

Builds Docker image from Dockerfile.

4️⃣ Push to Docker Hub

Tags and pushes image to Docker Hub repository.

5️⃣ Deploy Stage

Pulls latest Docker image on AWS EC2.

Stops old container.

Runs new container.

6️⃣ Monitoring Stage

Prometheus scrapes application metrics.

Grafana visualizes:

Response Time

Request Rate

Error Rate

Uptime
