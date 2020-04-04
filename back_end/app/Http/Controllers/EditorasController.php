<?php

namespace App\Http\Controllers;

use App\Models\Editoras;
use Illuminate\Http\Request;

class EditorasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Editoras::all();
    }
    
    public function store(Request $request)
    {
        $editora = new Editoras();
        $editora->nomeEditora = $request->input('nomeEditora');
        $editora->save();
        return response()->json($editora);
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
          
        $editora = Editoras::findOrFail($id);
        $editora->nomeEditora  = $request->nomeEditora;
        $editora->save();
        return response()->json($editora);
    }

    public function destroy($id)
    {
        
        $editora = Editoras::find($id);
        $editora->delete();
        return response()->json("ok");
        
    }
}
