<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cause extends Model
{
    public $fillable = [
        'name',
        'description',
        'goal_amount',
        'user_id',
    ];

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class);
    }
}
