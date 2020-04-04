<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Autores extends Model
{
    protected $table = 'autores';
    protected $nomeAutor = 'nomeAutor';
    protected $dataNasc = 'dataNasc';
    protected $sexo = 'sexo';
    protected $nacionalidade = 'nacionalidade';
    public $primaryKey = 'id';
    public $timestamps = false;
}
