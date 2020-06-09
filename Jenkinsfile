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
        sh "if [ ! \"\$(docker ps -q -f name=helloreact)\" ]; then docker stop helloreact; fi"
      }
    }
    stage('Run latest') {
      steps {
        sh "docker run -rm -d -p 3000:3000 --name helloreact helloreact:1.0.${env.BUILD_NUMBER}"
      }
    }
  }
}
