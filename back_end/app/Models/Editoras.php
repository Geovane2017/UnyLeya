<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Editoras extends Model
{
    protected $table = 'editoras';
    protected $nomeEditora = 'nomeEditora';
    public $primaryKey = 'id';
    public $timestamps = false;
}
