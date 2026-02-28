pipeline {
    agent any

    environment {
        IMAGE_NAME = "yourdockerhubusername/devops-health-dashboard"
        DOCKER_CREDENTIALS = credentials('dockerhub-token')
    }

    stage('Build Docker Image') {
    steps {
        sh 'docker build -t nivashdevops/devops-health-dashboard:${BUILD_NUMBER} .'
    }
}

stage('Docker Login') {
    steps {
        sh 'echo $DOCKER_CREDENTIALS_PSW | docker login -u nivashdevops --password-stdin'
    }
}

stage('Push Image') {
    steps {
        sh 'docker push nivashdevops/devops-health-dashboard:${BUILD_NUMBER}'
    }
}
