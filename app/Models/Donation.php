<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Donation extends Model
{
    public $fillable = [
        'user_id',
        'cause_id',
        'amount',
        'date',
    ];

    public static function booted(): void{
        static::addGlobalScope('verifieds', function(Builder $builder){
            $verfiedPaymentTransactions = PaymentTransaction::where('status', '=', 'verified');
            $builder->whereIn('id', $verfiedPaymentTransactions->get('donation_id'));
        });
    }

    public function donor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function cause(): BelongsTo
    {
        return $this->belongsTo(Cause::class);
    }

    public static function get_all_donations_amount()
    {
        return self::sum('amount');
    }

    public static function get_all_donations_amount_formatted()
    {
        $number = self::get_all_donations_amount();
        if ($number > 1_000_000_000) {
            return '+' . number_format($number / 1000000, 1) . 'B';
        } elseif ($number > 1_000_000) {
            return '+' . number_format($number / 1000000, 1) . 'M';
        } elseif ($number > 1_000) {
            return '+' . number_format($number / 1000, 1) . 'K';
        }
        return $number;
    }
}
