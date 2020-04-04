<?php

namespace App\Http\Controllers;

use App\Autores;
use Illuminate\Http\Request;
use DB;


class AutoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Autores::all();
     //  return Autores::orderBy('nomeAutor')->get();
    }

    public function store(Request $request)
    {
        $autor = new Autores();
        $autor->nomeAutor = $request->input('nomeAutor');
        $autor->ano_nascimento = $request->input('ano_nascimento');
        $autor->sexo = $request->input('sexo');
        $autor->nacionalidade = $request->input('nacionalidade');
        $autor->save();
        return response()->json($autor);
    }
  

    public function show($id)
    {

        return Autores::findOrFail($id);
    }


    public function update(Request $request,$id)
    {
          
        $autor = Autores::findOrFail($id);
        $autor->nomeAutor  = $request->nomeAutor;
        $autor->ano_nascimento  = $request->ano_nascimento;
        $autor->sexo  = $request->sexo;
        $autor->nacionalidade  = $request->nacionalidade;
        $autor->save();
        return response()->json($autor);
    }

   
    public function destroy($id)
    {
       
        $autor = Autores::find($id);
        $autor->delete();
        return response()->json("ok");
             
           
     
    }
}


