* *************** Instruções para instalação de dependências, configurações e execuções dos servidores ********************
 

* Após baixar e descompactar o arquivo UnyLeya-master.zip, acessar o diretório raiz, onde estarão as pastas back_end, front_end e os arquivos inserts.SQL e README.md 

* Abrir 3 janelas ou abas do terminal, uma no mysql, outra na raiz do back_end e outra na raiz do front_end

* No mysql, execute o seguinte script para criar o banco de dados: CREATE DATABASE laravel;

* No diretório raiz da pasta back_end, renomeie o arquivo .env.example para .env (se o arquivo .env.examples não aparecer aperte as teclas CTRL + H)

* No terminal do back_end execute os seguintes comandos: 
	
	$composer install

	$php artisan migrate 

	$php artisan serve 

* Acessar o banco de dados laravel no mysql usando o comando: use laravel; 

* Executar os scripts do arquivo inserts.SQL na ordem em que estão, com o banco de dados vazio


* No terminal do front_end execute os seguintes comandos: 
	
	$npm install

	$sudo npm run start ou $npm run start(na segunda opção, é necessário abrir um navegador e acessar o front_end pelo endereço: http://localhost:3000/)


