<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cause extends Model
{
    public $fillable = [
        'name',
        'description',
        'goal_amount',
        'user_id',
    ];

    protected $appends = [
        'received_amount',
    ];

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class);
    }

    public function dreamer(): BelongsTo
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function received_amount(){
        return $this->donations()->get('amount')->sum('amount');
    }

    public function remained_amount(){
        return $this->goal_amount - $this->received_amount();
    }

    public function is_open(): bool {
        return $this->received_amount() <= $this->goal_amount;
    }

    protected function receivedAmount(): Attribute {
        return new Attribute(
            get: fn () => $this->received_amount()
        );
    }
}
