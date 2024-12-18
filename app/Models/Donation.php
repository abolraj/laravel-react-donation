<?php

namespace App\Models;

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

    public function donor(): BelongsTo{
        return $this->belongsTo(User::class, 'user_id');
    }
    public function cause(): BelongsTo{
        return $this->belongsTo( Cause::class);
    }

}
