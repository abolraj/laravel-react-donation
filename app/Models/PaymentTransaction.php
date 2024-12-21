<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymentTransaction extends Model
{
    public $fillable = [
        'donation_id',
        'transaction_id',
        'status',
        'payment_method',
    ];

    public function donation():BelongsTo{
        return $this->belongsTo(Donation::class, "donation_id")->withoutGlobalScope('verifieds');
    }
}
