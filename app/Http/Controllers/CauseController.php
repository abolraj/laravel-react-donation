<?php

namespace App\Http\Controllers;

use App\Models\Cause;
use App\Http\Requests\StoreCauseRequest;
use App\Http\Requests\UpdateCauseRequest;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use function Pest\Laravel\withMiddleware;

class CauseController extends Controller implements HasMiddleware
{

    /**
     * Handle Middleware
     */
    public static function middleware(){
        return [
            new Middleware('auth', except: ['index', 'show']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Cause/IndexCause', [
            'causes' => Cause::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cause/CreateCause');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCauseRequest $request)
    {
        $cause = Cause::create([
            'name' => $request->validated('name'),
            'description' => $request->validated('description'),
            'goal_amount' => $request->validated('goal_amount'),
            'user_id' => $request->user()->id,
        ]);

        if($cause)
            return redirect()->route('causes.index');
        else
            return back(500);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cause $cause)
    {
        return Inertia::render('Cause/ShowCause', [
            'cause' => $cause,
            'comments' => $cause->comments,
            'donations' => $cause->donations()->with("donor")->get(),
            'dreamer' => $cause->dreamer,
        ]);   
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCauseRequest $request, Cause $cause)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cause $cause)
    {
        //
    }
}
