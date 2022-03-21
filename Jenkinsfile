pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/massimobiagioli/ts-node-ci-demo'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }

    stage('Start Server') {
      steps {
        sh 'yarn start:prod'
      }
    }

  }
}