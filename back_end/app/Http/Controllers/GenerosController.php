<?php

namespace App\Http\Controllers;

use App\Generos;
use Illuminate\Http\Request;

class GenerosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Generos::all();
    }
    
    public function store(Request $request)
    {
        $genero = new Generos();
        $genero->genero = $request->input('genero');
        $genero->save();
        return response()->json($genero);
    }

    public function show($id)
    {

        return Generos::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Generos  $generos
     * @return \Illuminate\Http\Response
     */
    public function edit(Generos $generos)
    {
        //
    }

    public function update(Request $request,$id)
    {
          
        $genero = Generos::findOrFail($id);
        $genero->genero  = $request->genero;
        $genero->save();
        return response()->json($genero);
    }

    public function destroy($id)
    {
        
        $genero = Generos::find($id);
        $genero->delete();
        return response()->json("ok");
        
    }
}
