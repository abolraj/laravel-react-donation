<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Donation extends Model
{
    public $fillable = [
        'donor_id',
        'cause_id',
        'amount',
        'date',
    ];

    public function donor(): BelongsTo{
        return $this->belongsTo(Donor::class);
    }

    public function cause(): BelongsTo{
        return $this->belongsTo(Donor::class);
    }

}
