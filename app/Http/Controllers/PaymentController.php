<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use App\Models\PaymentTransaction;
use Illuminate\Http\Request;
use Shetabit\Multipay\Exceptions\InvalidPaymentException;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;

class PaymentController extends Controller
{
    /**
     * Pay action with
     * GET method
     * @param \Illuminate\Http\Request $request
     * @param string $amount
     * @return void
     */
    public function pay(Request $request){
        
        // When came back from payment gateway and user redirected back from termainl
        if($authority = $request->input('Authority')){
            $paymentTransaction = PaymentTransaction::where('transaction_id', '=', $authority)->first();
            $paymentDonation = $paymentTransaction->donation;
            try {
                Payment::amount($paymentDonation->amount)->transactionId($authority)->verify();
                $paymentTransaction->status = "verified";
                $paymentTransaction->save();
                return redirect(route('causes.show', $paymentDonation->cause_id));
            }catch(InvalidPaymentException $e){
                return $e->getMessage();
            }
        }

        $title = $request->input('title');
        $description = $request->input('desc');
        $amount = $request->input("amount");
        $donation_id = $request->input("donation_id");
        $invoice = new Invoice();
        $invoice->amount(intval($amount))
        ->detail($title, $description);
        
        return Payment::callbackUrl(route('payment'))
            ->purchase($invoice, function($driver, $transaction_id)use($donation_id){
            info('Transaction ID: ' . $transaction_id);
            PaymentTransaction::create([
                "donation_id" => $donation_id,
                "transaction_id" => $transaction_id,
                "status" => "paid",
                "payment_method" => "zarinpal",
            ]);
        })->pay()->render();
    }
}
