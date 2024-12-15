<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentTransaction extends Model
{
    public $fillable = [
        'donation_id',
        'status',
        'payment_method',
    ];
}
