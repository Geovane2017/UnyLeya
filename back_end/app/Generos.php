<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Generos extends Model
{
    protected $table = 'generos';
    public $primaryKey = 'id';
    public $timestamps = false;
}
