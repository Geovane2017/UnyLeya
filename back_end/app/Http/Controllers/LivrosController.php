<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Livros;//model
use DB;

class LivrosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        return DB::table('livros')
        ->join('autores','livros.autor_id','autores.id')
        ->join('generos','livros.genero_id','generos.id')
        ->join('editoras','livros.editora_id','editoras.id')
        ->select('livros.id','livros.titulo','livros.ano_lancamento','autores.nomeAutor','generos.genero','editoras.nomeEditora')
        ->orderBy('titulo')->get();
        


//return select a.nome, b.genero, c.nome
 //from cds as a inner join generos as b inner join artistas as c 
 //on a.genero_id = b.id and a.artista_id = c.id;
        
    }

    public function store(Request $request)
    {
        Log::info($request);
        $livro = new Livros();
        $livro->titulo = $request->input('titulo');
        $livro->autor_id = $request->input('autor_id');
        $livro->genero_id = $request->input('genero_id');
        $livro->editora_id = $request->input('editora_id');
         $livro->ano_lancamento = $request->input('ano_lancamento');

        $livro->save();
        return response()->json($livro);
    }
    
    public function show($id)
    {

        return CDs::find($id);

    }

    

    public function update(Request $request,$id)
    {
          
        $livro = Livros::findOrFail($id);
        $livro->titulo  = $request->titulo;
        $livro->ano_lancamento  = $request->ano_lancamento;
        $livro->autor_id  = $request->autor_id;
        $livro->genero_id  = $request->genero_id;
        $livro->editora_id  = $request->editora_id;
        $livro->save();
        return response()->json($livro);
    }


    public function destroy($id)
    {
        $livro = Livros::find($id);

        if(!$livro) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $livro->delete();
        return response()->json("ok");
    }
}
