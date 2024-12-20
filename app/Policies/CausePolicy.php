<?php

namespace App\Policies;

use App\Models\Cause;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CausePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(?User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(?User $user, Cause $cause): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Cause $cause): bool
    {
        return $cause->user_id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Cause $cause): bool
    {
        return $cause->user_id === $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Cause $cause): bool
    {
        return $cause->user_id === $user->id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Cause $cause): bool
    {
        return $cause->user_id === $user->id;
    }
}
