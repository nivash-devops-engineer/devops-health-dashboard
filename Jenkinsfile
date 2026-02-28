pipeline {
    agent any

    environment {
        IMAGE_NAME = "yourdockerhubusername/devops-health-dashboard"
        DOCKER_CREDENTIALS = credentials('dockerhub-token')
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/yourusername/devops-health-dashboard.git',
                credentialsId: 'github-token'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
            }
        }

        stage('Docker Login') {
            steps {
                sh '''
                echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin
                '''
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop devops-dashboard || true
                docker rm devops-dashboard || true
                docker run -d -p 5000:5000 --name devops-dashboard $IMAGE_NAME:$BUILD_NUMBER
                '''
            }
        }
    }
}
