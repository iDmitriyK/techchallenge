pipeline {
    agent any
  stages {
    stage('Checkout') {
      step {
        chesckout scm
      }
    }
    dir('helloreact') {
      stage('Build') {
        steps {
          sh 'npm install'
          sh 'npm build'
        }
      }
    }
    //stage('Docker Build') {
    //    sh "docker build -f YOUR_DOCKER_FILE PATH_TO_YOUR_APP -t YOUR_TAG:1.0.${env.BUILD_NUMBER} -t YOUR_TAG:latest"
    //}
    //stage('Stop Docker Image') {
    //    sh "docker stop YOUR_CONATINER_NAME"
    //}
    //stage('Run latest') {
    //    sh "docker run -rm -d -p 80:8080 YOUR_TAG:1.0.${env.BUILD_NUMBER}"
    //}
  }
}
