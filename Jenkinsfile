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

    stage('Deploy') {
      steps {
        sh 'cp -a ./bin /opt/prod/ts-node-ci-demo'
      }
    }

  }
}