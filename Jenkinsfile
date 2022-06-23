pipeline {
  environment { 
    registry = "congtruqn/testapp" 
    registryCredential = 'dockerhub_id' 
    dockerImage = '' 
  }
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/andreipope/HelloWorld'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'echo  ${registry}'
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}