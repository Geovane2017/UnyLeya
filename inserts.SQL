
		--------------INSERTS---------------------

--Autores

insert into autores (nomeAutor, ano_nascimento, sexo, nacionalidade) values ("Carlos Drummond de Andrade",1902,"Masculino","Brasileira");

insert into autores (nomeAutor, ano_nascimento, sexo, nacionalidade) values ("Clarice Lispector",1920,"Feminino","Brasileira");

insert into autores (nomeAutor, ano_nascimento, sexo, nacionalidade) values ("Luís Vaz de Camões",1524,"Masculino","Portuguesa");

insert into autores (nomeAutor, ano_nascimento, sexo, nacionalidade) values ("Friedrich Nietzsche",1844,"Masculino","Alemanha");

insert into autores (nomeAutor, ano_nascimento, sexo, nacionalidade) values ("Luis Fernando Verissimo",1936,"Masculino","Brasileira");


--Gêneros

insert into generos (genero) values ("Ficção");

insert into generos (genero) values ("Poesia");

insert into generos (genero) values ("Poesia Lírica");

insert into generos (genero) values ("Poesia Épica");

insert into generos (genero) values ("Romance");


-- Editoras

insert into editoras (nomeEditora) values ("Editora Concreta");

insert into editoras (nomeEditora) values ("Editora Escala");

insert into editoras (nomeEditora) values ("Record");

insert into editoras (nomeEditora) values ("Benjamim Moser");

insert into editoras (nomeEditora) values ("Saraiva");


--livros

insert into livros(titulo, ano_lancamento, autor_id, genero_id, editora_id) values ("Todos os Contos",2015,2,1,4);

insert into livros(titulo, ano_lancamento, autor_id, genero_id, editora_id) values ("O Amor Natural",1992,1,2,3);

insert into livros(titulo, ano_lancamento, autor_id, genero_id, editora_id) values ("Os Lusíadas",1572,3,4,1);

insert into livros(titulo, ano_lancamento, autor_id, genero_id, editora_id) values ("A Gaia Ciência",1882,4,3,2);





