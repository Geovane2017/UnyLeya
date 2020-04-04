<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Rotas para Autores*/

Route::resource('autores', 'AutoresController');

/*Rotas para Generos */

Route::resource('generos', 'GenerosController');

/*Rotas para Editoras */

Route::resource('editoras', 'EditorasController');


/*Rotas para Livros */

Route::resource('livros', 'LivrosController');