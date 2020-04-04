<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Initialize extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('generos', function(Blueprint $table){
            $table->increments('id');
            $table->string('genero',255)->unique()->nullable($value=false);
        });

         Schema::create('editoras', function(Blueprint $table){
            $table->increments('id');
            $table->string('nomeEditora',255)->unique()->nullable($value=false);
        });

        Schema::create('autores', function(Blueprint $table){
            $table->increments('id');
            $table->string('nomeAutor',255)->nullable($value=false);
            $table->integer('ano_nascimento')->unsigned();
            $table->string('sexo')->nullable($value=false);
            $table->string('nacionalidade')->nullable($value=false);


            
        });

        Schema::create('livros', function(Blueprint $table){
            $table->increments('id');
            $table->string('titulo',255)->nullable($value=false);
            $table->integer('ano_lancamento')->unsigned();

            $table->unsignedInteger('autor_id')->unsigned();
            $table->integer('genero_id')->unsigned();
            $table->integer('editora_id')->unsigned();

            $table->foreign('autor_id')->references('id')->on('autores');
            $table->foreign('genero_id')->references('id')->on('generos');
            $table->foreign('editora_id')->references('id')->on('editoras');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('autores');
        Schema::drop('livros');
        Schema::drop('generos');
        Schema::drop('editoras');
    }
}