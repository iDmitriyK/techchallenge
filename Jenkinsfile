pipeline {
    agent any
  stages {
    stage('Checkout') {
      steps {
        chesckout scm
      }
    }
    stage('Docker Build') {
      steps {
        sh "docker build -f Dockerfile ./helloreact -t helloreact:1.0.${env.BUILD_NUMBER} -t helloreact:latest"
      }
    }
    //stage('Stop Docker Image') {
    //    sh "docker stop YOUR_CONATINER_NAME"
    //}
    //stage('Run latest') {
    //    sh "docker run -rm -d -p 80:8080 YOUR_TAG:1.0.${env.BUILD_NUMBER}"
    //}
  }
}
