<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use App\Http\Requests\StoreDonationRequest;
use App\Http\Requests\UpdateDonationRequest;
use App\Models\Cause;
use App\Models\PaymentTransaction;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Date;
use Inertia\Inertia;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;

class DonationController extends Controller implements HasMiddleware
{

    /**
     * Handle middleware
     */
    public static function middleware(){
        return [
            new Middleware('auth', except:['index', 'show']),
        ];
    }


    /**
     * Display a listing of the resource.
     */
    public function index(Cause $cause)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Cause $cause)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDonationRequest $request, Cause $cause)
    {
        $data = [
            'amount' => $request->validated('amount'),
            'user_id' => $request->user()->id,
            'cause_id' => $cause->id,
            'date' => Date::createFromTimestamp(LARAVEL_START)->toDateTimeString(),
        ];

        $donation = Donation::create($data);

        if($donation)
            return Inertia::location(route('payment',[
                "title" => $cause->name,
                "desc" => $cause->description,
                "amount" => $data['amount'],
                "donation_id" => $donation->id,
            ]));
            // return redirect(route('causes.show',$cause->id));
        else
            return back(500);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cause $cause, Donation $donation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cause $cause, Donation $donation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDonationRequest $request, Cause $cause, Donation $donation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cause $cause, Donation $donation)
    {
        //
    }
}
