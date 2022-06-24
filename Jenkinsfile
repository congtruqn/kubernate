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
      steps {
        git 'https://github.com/congtruqn/kubernate'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'echo  ${registryCredential}'
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm start'
      }
    }      
  }
}