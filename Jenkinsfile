pipeline {
  environment { 
    registry = "congtruqn/testapp" 
    registryCredential = 'dockerhub'
    dockerImage = '22d' 
  }
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      // steps {
      //   git 'https://github.com/congtruqn/kubernate'
      // }
      steps {
        checkout scm
      }
    }

    stage('Build image') {
      steps {
        script {
            myapp = docker.build("congtruqn/testapp:${env.BUILD_ID}")
          }
      }
    }
    stage("Push image") {
        steps {
            script {
                docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                  myapp.push("latest")
                  myapp.push("${env.BUILD_ID}")
                }
            }
        }
    }
    stage('Deploy to GKE') {
        steps{
              sh "sed -i 's/testapp:latest/testapp:${env.BUILD_ID}/g' deployment.yaml"
              sh "kubectl apply -f deployment.yaml"
        }
    }     
  }
}