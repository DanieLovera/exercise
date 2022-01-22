dependencies_dir=dependencies
log_file=run.log

log() {
	echo "$1-$(date "+%d/%m/%Y %H:%M:%S")-$2-$USER" >> "$3"
}

log_inf() {
    log "INFO" "$1" "${log_file}"
}

update_repositories() {
	sudo apt-get update
}

install_npm() {
	sudo apt-get install npm
	log_inf "Npm installation completed"
}

install_node() {
	curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
	sudo apt-get install -y nodejs
	log_inf "Node installation completed"
}

install_gradle() {
	curl -sLO https\://services.gradle.org/distributions/gradle-7.3.2-bin.zip
	sudo unzip -d /opt/ gradle-7.3.2-bin.zip	
	sudo ln -s /opt/gradle-7.3.2/bin/gradle /usr/bin/gradle
	log_inf "Gradle installation completed"
}

install_java() {
	sudo apt-get install openjdk-11-jdk openjdk-11-jre
	log_inf "Java installation completed"
}

install_dependencies() {
	update_repositories
	install_npm
	install_gradle
	install node
	install_java
	log_inf "Dependencies installation completed"
}

run() {
	install_dependencies
	sudo mvn spring-boot:run
}

run

