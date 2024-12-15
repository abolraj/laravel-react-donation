<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    public $fillable = [
        'cause_id',
        'content',
        'date',
    ];

    public function cause(): BelongsTo{
        return $this->belongsTo(Cause::class);
    }
}
