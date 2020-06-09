pipeline {
    agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Docker Build') {
      steps {
        sh "docker build -f Dockerfile ./helloreact -t helloreact:1.0.${env.BUILD_NUMBER} -t helloreact:latest"
      }
    }
    stage('Stop Docker Image') {
      steps {
        sh "docker ps -q --filter "name=helloreact" | grep -q . && docker stop helloreact"
      }
    }
    stage('Run latest') {
      steps {
        sh "docker run -rm -d -p 5000:5000 --name helloreact helloreact:1.0.${env.BUILD_NUMBER}"
      }
    }
  }
}
