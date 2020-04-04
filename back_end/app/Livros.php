<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Livros extends Model
{
    protected $table = 'livros';
    protected $ano_lancamento = 'ano_lancamento';
    protected $autor_id = 'autor_id';
    protected $genero_id = 'genero_id';
    protected $titulo = 'titulo';
    protected $editora_id = 'editora_id';
    public $primaryKey = 'id';
    public $timestamps = false;
}
